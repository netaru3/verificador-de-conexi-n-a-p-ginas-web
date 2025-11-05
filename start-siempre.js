import { execSync } from 'child_process'
function instalar(paquete){try{require.resolve(paquete)} catch{
execSync(`npm install ${paquete}`)
}};
instalar("-g pm2-windows-startup")
excecSync("node start")
execSync("pm2-startup install")

 execSync("npx pm2 save")
