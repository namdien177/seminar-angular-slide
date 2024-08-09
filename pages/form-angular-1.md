# Handling Form in <Angular /> - Template-Driven Form

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```angular-ts
@Component({
  ...,
  template: `
    <form>
      <div>
        <label>Email</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class LoginComponent {}
```
```angular-ts
@Component({
  ...,
  imports: [FormsModule],
  template: `
    <form>
      <div>
        <label>Email</label>
        <input type="email" id="email" [(ngModel)]="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" [(ngModel)]="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';
}
```
```angular-ts
@Component({
  ...,
  template: `
    <form (ngSubmit)="onSubmit()">
      <div>
        <label>Email</label>
        <input type="email" id="email" [(ngModel)]="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" [(ngModel)]="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class LoginComponent {
  email = '';
  password = '';

  onSubmit() {
    console.log(this.email, this.password);
  }
}
```
````