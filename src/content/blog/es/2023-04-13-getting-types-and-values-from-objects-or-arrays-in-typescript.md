---
title: Access Keys or Values in TypeScript
description: How to access Keys and Values from Objects or Arrays in TypeScript by example
publishedAt: 2023-04-13T16:40:59.762Z
image:
  src: ''
  alt: ''
preview: ''
draft: true
tags: []
categories: []
slug: access-keys-values-typescript
---

## Objects

### [Obtener el type de un valor](#object-value-type)

```ts
const User = {
  name: 'Juan',
  age: 26,
  isDev: true,
  id: null,
};

type Data = typeof User;
type Name = Data['name']; // string
type Age = Data['age']; // number
type Dev = Data['isDev']; // boolean
type Id = Data['id']; // null
```

### [Obtener el valor como type](#object-value-as-type)

```ts
const User = {
  name: 'Juan',
  age: 26,
  isDev: true,
  id: null,
} as const; // nota el uso de -> as const

type Data = typeof User;
type Name = Data['name']; // Juan
type Age = Data['age']; // 26
type Dev = Data['isDev']; // true
type Id = Data['id']; // null
// Para Id null es el value y el type al mismo tiempo
```

### [Convertir object a union](#object-to-union)

```ts
const User = {
  name: 'Juan',
  age: 26,
  isDev: true,
  id: null,
} as const;

// union de los keys
type KeysUnion = keyof typeof User;
// "name" | "age" | "isDev" | "id"

// union de los values
type ValuesUnion = (typeof User)[keyof typeof User];
// true | "Juan" | 26 | null
```

### [Crear union usando utilidades](#object-to-union-using-utilities)

```ts
const User = {
  name: 'Juan',
  age: 26,
  isDev: true,
  id: null,
} as const;

type DataUnion = (typeof User)[Exclude<keyof typeof User, 'age' | 'isDev'>];
// 'Juan' | null;
type DataUnion = (typeof User)[Extract<keyof typeof User, 'age' | 'isDev'>];
// true | 26;

// Opcionalmente puedes crear usar type para mejorar legibilidad

type TUser = typeof User;
type KeysUnion = keyof TUser;

type DataUnion = TUser[Exclude<KeysUnion, 'age' | 'isDev'>];
// 'Juan' | null;
type DataUnion = TUser[Extract<KeysUnion, 'age' | 'isDev'>];
// true | 26;
```

## [Arrays](#arrays)

```ts
const animals = ['🐶', '🐱', '🦄'] as const;

type DogOrCat = (typeof animals)[0 | 1]; // "🐶" | "🐱"
type Animals = (typeof animals)[number]; // "🐶" | "🐱" | "🦄"
```

## Discriminated unions

### [Convertir discriminated union en un union](#convert-discriminated-unions)

```ts
export type Event =
  | {
      type: 'click';
      event: MouseEvent;
    }
  | {
      type: 'focus';
      event: FocusEvent;
    }
  | {
      type: 'keydown';
      event: KeyboardEvent;
    };

type ClickEvent = Event['type']; // "click" | "focus" | "keydown"
```

### [Convertir union usando utilidades](#convert-discriminated-unions-using-utilities)

```ts
type ClickEvent2 = Extract<Event, { type: 'click' }>;
//  { type: 'click'; event: MouseEvent; }

type ClickEvent3 = Exclude<Event, { type: 'click' }>;
//  { type: 'focus'; event: FocusEvent; } | { type: 'keydown'; event: KeyboardEvent; }
```
