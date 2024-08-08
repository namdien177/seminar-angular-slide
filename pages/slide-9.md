<template v-slot:default>

# <React />

<v-clicks depth="2">

- Most control flow is done with JavaScript syntax
- Annoying restrictions:
  - No `if` statements - replaced with ternary operators or logical `&&`/`||` operators
  - No `for` loops - replaced with `map`
  - No `switch` statements - replaced multiple ternary operators
  - Have to return a single element - wrap in a `<Fragment>` if needed
  - Can't use `class` - use `className` instead
  - Can't use `style` - use `style` object instead

</v-clicks>


</template>

<template v-slot:right>

# <Angular />

<v-clicks depth="2">

- Most control flow is done with <u>Angular-specific syntax</u>
- Annoying restrictions:
  - Have to remember new syntax (`*ngIf`, `*ngFor`, etc., or `@if`, `@for`, ... with new control flow syntax)
  - `<ng-template>`, `<ng-container>`, `<ng-content>`, and other Angular-specific elements
  - `[<name>]` and `(<name>)` syntax for binding and events (`[(ngModel)]` for two-way binding)

</v-clicks>


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