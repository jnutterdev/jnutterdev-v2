function parseFrontmatterValue(raw) {
  const value = raw.trim();
  if (value.startsWith("'") && value.endsWith("'") && value.length > 1) {
    // YAML single-quoted scalars escape an embedded ' as ''
    return value.slice(1, -1).replace(/''/g, "'");
  }
  if (value.startsWith('"') && value.endsWith('"') && value.length > 1) {
    return value.slice(1, -1).replace(/\\"/g, '"');
  }
  return value;
}

export function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = parseFrontmatterValue(line.slice(colonIdx + 1));
    if (key) result[key] = value;
  }
  return result;
}
