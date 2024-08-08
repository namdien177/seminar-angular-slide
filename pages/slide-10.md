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
      Hello World
    </div>
  `,
})
export class AppComponent {}
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