import { copyFileSync, existsSync } from "node:fs";

const indexPath = "dist/index.html";
const notFoundPath = "dist/404.html";

if (!existsSync(indexPath)) {
  console.error("copy-spa-404: dist/index.html not found — run vite build first.");
  process.exit(1);
}

copyFileSync(indexPath, notFoundPath);
console.log("copy-spa-404: created dist/404.html for GitHub Pages SPA routing");
