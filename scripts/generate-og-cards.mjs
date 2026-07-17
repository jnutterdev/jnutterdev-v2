import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { parseFrontmatter } from "./lib/frontmatter.mjs";
import { renderCard } from "./og-card/render-card.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BLOG_DIR = join(__dirname, "..", "src/content/blog");
const OUT_DIR = join(__dirname, "..", "public/images/og");

function fmtDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const files = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  for (const file of files) {
    const fm = parseFrontmatter(readFileSync(join(BLOG_DIR, file), "utf8"));
    if (fm.draft === "true") continue;
    if (fm.cover_image) continue;

    const slug = file.replace(/\.mdx$/, "").toLowerCase();
    const png = await renderCard({
      title: fm.title,
      date: fmtDate(fm.date),
      kicker: "WRITING",
    });
    writeFileSync(join(OUT_DIR, `${slug}.png`), png);
    console.log(`Generated card: ${slug}.png`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
