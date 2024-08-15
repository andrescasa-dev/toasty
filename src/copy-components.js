#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const srcPath = path.resolve(__dirname, 'main.tsx');
const destPath = path.resolve(process.cwd(), 'src/components/TestToasty.tsx');

// Crear la carpeta src/components si no existe
fs.mkdirSync(path.dirname(destPath), { recursive: true });

// Copiar el archivo
fs.copyFileSync(srcPath, destPath);

console.log('Component TestToasty copied to src/components/');
