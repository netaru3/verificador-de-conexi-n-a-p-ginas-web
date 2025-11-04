Este es el proyecto más grande que he hecho hasta la fecha xD.

Lo que hace este código es sencillo: mantiene la conexión con un sitio web y te avisa por gmail cuando pierdes esas conexión (ideal si quieres estar alerta de las caídas de tu server), cuenta con un sistema de logs que se guardan en el archivo logs/low/texto.txt

para iniciarlo tienes que hacer node start, y para pararlo tienes que hacer node stop.

para que funcione, tienen que además de descargarse todos los archivos, deben de configurar el ecosystem.config.cjs

por ejemplo: module.exports = {
  apps: [
    {
      name: 'verificador',
      script: './verificador_automatico.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        url:"https://www.google.com",
        GMAIL_USER: 'netaru3@gmail.com',
        GMAIL_PASS: 'tu_contraseña_de_aplicacion',
        GMAIL_DESTI: "netaru3@gmail.com"
      }
    }
  ]

};

otra cosa importante, es que para conseguir una contraseña de aplicación, tienen que tener la doble autentificación de google activa, y pedirla entrando a este link: https://myaccount.google.com/apppasswords?rapt=AEjHL4MgWZ9ZPlMbCNPmv4bg2Uk4KUYcHCjUL3Y55H52cLs40NjtcMpOA4nrX43Pd96vhQy9nRRKHKEuV5OnWlulaTjEY_hszn7xvdJHdhZ0juHgdC3N2qY

IMPORTANTE: Aunque cierres la aplicación, se seguirá ejecutando en segundo plano, sí o sí tienes que hacer node stop o finalizar el proceso en el administrador de tareas si quieres dejar de usarlo.
