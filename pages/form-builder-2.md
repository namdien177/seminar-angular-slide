<template v-slot:default>

# <Angular /> Component 👉

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[468px]'}
```angular-ts
export class LoginComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: new FormControl(''),
    addresses: this.fb.array(...),
  });

  get addresses() {
    return this.profileForm.get('addresses') as FormArray;
  }

  createAddressForm() {
    return this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }

  addAddress() {...}

  removeAddress(at: number) {...}
}
```

```angular-ts{9-11}
export class LoginComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: new FormControl(''),
    addresses: this.fb.array(...),
  });

  get addresses() {
    return this.profileForm.get('addresses') as FormArray;
  }

  createAddressForm() {
    return this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }

  addAddress() {...}

  removeAddress(at: number) {...}
}
```
````

</template>

<template v-slot:right>

# <Angular /> Template

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[468px]'}
```angular-ts
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
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
export class LoginComponent {...}
```

```angular-ts{5}
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <ng-container *ngFor="let address of addresses.controls">
        <input type="text" id="street" formControlName="street" />
        <input type="text" id="city" formControlName="city" />
        <input type="text" id="state" formControlName="state" />
        <input type="text" id="zip" formControlName="zip" />
      </ng-container>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts{2,6}
@Component({
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      <ng-container *ngFor="let address of addresses.controls">
        <input type="text" id="street" formControlName="street" />
        <input type="text" id="city" formControlName="city" />
        <input type="text" id="state" formControlName="state" />
        <input type="text" id="zip" formControlName="zip" />
      </ng-container>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts{2,6,11}
@Component({
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address) {
        <input type="text" id="street" formControlName="street" />
        <input type="text" id="city" formControlName="city" />
        <input type="text" id="state" formControlName="state" />
        <input type="text" id="zip" formControlName="zip" />
      }
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts{*|5,6|5-12}
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address) {
        <div [formGroup]="address">
          <input type="text" id="street" formControlName="street" />
          <input type="text" id="city" formControlName="city" />
          <input type="text" id="state" formControlName="state" />
          <input type="text" id="zip" formControlName="zip" />
        </div>
      }
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts{5-12}
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address) {
        <ng-container [formGroup]="address">
          <input type="text" id="street" formControlName="street" />
          <input type="text" id="city" formControlName="city" />
          <input type="text" id="state" formControlName="state" />
          <input type="text" id="zip" formControlName="zip" />
        </ng-container>
      }
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts{5,13}
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address; let i = $index) {
        <ng-container [formGroup]="address">
          <input type="text" id="street" formControlName="street" />
          <input type="text" id="city" formControlName="city" />
          <input type="text" id="state" formControlName="state" />
          <input type="text" id="zip" formControlName="zip" />
        </ng-container>

        <button type="button" (click)="removeAddress(i)">Remove</button>
      }
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address; let i = $index) {
        <ng-container [formGroup]="address">
          <input type="text" id="street" formControlName="street" />
          <input type="text" id="city" formControlName="city" />
          <input type="text" id="state" formControlName="state" />
          <input type="text" id="zip" formControlName="zip" />
        </ng-container>

        <button type="button" (click)="removeAddress(i)">Remove</button>
      }
      <button type="button" (click)="addAddress()">Add Address</button>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts
// profile-form.component.ts
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address; let i = $index) {
        <ng-container [formGroup]="address">
          // Address Form
        </ng-container>

        <button type="button" (click)="removeAddress(i)">Remove</button>
      }
      <button type="button" (click)="addAddress()">Add Address</button>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}
```

```angular-ts
// profile-form.component.ts
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address; let i = $index) {
        <ng-container [formGroup]="address">
          // Address Form
        </ng-container>

        <button type="button" (click)="removeAddress(i)">Remove</button>
      }
      <button type="button" (click)="addAddress()">Add Address</button>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}

// address-form.component.ts
@Component({
  selector: 'app-address-form',
  ..., // imports, standalone, etc...
  template: `
    <ng-container [formGroup]="address">
      <input type="text" id="street" formControlName="street" />
      <input type="text" id="city" formControlName="city" />
      <input type="text" id="state" formControlName="state" />
      <input type="text" id="zip" formControlName="zip" />
    </ng-container>
  `,
})
export class AddressFormComponent {
  @Input({ required: true }) address!: FormGroup;
}
```

```angular-ts
// profile-form.component.ts
@Component({
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <input type="text" id="name" formControlName="name" />
      @for (address of addresses.controls; track address; let i = $index) {
        <app-address-form [address]="address" />
        <button type="button" (click)="removeAddress(i)">Remove</button>
      }
      <button type="button" (click)="addAddress()">Add Address</button>
      <button type="submit">Update</button>
    </form>
  `,
})
export class LoginComponent {...}

// address-form.component.ts
@Component({
  selector: 'app-address-form',
  ..., // imports, standalone, etc...
  template: `
    <ng-container [formGroup]="address">
      <input type="text" id="street" formControlName="street" />
      <input type="text" id="city" formControlName="city" />
      <input type="text" id="state" formControlName="state" />
      <input type="text" id="zip" formControlName="zip" />
    </ng-container>
  `,
})
export class AddressFormComponent {
  @Input({ required: true }) address!: FormGroup;
}
```
````

</template>

<style>
    .slidev-layout {
        padding-top: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;

        &.split-main-right {
          grid-template-columns: 386px 1fr;
        }
    }
    .slidev-layout.two-columns {
        gap: 1rem;
    }
</style>
