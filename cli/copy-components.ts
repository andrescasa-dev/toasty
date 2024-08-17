#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, "../../visual-testing/src/components/");
const destDir = path.resolve(process.cwd(), "src/components/");

// Crear la carpeta src/components si no existe
fs.mkdirSync(destDir, { recursive: true });

// Leer todos los archivos .tsx en el directorio fuente
const files = fs
  .readdirSync(srcDir)
  .filter((file) => file.endsWith(".tsx") && !file.includes(".stories.tsx"));

// Copiar cada archivo .tsx al directorio de destino
files.forEach((file) => {
  const srcPath = path.join(srcDir, file);
  const destPath = path.join(destDir, file);
  fs.copyFileSync(srcPath, destPath);
  console.log(`Component ${file} copied to src/components/`);
});
