# Handling Form in <Angular /> - Reactive Form

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```angular-ts
// import ReactiveFormsModule at the root module
// (if you plan to use it in multiple places)

@NgModule({
  ...,
  imports: [
    ...,
    // FormsModule, // template-driven
    ReactiveFormsModule,
  ],
...
})
export class AppModule {}
```

```angular-ts
@Component({
  ...,
  template: `
    <form>
      <input type="email" id="email" />
    </form>
  `,
})
export class LoginComponent {}
```

```angular-ts{5,10}
@Component({
  ...,
  template: `
    <form>
      <input type="email" id="email" [formControl]="email" />
    </form>
  `,
})
export class LoginComponent {
  email = new FormControl('');
}
```

common public methods and properties of `FormControl`:

```angular-ts
email = new FormControl('');

// subscribe to the email field status changes (valid, invalid, pending, disabled)
this.email.statusChanges.subscribe((status) => { ... })
// check if the email field is touched
this.email.touched;
this.email.markAsTouched();

// check if the email field is dirty (the value has manually changed)
this.email.dirty;
this.email.markAsDirty();

// check if the email field is valid
this.email.valid;
this.email.setErrors({ invalid: true }); // set custom error

// get the value at exact moment
this.email.value;
// or subscribe to the value changes
this.email.valueChanges.subscribe((value) => {...});
// set the value
this.email.setValue('new value');
```

validation:

```angular-ts
// out-of-the-box validators
// https://angular.dev/api/forms/Validators
email = new FormControl('', [
  Validators.required,
  Validators.email,
  Validators.minLength(5),
]);
/*
Other built-in validators:
- min
- max
- requiredTrue (for checkbox)
- email
- minLength
- maxLength
- pattern
- nullValidator (no-op validator - never used it)
- compose (compose multiple validators - never used it)
- composeAsync (compose multiple async validators - never used it)
*/
```

```angular-ts
email = new FormControl('', [
  Validators.required,
  Validators.email,
  Validators.minLength(5),
]);

// custom validator ensure name not contains 'admin'
const forbiddenNameValidator = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { forbiddenName: { value: control.value } } : null;
};
```

```angular-ts
email = new FormControl('', [
  Validators.required,
  Validators.email,
  Validators.minLength(5),
  forbiddenNameValidator,
]);

// custom validator ensure name not contains 'admin'
const forbiddenNameValidator = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = /admin/.test(control.value);
  return forbidden ? { forbiddenName: { value: control.value } } : null;
};
```

async validator

```angular-ts
// Support async validators
email = new FormControl(
  '', // initial value
  [Validators.required, Validators.email], // sync validators
  [] // async validators
);
```

```angular-ts
// Support async validators
email = new FormControl(
  '', // initial value
  [Validators.required, Validators.email], // sync validators
  [] // async validators
);

// async validator ensure email is unique
const uniqueEmailValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  return this.userService.isEmailUnique(control.value).pipe(
    map((isUnique) => (isUnique ? null : { notUnique: true })),
    catchError(() => of({ notUnique: true }))
  );
};
```

```angular-ts
// Support async validators
email = new FormControl(
  '', // initial value
  [Validators.required, Validators.email], // sync validators
  [uniqueEmailValidator] // async validators
);

// async validator ensure email is unique
const uniqueEmailValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  return this.userService.isEmailUnique(control.value).pipe(
    map((isUnique) => (isUnique ? null : { notUnique: true })),
    catchError(() => of({ notUnique: true }))
  );
};
```

```angular-ts
// Support async validators
email = new FormControl(
  '', // initial value
  [Validators.required, Validators.email], // sync validators
  [uniqueEmailValidator] // async validators
);

// async validator ensure email is unique
const uniqueEmailValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  return this.userService.isEmailUnique(control.value).pipe(
    map((isUnique) => (isUnique ? null : { notUnique: true })),
    catchError(() => of({ notUnique: true }))
  );
};

// check pending state of email
this.email.pending; // boolean
```

```angular-ts{*|7|6,7}
// Support async validators
email = new FormControl(
  '',
  {
    validators: [Validators.required, Validators.email], // sync validators
    asyncValidators: [uniqueEmailValidator], // async validators
    updateOn: 'blur', // 'change' (default) | 'blur' | 'submit'
  }
);

// async validator ensure email is unique
const uniqueEmailValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  ...
};
```
````
