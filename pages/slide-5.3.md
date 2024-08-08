<template v-slot:default>

# <Angular /> 

```ts {monaco}
// src/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

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
</template>

<template v-slot:right>

# <Angular /> - Traditional

```ts
// src/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

@Component({
  standalone: true,
  imports: [WelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<!-- src/app.component.html -->
<div>
  <app-welcome></app-welcome>
</div>
```
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