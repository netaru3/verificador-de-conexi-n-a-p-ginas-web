
import { execSync } from 'child_process'
function instalar(paquete){try{require.resolve(paquete)} catch{
execSync(`npm install ${paquete}`)
}};
instalar("-g pm2")
execSync("npx pm2 start ecosystem.config.cjs")
