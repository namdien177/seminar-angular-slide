# <Angular /> Form Builder 🏗️

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
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
      new Array().fill(this.createAddressForm(), 3),
    ),
  });

  createAddressForm() {
    return new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }
}
```

```angular-ts
import {FormBuilder} from '@angular/forms';

export class LoginComponent {
  fb = inject(FormBuilder);

  profileForm = new FormGroup({
    name: new FormControl(''),
    addresses: new FormControl(
      new Array().fill(this.createAddressForm(), 3),
    ),
  });

  createAddressForm() {
    return new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }
}
```

```angular-ts
import {FormBuilder} from '@angular/forms';

export class LoginComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: new FormControl(''),
    addresses: this.fb.array(
      new Array().fill(this.createAddressForm(), 3),
    ),
  });

  createAddressForm() {
    return this.fb.group({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    });
  }
}
```

```angular-ts
export class LoginComponent {
  fb = inject(FormBuilder);

  profileForm = this.fb.group({
    name: new FormControl(''),
    addresses: this.fb.array(
      new Array().fill(this.createAddressForm(), 3),
    ),
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

  addAddress() {
    this.addresses.push(this.createAddressForm());
  }

  removeAddress(at: number) {
    this.addresses.removeAt(at);
  }
}
```
````
