# Random

## Idea

Tengo un amigo que comparte una imagen y un video por día en un grupo. La idea es que el programa elija ambos al azar y que luego los agregue a una lista negra para no enviar algo repetido.

El programa lee todos los archivos dentro de las carpetas "images" y "videos", guarda los nombres en un array, tira un número aleatorio dentro del largo del array, luego se fija si el archivo que salió está dentro de la lista negra, si lo está tira otro número y si no está muestra por consola el número que salió y el nombre del archivo.
También tiene la posibilidad de elegir un número a mano en lugar de tirarlo al azar, e igualmente se fija si el archivo ya salió y si no lo hizo lo guarda en la lista negra.

Está pensado para una cantidad grande de archivos, y también que se le vayan agregando, ya que siempre que sale un número repetido vuelve a tirar un número nuevo y si ya salieron todos entra en un bucle infinito.

Los archivos dentro de las carpetas "images" y "videos" están vacíos y sólo tienen la finalidad de testear el código.


## Comandos

```bash
node random.js img
node random.js img 435
node random.js video
node random.js video 534
```