#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDirectory = "../../visual-testing/src/";

const copyDirectories = [
  {
    src: path.resolve(__dirname, srcDirectory, "components/"),
    dest: path.resolve(process.cwd(), "src/components/"),
    filterCb: (file: string) =>
      file.endsWith(".tsx") && !file.includes(".stories.tsx"),
  },
  {
    src: path.resolve(__dirname, srcDirectory, "types/"),
    dest: path.resolve(process.cwd(), "src/types/"),
  },
  {
    src: path.resolve(__dirname, srcDirectory, "hooks/"),
    dest: path.resolve(process.cwd(), "src/hooks/"),
  },
];

function copyAll(
  src: string,
  dest: string,
  filterCb?: (file: string) => boolean,
) {
  // Read files and apply filter if needed
  const filteredFiles = filterCb
    ? fs.readdirSync(src).filter(filterCb)
    : fs.readdirSync(src);

  // Copy all files into destination
  filteredFiles.forEach((file) => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Component ${file} copied to src/components/`);
  });
}

function ensureOrCreate(dest: string) {
  if (fs.existsSync(dest)) return;
  fs.mkdirSync(dest, { recursive: true });
}

copyDirectories.forEach(({ src, dest, filterCb }) => {
  ensureOrCreate(dest);
  copyAll(src, dest, filterCb);
});
