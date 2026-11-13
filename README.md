https://zurdi.dev

The site is generated statically for Cloudflare Pages using the Node version in
`.node-version`. Use `npm run generate` with `.output/public` as the build output
directory.

RomM statistics are fetched in the browser. Docker Hub downloads come from
Shields.io because the Docker Hub API does not allow browser cross-origin
requests; its count is rounded and cached by Shields.io.
