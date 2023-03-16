---
title: Comenzando con React usando Markdown
description: TODO
draft: true
image: { src: 'https://placehold.co/600x400', alt: '', srcset: '' }
publishedAt: '16/08/2014'
keywords: TODO
---

React es una popular biblioteca de JavaScript para construir interfaces de usuario. Con React, puedes crear componentes reutilizables que facilitan la construcción de aplicaciones complejas. En este artículo, repasaremos los conceptos básicos para comenzar con React usando Markdown.

## Instalación de React

Para empezar con React, debes instalarlo. La forma más sencilla de hacerlo es usando un gestor de paquetes como npm. Así es cómo puedes instalar React usando npm:

```bash
npm install react
```

Esto instalará React y todas sus dependencias. Una vez que React está instalado, puedes comenzar a utilizarlo en tu proyecto.
Creación de un componente React

El núcleo de React es su modelo de componentes. En React, todo es un componente. Para crear un componente, simplemente debes crear una función de JavaScript que devuelva algo de HTML.

## Aquí tienes un ejemplo de un componente React simple:

```jsx
import React from 'react';

function Saludo() {
  return <h1>Hola, Mundo!</h1>;
}

export default Saludo;
```

Este componente es una función llamada Saludo que devuelve un elemento `<h1>` que contiene el texto "Hola, Mundo!". Para utilizar este componente en tu proyecto, debes importarlo y luego renderizarlo en tu aplicación.
Renderizado de un componente React

Para renderizar un componente React, debes crear un elemento HTML que sirva como contenedor para tu componente React. Puedes hacer esto utilizando el elemento div:

```html
<div id="root"></div>
```

Este elemento div servirá como contenedor para nuestro componente React. Para renderizar nuestro componente Saludo dentro de este div, debemos utilizar el método ReactDOM.render().

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Saludo from './Saludo';

ReactDOM.render(<Saludo />, document.getElementById('root'));
```

Este código importa la biblioteca ReactDOM y nuestro componente Saludo. Luego llama al método ReactDOM.render(), pasando nuestro componente Saludo y el elemento div que creamos anteriormente.

Cuando ejecutes este código, deberías ver el texto "Hola, Mundo!" renderizado dentro del elemento div.
