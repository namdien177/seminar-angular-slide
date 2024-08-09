<template v-slot:default>

# <Angular /> Single-File Component

````md magic-move {lines: true}
```angular-ts
// src/app.component.ts
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  template: `
    <app-welcome />
  `,
})
export class AppComponent {}
```
```angular-ts
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
    <app-welcome class="container" />
  `,
})
export class AppComponent {}
```
````
</template>

<template v-slot:right>

# <Angular /> Traditional Component

````md magic-move {lines: true}
```angular-ts
// src/app.component.ts
@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
```
```angular-ts
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

````md magic-move {lines: true}
```angular-html
<!-- src/app.component.html -->
<app-welcome />
```
```angular-html
<!-- src/app.component.html -->
<!-- it also has auto-complete! -->
<app-welcome class="container" />
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