<template v-slot:default>

# <React />

````md magic-move {lines: true}
```tsx
// src/app.tsx
import Welcome from './welcome';

export function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}

export default App;
```
````

</template>

<template v-slot:right>

# <Angular />

````md magic-move {lines: true}
```ts{*|8-9}
// src/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

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
```ts
// src/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-welcome />
  `,
})
export class AppComponent {}

// src/app.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [RouterModule],
  exports: [AppComponent],
})
export class AppModule {}
```
```ts
// src/app.component.ts
...

@Component({...})
export class AppComponent {}

// src/app.module.ts
...

@NgModule({...})
export class AppModule {
  static forRoot(config: Config): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: [{ 
          provide: 'API_URL',
          useValue: 'https://api.example.com' 
      }],
    };
  }
}
```
```ts
// src/app.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';

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
```ts
// src/app.component.ts
import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome.component';

@Component({
  selector: 'app-root',
  template: `
    <app-welcome />
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