Este proyecto usa un sistema de envío de gmails y de logs.
Me da pereza explicarlo en profundidad, pero básicamente, cuando se logra hacer una conexión a una página web, se crea un archivo "logs/low" donde escribe todas las veces en que la conexión ha sido exitosa, cuando la conexión se pierde, envía un gmail al usuario que especifiques en el .env.



pasos para arrancar el proyecto:

1: npm install -g ts-node

2: npm install --save-dev @types/node

3: ts-node verificador


IMPORTANTE: para salir una vez el establezca la conexión, usa ctrl + c
