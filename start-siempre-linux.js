import { execSync } from 'child_process'
function instalar(paquete){try{require.resolve(paquete)} catch{
execSync(`npm install ${paquete}`)
}};
instalar("-g pm2")
execSync("pm2 startup")
 execSync("npx pm2 save")