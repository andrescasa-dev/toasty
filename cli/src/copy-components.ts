#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type CopyStatement = {
  src: string;
  dest: string;
  options?: { include: string; exclude: string };
};

const createDir = (
  originPath: string,
  { src, dest, options }: CopyStatement,
) => {
  return options
    ? {
        src: path.resolve(__dirname, originPath, src),
        dest: path.resolve(process.cwd(), dest),
        filterCb: (file: string) =>
          file.endsWith(options.include) && !file.includes(options.exclude),
      }
    : {
        src: path.resolve(__dirname, originPath, src),
        dest: path.resolve(process.cwd(), dest),
      };
};

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

export default function copyAllFiles(
  originPath: string,
  copyStatement: CopyStatement[],
) {
  copyStatement.forEach(({ src: partialSrc, dest: partialDest, options }) => {
    const { src, dest, filterCb } = createDir(originPath, {
      src: partialSrc,
      dest: partialDest,
      options,
    });
    ensureOrCreate(dest);
    copyAll(src, dest, filterCb);
  });
}
