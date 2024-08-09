<template v-slot:default>

# <React />
````md magic-move {lines: true}
```tsx
// src/app.tsx
export function App() {
  return (
    <input />
  );
}
```
```tsx
// src/app.tsx
export function App() {
  const [name, setName] = useState('');

  return (
    <input />
  );
}
```
```tsx
// src/app.tsx
export function App() {
  const [name, setName] = useState('');

  return (
    <input defaultValue={name}
           onChange={(e) => setName(e.target.value)}
    />
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
    <input />
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
    <input />
  `,
})
export class AppComponent {
  name = '';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <input [value]="name"
           (change)="name = $event.target.value"
    />
  `,
})
export class AppComponent {
  name = '';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <input [value]="name"
           <!-- this will have type-error -->
           (change)="name = $event.target.value"
    />
  `,
})
export class AppComponent {
  name = '';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <input [value]="name"
           <!-- this will have type-error -->
           (change)="name = $event.target.value"
    />
  `,
})
export class AppComponent {
  name = '';

  inputChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <input [value]="name"
           (change)="inputChange($event)"
    />
  `,
})
export class AppComponent {
  name = '';

  inputChange(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <!-- this will have error -->
    <input [(value)]="name" />
  `,
})
export class AppComponent {
  name = '';
}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="name" />
  `,
})
export class AppComponent {
  name = '';
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