# Department of Unnecessary Birthday Investigations

A completely unserious, entirely-unofficial birthday roast site for two colleagues: **Sammy Chesire** and **Martin Wambui**. Built as one React + Vite + TypeScript + Tailwind app with three routes:

- `/`: landing page with two buttons into each "case file"
- `/sammy`: Sammy's Birthday Audit
- `/martin`: Martin's Annual Performance Roast

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

The static output is written to `dist/`.

## Preview the production build

```bash
npm run preview
```

## Adding photos

Photos live in `public/assets/sammy/` (`sammy-1.jpg` through `sammy-13.jpg`) and `public/assets/martin/` (`martin-1.jpg` through `martin-16.jpg`), and are already wired up in `src/data/sammy.ts` / `src/data/martin.ts`. To add, remove, or reorder photos, drop files into the matching folder and update that person's `images` array to match.

If a listed photo file is missing, the page shows a stylish placeholder card instead of breaking:
> "Photo evidence pending upload. The investigation continues."

See the `README.md` files inside each `public/assets/*` folder for more detail.

## Replacing GIFs

GIFs are configured as plain data, not bundled files. Edit the `gifs` array in:

- `src/data/sammy.ts`
- `src/data/martin.ts`

Search [GIPHY](https://giphy.com) for things like "birthday office", "work meeting funny", "happy birthday dance", "corporate funny", "confetti celebration", "awkward office", "the office birthday", or "birthday cake fail", then copy the direct Media URL from the Embed/Share panel into the `url` field. Keep the "GIFs powered by GIPHY." attribution line under the gif wall.

## Birthday wishes / comments

Each page has a "Public Comments & Birthday Wishes" section where visitors can leave a name and a short message. It is backed by a small Azure Functions API (in `api/`) that stores wishes in Azure Table Storage, so everyone who opens the site sees the same shared wall of comments once it is deployed.

If the API is unreachable (for example, running `npm run dev` alone without the Functions API), the component quietly falls back to saving wishes in that browser's local storage only, so the page still works for local preview, it just will not be shared with other visitors until deployed.

### Running the API locally (optional)

To test the guestbook fully on your machine, install [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local) and the [Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/), then:

```bash
cd api
npm install
cp local.settings.json.example local.settings.json
npm run build
npm start
```

`local.settings.json` defaults to `UseDevelopmentStorage=true`, which expects the [Azurite](https://learn.microsoft.com/azure/storage/common/storage-use-azurite) storage emulator running locally. Then, from the repo root, run `swa start http://localhost:5173 --api-location api` (with `npm run dev` also running) to get the full app plus API on one local URL.

### Configuring storage after deploying

1. Create an Azure Storage Account (any general-purpose v2 account works).
2. Copy its connection string.
3. In your Static Web App resource in the Azure Portal, go to **Configuration** and add an application setting named `WISHES_STORAGE_CONNECTION_STRING` with that connection string.
4. The `wishes` table is created automatically on first use, no manual setup needed.

## Deploying to Azure Static Web Apps

This project is built for deployment to Azure Static Web Apps (free tier works fine), with the guestbook backed by Azure Table Storage.

### Redeploying after making changes

If you deploy manually rather than through a CI pipeline, you can push a new build live with the Static Web Apps CLI and a deployment token:

```bash
npm run build
cd api && npm install && npm run build && cd ..
TOKEN=$(az staticwebapp secrets list --name <your-static-web-app-name> --resource-group <your-resource-group> --query "properties.apiKey" -o tsv)
npx @azure/static-web-apps-cli deploy ./dist --api-location ./api --api-language node --api-version 22 --deployment-token "$TOKEN" --env production
```

(On Windows, if the SWA CLI's bundled deploy binary errors on the API step with a generic Oryx failure, it usually still works when `--api-language node --api-version 22` is passed explicitly, as above.)

### Custom domain

To point your own domain at the site, add a CNAME record for it (in whichever DNS zone manages that domain) targeting the default `*.azurestaticapps.net` hostname, then run:

```bash
az staticwebapp hostname set --name <your-static-web-app-name> --resource-group <your-resource-group> --hostname <your-domain>
```

Azure validates the CNAME and issues a free managed SSL certificate automatically, usually within a few minutes.

## Deploying to Azure Static Web Apps from scratch (for a new environment)

1. Push this repo to GitHub.
2. In the Azure Portal, create a new **Static Web App** resource.
3. Connect it to your GitHub repository and branch.
4. Build presets:
   - **Build preset:** React (or Custom)
   - **App location:** `/`
   - **Api location:** `api`
   - **Output location:** `dist`
5. Azure will generate a GitHub Actions workflow that builds and deploys both the app and the API automatically on every push.
6. Add the `WISHES_STORAGE_CONNECTION_STRING` application setting as described above so the guestbook is shared across visitors.

`staticwebapp.config.json` is already set up with a navigation fallback so client-side routing (`/sammy`, `/martin`) works correctly on refresh/direct link, while `/assets/*` and `/api/*` are excluded from the fallback so static files and API calls are handled directly.

## Tech stack

- React 18 + Vite + TypeScript
- React Router
- Tailwind CSS
- Framer Motion
- lucide-react icons
- Azure Functions (Node.js/TypeScript) + Azure Table Storage for the birthday wishes guestbook

## Disclaimer

This website is 100% unserious, 0% legally binding, and created for birthday laughs only.
