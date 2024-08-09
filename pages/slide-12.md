<template v-slot:default>

# <React />

````md magic-move {lines: true}
```tsx
// src/app.tsx
export function App() {
  const isGoodbye = true;

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
```
```tsx{3,7|*}
// src/app.tsx
export function App() {
  const isGoodbye = true;

  return (
    <div>
      <h1>{ isGoodbye ? 'Goodbye' : 'Hello' } World</h1>
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
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello World</h1>
    </div>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7,13}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        {{ isGoodbye ? 'Goodbye' : 'Hello' }} World
      </h1>
    </div>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7,8}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        <!-- This won't work! -->
        {{ isGoodbye ? <app-goodbye/> : 'Hello' }} World
      </h1>
    </div>
  `,
  imports: [...],
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7-9}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        <app-goodbye *ngIf="isGoodbye" />
        <app-hello *ngIf="!isGoodbye" />
        World
      </h1>
    </div>
  `,
  imports: [...],
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7-9,13}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        <app-goodbye *ngIf="isGoodbye" />
        <app-hello *ngIf="!isGoodbye" />
        World
      </h1>
    </div>
  `,
  imports: [..., CommonModule],
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7-12}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        @if (isGoodbye) {
          <app-goodbye />
        } @else {
          <app-hello />
        }
        World
      </h1>
    </div>
  `,
})
export class AppComponent {
  isGoodbye = true;
}
```
```ts{7-13}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>
        @if (isGoodbye) {
          <app-goodbye />
          <app-please-comeback />
        } @else {
          <app-hello />
        }
        World
      </h1>
    </div>
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