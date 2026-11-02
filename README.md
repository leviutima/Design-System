# @leviutima/ds

A quiet, neutral design system for React 19 and Tailwind CSS 4.

## Install

```sh
npm i @leviutima/ds
```

Import the styles after Tailwind in your main CSS file:

```css
@import 'tailwindcss';
@import '@leviutima/ds/styles.css';
```

Then import the components you need:

```tsx
import { Button, Field, Input } from '@leviutima/ds'

export function SignInForm() {
  return (
    <form className="flex flex-col gap-4">
      <Field label="Email" required>
        <Input type="email" />
      </Field>
      <Button type="submit">Sign in</Button>
    </form>
  )
}
```

## Components

`Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Radio`, `Switch`, `Field`, `Alert`, `Badge`, `Card` and `Table`.

## Development

```sh
npm install
npm run dev
```

`npm run dev` opens Storybook on port 6006. Before opening a pull request, run `npm run lint`, `npm test` and `npm run build`.

## License

MIT
