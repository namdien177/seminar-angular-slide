# Handling Form in <Angular /> - Nested Form (Array)

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
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

```angular-ts
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
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
  });
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl([
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    ]),
  });
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl([
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    ]),
  });
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl([
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
      new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    ]),
  });
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl(
      new Array().fill(new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }), 3),
    ),
  });
}
```

```angular-ts
export class LoginComponent {
  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl(
      // not sure this even works or reactive when we add/remove items
      new Array().fill(new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }), 3),
    ),
  });
}
```
````
