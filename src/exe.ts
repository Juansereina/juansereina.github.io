// TypeScript getting types and values from Objects or Arrays using indexes

// How to get the type of the value

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

// How to get the actual value

const User2 = {
  name: 'Juan',
  age: 26,
  isDev: true,
  id: null,
} as const;

type Data2 = typeof User2;
type Name2 = Data2['name']; // Juan
type Age2 = Data2['age']; // 26
type Dev2 = Data2['isDev']; // true
type Id2 = Data2['id']; // null - Notice that null is the value and the type at the same time

// Convert to an union

type DataUnion = (typeof User2)[keyof typeof User2]; // true | "Juan" | 26 | null

type DataUnion3 = keyof typeof User2; // "name" | "age" | "isDev" | "id"

// Adding utilities

type DataUnion2 = (typeof User2)[Exclude<keyof typeof User2, 'age' | 'isDev'>]; // 'Juan' | null;
type DataUnion4 = (typeof User2)[Extract<keyof typeof User2, 'age' | 'isDev'>]; // true | 26;

// Arrays
const fruits = ['apple', 'banana', 'orange'] as const;

type AppleOrBanana = (typeof fruits)[0 | 1]; // "apple" | "banana"
type Fruit = (typeof fruits)[number]; // "apple" | "banana" | "orange"

// How to get an union from a discriminated union

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

// Get one type from an union

type ClickEvent2 = Extract<Event, { type: 'click' }>;
//  { type: 'click'; event: MouseEvent; }

// Same using exclude

type ClickEvent3 = Exclude<Event, { type: 'click' }>;
//  { type: 'focus'; event: FocusEvent; } | { type: 'keydown'; event: KeyboardEvent; }

/**
 * A is a discriminated union, with 'type' as the discriminator.
 *
 * Discriminated unions have common properties which are used to
 * differentiate between members of the union. In this case, type
 * is the discriminator.
 */
type A =
  | {
      type: 'a';
      a: string;
    }
  | {
      type: 'b';
      b: string;
    }
  | {
      type: 'c';
      c: string;
    };

/**
 * B is a union, but not a discriminated union.
 */
type B = 'a' | 'b' | 'c';

/**
 * C is an enum.
 */
enum C {
  A = 'a',
  B = 'b',
  C = 'c',
}

export {};




[Simplificar Definiciones para los subtitulos]

```ts
/**
 * A is a discriminated union, with 'type' as the discriminator.
 *
 * Discriminated unions have common properties which are used to
 * differentiate between members of the union. In this case, type
 * is the discriminator.
 */
type A =
  | {
      type: 'a';
      a: string;
    }
  | {
      type: 'b';
      b: string;
    }
  | {
      type: 'c';
      c: string;
    };

/**
 * B is a union, but not a discriminated union.
 */
type B = 'a' | 'b' | 'c';

/**
 * C is an enum.
 */
enum C {
  A = 'a',
  B = 'b',
  C = 'c',
}
```
