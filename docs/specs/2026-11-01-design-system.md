# Design system `@leviutima/ds`

## Objetivo

Um design system próprio, preto e branco e minimalista, para todos os frontends web do autor. O projeto instala o pacote uma vez e importa os componentes, com o jeito de usar do shadcn: `variant`, `className` e composição.

## Fora do escopo

- CLI ou registry que copie código para os projetos.
- `Dialog`, `Toast`, `Tabs` e `Dropdown`, que entram quando algum projeto precisar.
- React Native.
- Adotar o DS no console e na tela de login do Gatehouse, que é uma etapa própria.

## Stack

- React 19 e Tailwind 4 como `peerDependencies`.
- TypeScript, Vite no modo biblioteca e Storybook 10.
- Vitest e Testing Library para comportamento; addon de acessibilidade no Storybook.
- `class-variance-authority`, `clsx` e `tailwind-merge` para variantes e `className`.

## Como os projetos consomem

```css
@import 'tailwindcss';
@import '@leviutima/ds/styles.css';
```

```tsx
import { Button, Field, Input } from '@leviutima/ds'
```

O pacote entrega JavaScript e `styles.css`, sem CSS pré-compilado. O `styles.css` traz o tema e um `@source` apontando para o bundle, e o Tailwind do projeto gera só as classes usadas. Os tokens também ficam disponíveis nas telas do projeto, como `bg-background` e `text-foreground`.

## Identidade visual

- **Cores:** preto e branco puros, que trocam de lugar entre os temas. Dois cinzas, só para texto secundário e estados desabilitados.
- **Tema:** segue o sistema por padrão. `data-theme="light"` ou `"dark"` força um tema em qualquer elemento, e as cores usam `light-dark()`.
- **Forma:** raio 0, borda de 1px e nenhuma sombra. A única exceção é o `Radio`, que continua redondo para não ser confundido com o `Checkbox`.
- **Inversão:** hover troca fundo e texto na hora, sem transição, e pressionar inverte de volta.
- **Foco:** contorno de 2px afastado 2px do componente, só com `focus-visible`.
- **Tipografia:** IBM Plex Sans para texto e IBM Plex Mono para dados e códigos, servidas pelo pacote. Podem ser trocadas pelos tokens `--font-sans` e `--font-mono`.
- **Erro:** sem vermelho. A forma comunica: borda de 2px, ícone e mensagem, com `aria-invalid` e `aria-describedby`.

## Componentes

| Componente | Observações |
|---|---|
| `Button` | `primary`, `secondary`, `ghost`; `sm`, `md`; `loading`. `buttonVariants` estiliza links |
| `Input`, `Textarea`, `Select` | Dentro de um `Field`, recebem `id`, estado e descrição automaticamente. `Select` é nativo |
| `Checkbox`, `Radio`, `Switch` | Inputs nativos com `label` própria. `Switch` usa `role="switch"` |
| `Field` | Liga label, dica e erro ao campo |
| `Alert` | `info` (`role="status"`) e `error` (`role="alert"`, invertido) |
| `Badge` | `solid` e `outline` |
| `Card` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` |
| `Table` | `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, com rolagem horizontal |

Todos aceitam `ref`, `className` e as props nativas do HTML, e funcionam com React Hook Form.

## Estrutura

```
src/
  components/<nome>/  Componente, spec e stories
  lib/<nome>/         Utilitários internos
  foundations/        Stories de cores e tipografia
  styles.css          Tema publicado
  index.ts            API pública
```

Cada unidade tem uma pasta própria, com o código e a spec, como no console do Gatehouse.

## Testes e critérios de aceite

- `npm run lint`, `npm test`, `npm run build` e `npm run build-storybook` passam.
- Nenhuma violação de acessibilidade do axe nas stories, nos dois temas.
- Um projeto Vite novo instala o pacote gerado por `npm pack`, usa os componentes e renderiza com os estilos e as fontes corretos.

## Publicação

O `npm publish` depende do login do autor e acontece depois que a v1 for aprovada no Storybook. O código fica no repositório público `leviutima/Desing-System`.
