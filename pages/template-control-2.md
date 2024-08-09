<template v-slot:default>

# <React />

````md magic-move {lines: true}
```tsx
// src/app.tsx
export function App() {
  const arrNames = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
```
```tsx{3,9-11|10}
// src/app.tsx
export function App() {
  const arrNames = ['Alice', 'Bob', 'Charlie'];

  return (
    <div>
      <h1>Hello</h1>
      <ul>
        {arrNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
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
      <h1>Hello</h1>
    </div>
  `,
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
```ts{8,14}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello</h1>
      <ul>
        <li *ngFor="let name of arrNames">{{ name }}</li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
```ts{8,12}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello</h1>
      <ul>
        <li *ngFor="let name of arrNames">{{ name }}</li>
      </ul>
    </div>
  `,
  imports: [CommonModule],
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
```ts{8-10,16}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello</h1>
      <ul>
        @for (name of arrNames; track name){
          <li>{{ name }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
```ts{8-16,22}
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello</h1>
      <ul>
        @for (
          name of arrNames;
          track name;
          let idx = $index, isEven = $even
        ){
          <li>{{ name }}</li>
          {{ idx }}
          {{ isEven }}
        }
      </ul>
    </div>
  `,
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
```ts
// src/app.component.ts
@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Hello</h1>
      <ul>
        @for (
          name of arrNames;
          track name;
          let idx = $index, isEven = $even
        ){
          <li>{{ name }}</li>
        }
      </ul>
    </div>
  `,
})
export class AppComponent {
  arrNames = ['Alice', 'Bob', 'Charlie'];
}
```
````

<v-click>

<small>

[More stuff on Angular's `@for` directive](https://angular.dev/guide/templates/control-flow#index-and-other-contextual-variables).

</small>

</v-click>


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