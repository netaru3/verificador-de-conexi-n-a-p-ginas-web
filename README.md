Este es el proyecto más grande que he hecho hasta la fecha xD.

Lo que hace este código es sencillo: mantiene la conexión con un sitio web y te avisa por gmail cuando pierdes esas conexión (ideal si quieres estar alerta de las caídas de tu server), cuenta con un sistema de logs que se guardan en el archivo logs/low/texto.txt

para iniciarlo tienes que hacer node start, y para pararlo tienes que hacer node stop.

IMPORTANTE: Aunque cierres la aplicación, se seguirá ejecutando en segundo plano, sí o sí tienes que hacer node stop o finalizar el proceso en el administrador de tareas si quieres dejar de usarlo.
