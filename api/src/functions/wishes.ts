import { app, HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { TableClient, RestError } from "@azure/data-tables";

const TABLE_NAME = "BirthdayWishes";
const VALID_PERSONS = new Set(["sammy", "martin"]);
const MAX_NAME_LENGTH = 60;
const MAX_MESSAGE_LENGTH = 400;

interface WishEntity {
  partitionKey: string;
  rowKey: string;
  name: string;
  message: string;
  createdAt: string;
}

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

let tableClient: TableClient | null = null;
let tableEnsured = false;

function getTableClient(): TableClient {
  if (tableClient) return tableClient;
  const connectionString =
    process.env.WISHES_STORAGE_CONNECTION_STRING || process.env.AzureWebJobsStorage;
  if (!connectionString) {
    throw new Error("Missing storage connection string. Set WISHES_STORAGE_CONNECTION_STRING.");
  }
  tableClient = TableClient.fromConnectionString(connectionString, TABLE_NAME);
  return tableClient;
}

async function ensureTable(client: TableClient): Promise<void> {
  if (tableEnsured) return;
  try {
    await client.createTable();
  } catch (err) {
    if (!(err instanceof RestError && err.statusCode === 409)) {
      throw err;
    }
  }
  tableEnsured = true;
}

function sortableRowKey(): string {
  const inverted = (9999999999999 - Date.now()).toString().padStart(13, "0");
  const random = Math.random().toString(36).slice(2, 8);
  return `${inverted}-${random}`;
}

function toWish(entity: WishEntity): Wish {
  return {
    id: entity.rowKey,
    name: entity.name,
    message: entity.message,
    createdAt: entity.createdAt,
  };
}

function jsonResponse(status: number, body: unknown): HttpResponseInit {
  return {
    status,
    jsonBody: body,
    headers: { "Content-Type": "application/json" },
  };
}

async function handleGet(request: HttpRequest): Promise<HttpResponseInit> {
  const person = (request.query.get("person") || "").toLowerCase();
  if (!VALID_PERSONS.has(person)) {
    return jsonResponse(400, { error: "person must be 'sammy' or 'martin'" });
  }

  const client = getTableClient();
  await ensureTable(client);

  const wishes: Wish[] = [];
  const entities = client.listEntities<WishEntity>({
    queryOptions: { filter: `PartitionKey eq '${person}'` },
  });

  for await (const entity of entities) {
    wishes.push(toWish(entity));
    if (wishes.length >= 200) break;
  }

  return jsonResponse(200, wishes);
}

async function handlePost(request: HttpRequest): Promise<HttpResponseInit> {
  const body = (await request.json().catch(() => null)) as
    | { person?: string; name?: string; message?: string }
    | null;

  if (!body) {
    return jsonResponse(400, { error: "Invalid JSON body" });
  }

  const person = (body.person || "").toLowerCase();
  const name = (body.name || "").trim();
  const message = (body.message || "").trim();

  if (!VALID_PERSONS.has(person)) {
    return jsonResponse(400, { error: "person must be 'sammy' or 'martin'" });
  }
  if (!name || name.length > MAX_NAME_LENGTH) {
    return jsonResponse(400, { error: `name is required, max ${MAX_NAME_LENGTH} characters` });
  }
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(400, { error: `message is required, max ${MAX_MESSAGE_LENGTH} characters` });
  }

  const client = getTableClient();
  await ensureTable(client);

  const entity: WishEntity = {
    partitionKey: person,
    rowKey: sortableRowKey(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  await client.createEntity(entity);

  return jsonResponse(201, toWish(entity));
}

app.http("wishes", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "wishes",
  handler: async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
    try {
      if (request.method === "GET") {
        return await handleGet(request);
      }
      if (request.method === "POST") {
        return await handlePost(request);
      }
      return jsonResponse(405, { error: "Method not allowed" });
    } catch (err) {
      context.error("wishes function error", err);
      return jsonResponse(500, { error: "Something went wrong. Please try again." });
    }
  },
});
