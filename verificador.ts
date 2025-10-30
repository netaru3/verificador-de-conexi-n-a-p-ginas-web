import readline from 'readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function verificador(url:string) {
    
 try{let res=await fetch(url);
    if(!res.ok){console.error("hubo un error en la conexión del servidor")
    ; return false
 }
 console.log("la conexión es estable");return true
}catch(error){console.log("hubo un error");return false}};
 rl.question("escriba salir o ingrese el tiempo del intervalo en ms:",
  function(tiempo:string){if(tiempo==="salir"){rl.close(); return true};
  if(isNaN(Number(tiempo))){console.log("ingrese un número");
    rl.close(); return false
  };rl.question("escriba salir o ingrese la url en formato https://www.example.com:",
   function(eso: string){if(eso.includes("http://") || eso.includes("https://")=== false)
    {
    console.log("ingrese una url válida"), rl.close(); return true
   };
    let id=setInterval(() => {if(eso==="salir"){
    rl.close();clearInterval(id); return true}
   ;
    verificador(eso);
},Number(tiempo));})}
 )
