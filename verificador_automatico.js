import {logs} from './logs.js'
import readline from 'readline/promises'
import {enviargmail} from './enviargmail.js'
import {codigo} from './enviargmail.js'
import {gmail} from './enviargmail.js';
let tiempo= 30000
let i=0
setInterval(() => {
  i=i+10; if(i===86400){logs.deletepath()}
}, 10000);
async function verificador(url) {

 setInterval(async () => {
  try{let res=await fetch(url);
    if(!res.ok){;enviargmail(`hubo un error en la conexión con la url
      ${url}`, true,codigo,gmail,gmail,"error de conexión"
    );logs.savelogs("error de conexión con la url","high")
    ; return false
 }; logs.crearpath();
 logs.savelogs("la conexión es estable","high");return true
}catch(error){logs.savelogs("error");enviargmail("hubo un error en:"+url+error,
  true,codigo,gmail,gmail,"error en el servidor");return false}
 }, tiempo);
 ;
 }
let url= process.env.url
 verificador(url)
 console.log(url)
