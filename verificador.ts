import { isExternalModuleReference } from 'typescript';
import {logs} from '../infraestructura/logs.ts'
import readline from 'readline/promises'
import {enviargmail} from './enviargmail.ts'
import {codigo} from './enviargmail.ts'
import {gmail} from './enviargmail.ts';

let rl= readline.createInterface(
    {input: process.stdin,
    output: process.stdout
    }
 )
console.log(codigo)
console.log(gmail)
let tiempo:number |string | undefined= await  rl.question("escriba salir o ingrese el tiempo del intervalo en ms:")
rl.close();
console.log("hola")
async function verificador(url:string) {

 setInterval(async () => {
  try{let res=await fetch(url);
    if(!res.ok){;enviargmail(`hubo un error en la conexión con la url
      ${url}`, true,codigo,gmail,gmail,"error de conexión"
    );console.log("error de conexión")
    ; return false
 }; logs.crearpath();
 logs.savelogs("la conexión es estable","low");return true
}catch(error){console.log("error");enviargmail("hubo un error en:"+url+error,
  true,codigo,gmail,gmail,"error en el servidor");return false}
 }, tiempo);
 ;
 }

 verificador("https://www.google.com")
