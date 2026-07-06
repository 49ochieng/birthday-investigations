# GIFs

This project does not bundle downloaded GIF files. Instead, GIFs are referenced by URL directly from GIPHY inside:

- `src/data/sammy.ts`
- `src/data/martin.ts`

## How to find good ones

Search GIPHY (https://giphy.com) for terms like:

- "birthday office"
- "work meeting funny"
- "happy birthday dance"
- "corporate funny"
- "confetti celebration"
- "awkward office"
- "the office birthday"
- "birthday cake fail"

Open a GIF, use the Embed/Share panel to copy its direct Media URL (a link ending in `.gif` or `.webp`), and paste it into the `url` field of the corresponding entry in the data file.

Do not download and commit copyrighted GIF files into this repository. Always link out to the hosted GIPHY URL, and keep the "GIFs powered by GIPHY." attribution visible under the gif wall.
