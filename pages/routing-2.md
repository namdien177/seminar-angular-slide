# <Angular/> Routing

````md magic-move {lines: true, class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```angular-ts
// app.routes.ts
export const routes: Route = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // Wildcard route - 404
  // should be the last route
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  // redirect route /profile -> /user
  { path: 'profile', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  // but also redirect route /profile/settings -> /profile
  // because the default behavior is to match the prefix
  { path: 'profile', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  // pathMatch: 'full' - matches the full URL instead of prefix (default)
  // eg: - `/profile/settings` will not match this case
  //     - `/profile` will match
  // should only care when handling redirect
  { path: 'profile', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  {
    path: 'profile',
    // queryParams - search params in the URL (eg: /profile?userId=123)
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(ErrorHandler);
      const authService = inject(AuthService)
      const userIdParam = queryParams['userId'];

      if (userIdParam !== undefined) {
        if (userIdParam === authService.userId) {
          // redirect to /me if the profile is the current user
          return '/me';
        }
        // redirect to /user/:id if the profile is another user
        return `/user/${userIdParam}`;
      }

      if (authService.userId !== undefined) {
        // redirect to /me if the profile path is empty
        return '/me';
      }

      errorHandler.handleError(new Error('General profile page is deprecated!'));
      return `/not-found`;
    },
  },
  // params - dynamic path segments (eg: /user/123)
  { path: 'user/:id', component: ProfileComponent },
  { path: 'me', component: MeComponent },
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // nested routes
  // must have <router-outlet> in the template
  { path: 'me', component: MeComponent, children: [
    // -> /me
    { path: '', component: ProfileComponent },
    // -> /me/settings
    { path: 'settings', component: SettingsComponent },
  ]},
  { path: '**', component: PageNotFoundComponent },
];
```

```angular-ts
// app.routes.ts
export const routes: Route = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'about', component: AboutComponent },
  // nested routes
  // must have <router-outlet> in the template
  { path: 'me', component: MeComponent, children: [
    // -> /me
    { path: '', component: ProfileComponent, title: resolveTitle },
    // -> /me/settings
    { path: 'settings', component: SettingsComponent },
  ]},
  { path: '**', component: PageNotFoundComponent },
];

const resolveTitle: ResolveFn<string> = () => Promise.resolve('James - Profile');
```
````
