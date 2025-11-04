module.exports = {
  apps: [
    {
      name: 'verificador',
      script: './verificador_automatico.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        url:"https://www.google.com",
        GMAIL_USER: 'tu_gmail',
        GMAIL_PASS: 'tu_contraseña_de_aplicacion',
        GMAIL_DESTI: "gmail_del_destinatario"
      }
    }
  ]

};
