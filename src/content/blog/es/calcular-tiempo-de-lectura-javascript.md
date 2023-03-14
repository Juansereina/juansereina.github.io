---

title: Calcular tiempo de lectura en Javascript
draft: true
image: { src: '../../../../public/images/reading-time.jpg', alt: 'Reloj de arena junto a tres dados' }
publishedAt: '13/03/2023'
---

<img src="/images/reading-time.jpg" alt="">

Cuando empece este blog, inspirandome de otras páginas y me dí cuenta que todos muestran el tiempo que toma leer un post. Pero cómo se hace?

Acá el snippet, por si solo necesitas eso 😆

```js
function readingTime(post) {
  const WORDS_PER_MINUTE = 200;
  const regex = /\w+/g;
  const wordCount = post.match(regex)?.length || 0;

  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}
```


## Cómo funciona?

Creamos una función **readingTime**, con un parametro **post** que sería el texto del cual queremos determinar el tiempo de lectura.

```js
function readingTime(post) {}
```
En internet se dice que las personas leen entre 200 y 300 palabras por minuto, entonces, necesitamos esa medida como refencia.

```js
const WORDS_PER_MINUTE = 200;

```
El truco para encontrar las palabras es utilizar Regex.

```js
const regex = /\w+/g;
```

Utilizando el metodo match de Regex identificamos en el string cuantas palabras hay. Al final, agrego el operador **||** con un **0** por si el regex no encuentra concidencias.

```js
const wordCount = post.match(regex)?.length || 0;
```

Calculamos el tiempo al dividir las paralbas encontradas por las palabras por minuto.

```js
wordCount / WORDS_PER_MINUTE
```

Y utilizando **Math.ceil()** obtenemos el valor aproximado:

```js
function readingTime(post) {
  const WORDS_PER_MINUTE = 200;
  const regex = /\w+/g;
  const wordCount = post.match(regex)?.length || 0;

  return Math.ceil(wordCount / WORDS_PER_MINUTE);
}

readingTime('Mi tiempo de lectura es de 1 min aprox.')

// resultado: 1
```

Si quieres un valor más aproximado puedes cambiar Math.ceil por **Math.floor**, **Math.round** o **Math.trunc** según te convenga más.
