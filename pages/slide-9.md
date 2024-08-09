<template v-slot:default>

# <React />

````md magic-move {lines: true, class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```tsx
// src/sizer.tsx
export const Sizer = ({ size, onSizeChange }) => {
  return (
    <input value={size} onChange={onSizeChange} />
  );
};

// src/app.tsx
export const App = () => {
  const [size, setSize] = useState(50);

  const onSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <Sizer size={size} onSizeChange={onSizeChange} />
  );
}
```
````

</template>

<template v-slot:right>

# <Angular />

````md magic-move {lines: true, class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```ts
// src/sizer.component.ts
@Component({
  standalone: true,
  selector: 'app-sizer',
  template: `
    <input [value]="size" (input)="onResize($event)" />
  `,
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  onResize(event: Event) {
    this.sizeChange.emit(
      (event.target as HTMLInputElement).value
    );
  }
}

// src/app.component.ts
@Component({
  ...,
  selector: 'app-root',
  template: `
    <app-sizer [size]="size"
               (sizeChange)="size = $event" />
  `,
})
export class AppComponent {
  size = 50;
}
```

```ts
// src/sizer.component.ts
@Component({
  standalone: true,
  selector: 'app-sizer',
  template: `
    <input [value]="size" (input)="onResize($event)" />
  `,
})
export class SizerComponent {
  @Input() size: number;
  @Output() sizeChange = new EventEmitter<number>();

  onResize(event: Event) {
    this.sizeChange.emit(
      (event.target as HTMLInputElement).value
    );
  }
}

// src/app.component.ts
@Component({
  ...,
  selector: 'app-root',
  template: `
    <app-sizer [(size)]="size" />
  `,
})
export class AppComponent {
  size = 50;
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