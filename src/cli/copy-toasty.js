#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio del archivo actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.resolve(__dirname, '..', 'components' ,'main.tsx');
const destPath = path.resolve(process.cwd(), 'src/components/TestToasty.tsx');

// Crear la carpeta src/components si no existe
fs.mkdirSync(path.dirname(destPath), { recursive: true });

// Copiar el archivo
fs.copyFileSync(srcPath, destPath);

console.log('Component TestToasty copied to src/components/');
