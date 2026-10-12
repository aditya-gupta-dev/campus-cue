import sharp from "sharp";
import { writeFile } from "node:fs/promises";
const icon = await sharp(
  Buffer.from(
    `<svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="14" fill="black"/><circle cx="32" cy="32" r="21" fill="none" stroke="white" stroke-width="2"/><path d="M39 24 L35 35 L24 40 L29 29 Z" fill="white"/></svg>`,
  ),
)
  .png()
  .toBuffer();
await writeFile("public/icon.png", icon);
// ICO container with a PNG payload, supported by browsers.
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 64;
header[7] = 64;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(icon.length, 14);
header.writeUInt32LE(22, 18);
await writeFile("app/favicon.ico", Buffer.concat([header, icon]));
