# Handling Form in <Angular />

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```ts
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
```ts
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
````