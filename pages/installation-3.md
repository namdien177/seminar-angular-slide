<template v-slot:default>

# <React /> Installation

<v-clicks depth="2">

- Doesn't provide official CLI
- Recommended to use metaframework instead (`Next.js`, `Remix`, `Expo`, ...)
- Community template CLI
  - `create-react-app` for purely React
  - `create-next-app` / `create-t3-app` for Next.js
  - `create-remix` for Remix
- Everything else is created by hand

</v-clicks>

</template>

<template v-slot:right>

# <Angular/> installation

<v-clicks depth="2">

- Official CLI: `ng new my-app`
- Purely SPA recommendation.
- Offer SSR with Angular Universal or with metaframework like `AnalogJS`
- Community packages can utilize Angular CLI to trigger post-script commands
  - `ng add @angular/material` to add Angular Material
  - `ng add @ngrx/store` to add NgRx
- Scaffolded project, modules, components, services, ... very easy

</v-clicks>

</template>
