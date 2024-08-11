# Handling Form in <Angular /> - Nested Form (Object)

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}

```angular-ts
@Component({
  ...,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <textarea id="address" formControlName="address"></textarea>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
  });

  onSubmit() {
    const payload = this.profileForm.value;
  }
}
```

```angular-ts
@Component({
  ...,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <textarea id="address" formControlName="address"></textarea>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    const payload = this.profileForm.value;
  }
}
```

```angular-ts
@Component({
  ...,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <div formGroupName="address"></div>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    const payload = this.profileForm.value;
  }
}
```

```angular-ts
@Component({
  ...,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <div formGroupName="address">
        <input type="text" id="street" formControlName="street" />
        <input type="text" id="city" formControlName="city" />
        <input type="text" id="state" formControlName="state" />
        <input type="text" id="zip" formControlName="zip" />
      </div>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    const payload = this.profileForm.value;
  }
}
```

```angular-ts
@Component({
  ...,
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <!-- If you don't want to have real DOM container -->
      <ng-container formGroupName="address">
        <input type="text" id="street" formControlName="street" />
        <input type="text" id="city" formControlName="city" />
        <input type="text" id="state" formControlName="state" />
        <input type="text" id="zip" formControlName="zip" />
      </ng-container>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  onSubmit() {
    const payload = this.profileForm.value;
  }
}
```
````
