Este proyecto usa un sistema de envío de gmails y de logs.
cuando se logra hacer una conexión a una página web, se crea un archivo "logs/low" donde escribe todas las veces en que la conexión ha sido exitosa, cuando la conexión se pierde, envía un gmail al usuario que especifiques en el .env.

es un remake de un repositorio que hice, donde automatizaba el ping de nmap a google.com.

Si tienes una página y quieres ser el primero en ser notificado cuando se cae su conexión, este código te podría ayudar



pasos para arrancar el proyecto:

1: npm install -g ts-node yargs

2: npm install --save-dev @types/node --save-dev @types/yargs

3: ts-node verificador --url="la_url"


IMPORTANTE: para salir una vez se establezca la conexión, usa ctrl + c
