<template v-slot:default>

# <Angular /> Single-File Component

````md magic-move {lines: true}
```ts
// src/app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  template: `
    <div>
      <app-welcome />
    </div>
  `,
})
export class AppComponent {}
```
```ts
// src/app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  styles: `
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `,
  template: `
    <!-- it does have auto-complete! -->
    <div class="container">
      <app-welcome />
    </div>
  `,
})
export class AppComponent {}
```
````
</template>

<template v-slot:right>

# <Angular /> Traditional Component

````md magic-move {lines: true}
```ts
// src/app.component.ts
@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
```
```ts
// src/app.component.ts
@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
```
````

````md magic-move {lines: true}
```html
<!-- src/app.component.html -->
<div>
  <app-welcome></app-welcome>
</div>
```
```html
<!-- src/app.component.html -->
<!-- it also has auto-complete! -->
<div class="container">
  <app-welcome></app-welcome>
</div>
```
````

````md magic-move {lines: true}
```css
/* src/app.component.css */
```
```css
/* src/app.component.css */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
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