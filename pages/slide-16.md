# Handling Form in <React />

````md magic-move {class:'!children:overflow-x-hidden !children:overflow-y-auto !children:max-h-[450px]'}
```tsx
export const MyForm = () => {
  return (
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
  );
};
```

```tsx
export const MyForm = () => {
  const formGroup = useForm({
    resolver: zodResolver(schema),
  });

  return (
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
  );
};
```

```tsx
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const MyForm = () => {
  const { register } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <form>
      <div>
        <label>Email</label>
        <input type="email" id="email" {...register('email')} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" {...register('password')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```

```tsx {*|1-4|7-9|17,22|14,11|*}
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const MyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input type="email" id="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" id="password" {...register('password')} />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```
````