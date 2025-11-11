#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



import { execSync } from 'child_process'
function instalar(paquete){try{require.resolve(paquete)} catch{
execSync(`npm install ${paquete}`)
}};
instalar("-g pm2")
execSync(`pm2 start "${path.join(__dirname, "ecosystem.config.cjs")}"`);
