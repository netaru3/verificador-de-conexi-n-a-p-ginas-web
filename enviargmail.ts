import 'dotenv/config'
import env from 'env-var'
import nodemailer from 'nodemailer';
export let codigo:string | undefined=env.get('codigo').asString();
export let gmail= env.get("email").asString();
export let gmaildestinatario= env.get("emaildestinatario").asString();;

export async function enviargmail(text:string,
  automatizacion:boolean,
 contra:string,email:string,emaildestinatario:string,title:string,
 
){

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: gmail,
    pass:  contra
  }
});

const mailOptions = {
  from:gmail, 
  to:gmaildestinatario,
  subject: title,
  text:text
  
};
const mailOptions2={from:gmail,
  to:gmaildestinatario,
  subject:"se desconectó el internet",
  text:text
}
let info;
try {
  const info = await transporter.sendMail(mailOptions);
  console.log('Correo enviado:', info.response);
} catch (error) {let id=setTimeout(async() => {const info2 = await transporter.sendMail(mailOptions2);
if(info2.accepted.length>0){clearInterval(id)}}, 1000);
  console.error('Error al enviar el correo:', error);
}}
