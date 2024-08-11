# Handling Form in <Angular /> - Form Group

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```angular-ts
@Component({
  ...,
  template: `
    <form>
      <input type="email" id="email" />
      <input type="password" id="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {}
```

```angular-ts{5,6,12,13}
@Component({
  ...,
  template: `
    <form>
      <input type="email" id="email" [formControl]="email" />
      <input type="password" id="email" [formControl]="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');
}
```

```angular-ts{4-8,12,13,15-20}
@Component({
  ...,
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="email" id="email" [formControl]="email" />
      <input type="password" id="email" [formControl]="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');

  onSubmit() {
    const payload = {
      email: this.email.value,
      password: this.password.value,
    };
  }
}
```

```angular-ts{4-8,12,13,15-18,20-22}
@Component({
  ...,
  template: `
    <form (ngSubmit)="onSubmit()">
      <input type="email" id="email" [formControl]="email" />
      <input type="password" id="email" [formControl]="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  email = new FormControl('');
  password = new FormControl('');

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  onSubmit() {
    const payload = this.loginForm.value;
  }
}
```

```angular-ts{4-8,12-15}
@Component({
  ...,
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="email" id="email" [formControl]="email" />
      <input type="password" id="email" [formControl]="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const payload = this.loginForm.value;
  }
}
```

```angular-ts{4-8,12-15}
@Component({
  ...,
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="email" id="email" formControlName="email" />
      <input type="password" id="email" formControlName="password" />
      <button type="submit">Login</button>
    </form>
  `,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit() {
    const payload = this.loginForm.value;
  }
}
```

```angular-ts
loginForm = new FormGroup({
  email: new FormControl('', {
    validators: [Validators.required, Validators.email],
    asyncValidators: [this.emailValidator],
    updateOn: 'blur',
  }),
  password: new FormControl('', {
    validators: [Validators.required, Validators.minLength(8)],
    updateOn: 'blur',
  }),
});
```

```angular-ts
loginForm = new FormGroup({
  email: new FormControl('', {...}),
  password: new FormControl('', {...}),
});

// subscribe the value of the whole group
this.loginForm.valueChanges.subscribe((value) => {
  console.log('Form value: ', value);
});

// subscribe the status of the whole group
this.loginForm.statusChanges.subscribe((status) => {
  console.log('Form status: ', status);
});

// check if the form is valid
this.loginForm.valid;
// check if the form is dirty - any child field has been changed
this.loginForm.dirty;
// ...
```

```angular-ts
loginForm = new FormGroup({
  email: new FormControl('', {...}),
  password: new FormControl('', {...}),
});

// is email field valid?
this.loginForm.get('email')?.valid;
```

```angular-ts
loginForm = new FormGroup({
  email: new FormControl('', {...}),
  password: new FormControl('', {...}),
}, {
  validators: [...], // custom group validators
  asyncValidators: [...], // custom async group validators
  updateOn: 'submit',
});
```

```angular-ts
loginForm = new FormGroup({
  email: new FormControl('', {...}),
  password: new FormControl('', {...}),
}, {
  validators: [...], // custom group validators
  asyncValidators: [...], // custom async group validators
  updateOn: 'submit',
});

// set the value of the whole group
this.loginForm.setValue({
  email: 'john.doe@gmail.com',
  password: 'password',
});
// or set the value of the whole group partially
this.loginForm.patchValue({
  email: 'james.smith@gmail.com'
});
```

````
