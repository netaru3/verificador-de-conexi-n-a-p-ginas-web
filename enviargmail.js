
import ecosystem from './ecosystem.config.cjs'
let nodemailer =await import('nodemailer');
import { execSync } from 'child_process'
export let codigo=process.env.GMAIL_PASS
export let gmail= process.env.GMAIL_USER;
export let gmaildestinatario= process.env.GMAIL_DESTI;


export async function enviargmail(text,
  automatizacion,
 contra,email,emaildestinatario,title
 
){

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: gmail,
    pass: codigo
  }
});

const mailOptions = {
  from:gmail, 
  to:gmaildestinatario,
  subject: "error con el fetch",
  text:"hubo un fallo intentando conectar con tu servidor",
 attachments: [{filename:"conexiones-exitosas.txt",
  path: "./logs/low/conexiones-exitosas.txt"},
{filename:"conexiones-fallidas.txt",
  path: "./logs/high/conexiones-fallidas.txt"}]
  
};
const mailOptions2={from:gmail,
  to:gmaildestinatario,
  subject:"se desconectó el internet",
  text:"probablemente se le desconectó el internet",
   attachments: [{filename:"conexiones-.txt",
  path: "./logs/low/conexiones-exitosas.txt"},
{filename:"conexiones-fallidas.txt",
  path: "./logs/high/conexiones-fallidas.txt"}]
}
let info;
try {
  const info = await transporter.sendMail(mailOptions);
  console.log('Correo enviado:', info.response);
} catch (error) {let id=setTimeout(async() => {const info2 = await transporter.sendMail(mailOptions2);
if(info2.accepted.length>0){clearInterval(id)}}, 31000);
  console.error('Error al enviar el correo:', error);
}}
