import fs from "node:fs";
import path from "node:path";

const projectsFile = path.join(process.cwd(), "lib", "projects.ts");
const content = fs.readFileSync(projectsFile, "utf-8");

const outDir = path.join(process.cwd(), "content", "readmes");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Extract projects by parsing slugs and readmeRawUrls
const projectMatches = [...content.matchAll(/slug:\s*"([^"]+)"[\s\S]*?github:\s*"([^"]+)"[\s\S]*?readmeRawUrls:\s*\[([\s\S]*?)\]/g)];

console.log(`Found ${projectMatches.length} projects.`);

async function fetchWithTimeout(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    if (res.ok) {
      const text = await res.text();
      if (text.trim()) return text;
    }
  } catch (err) {
    clearTimeout(id);
  }
  return null;
}

for (const match of projectMatches) {
  const slug = match[1];
  const github = match[2];
  const rawUrlsStr = match[3];
  const urls = [...rawUrlsStr.matchAll(/"([^"]+)"/g)].map((m) => m[1]);

  const targetFile = path.join(outDir, `${slug}.md`);

  console.log(`Syncing ${slug}...`);
  let readme = null;
  for (const url of urls) {
    readme = await fetchWithTimeout(url);
    if (readme) {
      console.log(`  ✓ Fetched from ${url}`);
      break;
    }
  }

  if (readme) {
    fs.writeFileSync(targetFile, readme, "utf-8");
  } else {
    console.warn(`  ✗ Failed to fetch README for ${slug}`);
  }
}

console.log("Sync complete!");
