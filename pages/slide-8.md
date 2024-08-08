<template v-slot:default>

# <React />
````md magic-move {lines: true}
```tsx
// src/app.tsx
export function App() {
  return (
    <div>
      Hello World
    </div>
  );
}
```
```tsx
// src/app.tsx
export function App() {
  const [msg] = useState('Hello World');
  return (
    <div>
      {msg}
    </div>
  );
}
```
```tsx
// src/app.tsx
export function App() {
  const [msg, setMsg] = useState('Hello World');
  return (
    <div>
      {msg}
      <br />
      <button onClick={() => setMsg('hello me!')}>
        Click Me
      </button>
    </div>
  );
}
```
```tsx
// src/app.tsx
export function App() {
  const [msg, setMsg] = useState('Hello World');
  return (
    <div>
      {msg}
      <br />
      <button onClick={(event) => setMsg('hello me!')}>
        Click Me
      </button>
    </div>
  );
}
```
````

</template>

<template v-slot:right>

# <Angular />

````md magic-move {lines: true}
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      Hello World
    </div>
  `,
})
export class AppComponent {}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      {{ msg }}
    </div>
  `,
})
export class AppComponent {
  msg = 'Hello World';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      {{ msg }}
      <button (click)="msg = 'hello me!'">
        click me
      </button>
    </div>
  `,
})
export class AppComponent {
  msg = 'Hello World';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      {{ msg }}
      <button (click)="setMsg()'">
        click me
      </button>
    </div>
  `,
})
export class AppComponent {
  msg = 'Hello World';

  setMsg() {
    this.msg = 'hello me!';
  }
}
```
```ts {*|8}
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div>
      {{ msg }}
      <button (click)="setMsg($event)'">
        click me
      </button>
    </div>
  `,
})
export class AppComponent {
  msg = 'Hello World';

  setMsg(e: MouseEvent) {
    this.msg = 'hello me!';
  }
}
```
````
</template>

<style>
    .slidev-layout {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .slidev-layout.two-columns {
        gap: 1rem;
    }
</style>