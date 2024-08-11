# <Angular/> Routing

````md magic-move {lines: true}
```angular-ts
// app.component.ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>App Component</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}

// app.routes.ts
export const routes: RouterConfig = [];

// app.config.ts
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
```

// 1
```angular-ts
// app.component.ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>App Component</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}

// app.routes.ts
export const routes: RouterConfig = [];
```

// 2
```angular-ts
// app.component.ts
@Component({
  selector: 'app-root',
  // RouterOutlet module provides the router-outlet component
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>App Component</h1>
      <!-- This is where the router will render the components -->
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}

// app.routes.ts
export const routes: RouterConfig = [];
```

// 3
```angular-ts
// app.component.ts
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div>
      <h1>App Component</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}

// app.routes.ts
import { HomeComponent } from './home/home.component'; // URL: /
import { AboutComponent } from './about/about.component'; // URL: /about

export const routes: RouterConfig = [];
```

// 4
```angular-ts
// app.routes.ts
import { HomeComponent } from './home/home.component'; // URL: /
import { AboutComponent } from './about/about.component'; // URL: /about

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];
```

// 5-6
```angular-ts{*|3,7,15}
// app.routes.ts
import { HomeComponent } from './home/home.component'; // URL: /
import { AboutComponent } from './about/about.component'; // URL: /about

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

// /home/home.component.ts
@Component({
  selector: 'home',
  template: `
    <h1>Home page</h1>
    <a href="/about">About</a>
`
})
export class HomeComponent {}
```

// 7
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

// /home/home.component.ts
@Component({
  selector: 'home',
  template: `
    <h1>Home page</h1>
    <!-- This will cause a full reload -->
    <a href="/about">About</a>
`
})
export class HomeComponent {}
```

// 8
```angular-ts{4,12}
// app.routes.ts
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

// /home/home.component.ts
@Component({
  selector: 'home',
  template: `
    <h1>Home page</h1>
    <a routerLink="/about">About</a>
`
})
export class HomeComponent {}
```

// 9
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];

// /home/home.component.ts
@Component({
  selector: 'home',
  // this provides the routerLink directive
  imports: [RouterLink],
  template: `
    <h1>Home page</h1>
    <a routerLink="/about">About</a>
`
})
export class HomeComponent {}
```

// 10
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [...];

// /home/home.component.ts
@Component({
  selector: 'home',
  imports: [RouterLink],
  template: `
    <h1>Home page</h1>
    <a routerLink="/about">About</a>
`
})
export class HomeComponent {}

// /about/about.component.ts
@Component({
  selector: 'about',
  imports: [RouterLink],
  template: `
    <h1>About page</h1>
    <a routerLink="/">Home</a>
`
})
export class AboutComponent {}
```

// 11
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [...];

// /navigation/navigation.component.ts
@Component({
  selector: 'navigation',
  imports: [RouterLink],
  template: `
    <a routerLink="/">Home</a>
    <a routerLink="/about">About</a>
`
})
export class NavigationComponent {}
```

// 12
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [...];

// /navigation/navigation.component.ts
@Component({
  selector: 'navigation',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a routerLink="/"
       routerLinkActive="link-active">
       Home
    </a>
    <a routerLink="/about"
       routerLinkActive="link-active">
       About
    </a>
`
})
export class NavigationComponent {}
```

// 12
```angular-ts
// app.routes.ts
export const routes: RouterConfig = [...];

// /navigation/navigation.component.ts
@Component({
  selector: 'navigation',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <a routerLink="/"
       routerLinkActive="link-active"
       routerLinkActiveOptions="{exact: true}">
       Home
    </a>
    <a routerLink="/about"
       routerLinkActive="link-active">
       About
    </a>
`
})
export class NavigationComponent {}
```
````