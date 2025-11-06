import {logs} from './logs.js'
import readline from 'readline/promises'
import {enviargmail} from './enviargmail.js'
import {codigo} from './enviargmail.js'
import {gmail} from './enviargmail.js';;
let tiempo= 30000
console.log("hola")
async function verificador(url) {

 setInterval(async () => {
  try{let res=await fetch(url);
    if(!res.ok){;enviargmail(`hubo un error en la conexión con la url
      ${url}`, true,codigo,gmail,gmail,"error de conexión"
    );logs.savelogs("error de conexión con la url", "high")
    ; return false
 }; logs.crearpath();
 logs.savelogs("la conexión es estable","low");return true
}catch(error){logs.savelogs("error de conexion","high");enviargmail("hubo un error en:"+url+error,
  true,codigo,gmail,gmail,"error en el servidor");return false}
 }, tiempo);
 ;
 }
let url= "https://www.google.com"
 verificador(url)

 console.log(url)





