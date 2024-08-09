<template v-slot:default>

# <React />

````md magic-move {lines: true}
```tsx
// src/app.tsx
export function App() {
  const isGoodbye = true;

  return (
    <h1>Hello World</h1>
  );
}
```
```tsx{3,6}
// src/app.tsx
export function App() {
  const isGoodbye = true;

  return (
    <h1>{ isGoodbye ? 'Goodbye' : 'Hello' } World</h1>
  );
}
```
````

</template>

<template v-slot:right>

# <Angular />

````md magic-move {lines: true}
```angular-ts
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>Hello World</h1>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```angular-ts{6,11}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      {{ isGoodbye ? 'Goodbye' : 'Hello' }} World
    </h1>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```angular-ts{6-7}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      <!-- This won't work! -->
      {{ isGoodbye ? <app-goodbye/> : 'Hello' }} World
    </h1>
  `,
  imports: [...],
})
export class AppComponent {
  isGoodbye = true;
}
```
```angular-ts{6-7}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      <app-goodbye *ngIf="isGoodbye" />
      <app-hello *ngIf="!isGoodbye" />
      World
    </h1>
  `,
  imports: [...],
})
export class AppComponent {
  isGoodbye = true;
}
```
```angular-ts{6-7,11}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      <app-goodbye *ngIf="isGoodbye" />
      <app-hello *ngIf="!isGoodbye" />
      World
    </h1>
  `,
  imports: [..., CommonModule],
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{6-11}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      @if (isGoodbye) {
        <app-goodbye />
      } @else {
        <app-hello />
      }
      World
    </h1>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{6-12}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <h1>
      @if (isGoodbye) {
        <app-goodbye />
        <app-please-comeback />
      } @else {
        <app-hello />
      }
      World
    </h1>
  `,
})
export class AppComponent {
  isGoodbye = true;
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