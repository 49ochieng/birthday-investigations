export interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export type WishSource = "azure" | "local";

const STORAGE_PREFIX = "birthday-wishes:";

function localKey(person: string): string {
  return `${STORAGE_PREFIX}${person}`;
}

function readLocal(person: string): Wish[] {
  try {
    const raw = localStorage.getItem(localKey(person));
    return raw ? (JSON.parse(raw) as Wish[]) : [];
  } catch {
    return [];
  }
}

function writeLocal(person: string, wishes: Wish[]): void {
  try {
    localStorage.setItem(localKey(person), JSON.stringify(wishes));
  } catch {
    // Storage full or unavailable, nothing more we can do here.
  }
}

export async function fetchWishes(person: string): Promise<{ wishes: Wish[]; source: WishSource }> {
  try {
    const res = await fetch(`/api/wishes?person=${encodeURIComponent(person)}`);
    if (!res.ok) throw new Error(`status ${res.status}`);
    const data = (await res.json()) as Wish[];
    return { wishes: data, source: "azure" };
  } catch {
    return { wishes: readLocal(person), source: "local" };
  }
}

export async function postWish(
  person: string,
  name: string,
  message: string
): Promise<{ wish: Wish; source: WishSource }> {
  try {
    const res = await fetch(`/api/wishes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ person, name, message }),
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const wish = (await res.json()) as Wish;
    return { wish, source: "azure" };
  } catch {
    const wish: Wish = {
      id: crypto.randomUUID(),
      name,
      message,
      createdAt: new Date().toISOString(),
    };
    const updated = [wish, ...readLocal(person)];
    writeLocal(person, updated);
    return { wish, source: "local" };
  }
}
