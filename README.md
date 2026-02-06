# @ibrahimbutt/react-starter-template

A modern, production-ready React starter template with Vite, Tailwind CSS, and pre-built components. Created by [Ibrahim Butt](https://github.com/ibarhimbutt).

## Features

- ⚡ **Vite** - Lightning fast build tool with Hot Module Replacement
- 🎨 **Tailwind CSS v3** - Utility-first CSS framework with custom theme
- 📦 **Pre-built Components** - Button, Input, Card, Header, Footer, Layout
- 🪝 **Custom Hooks** - useLocalStorage, useMediaQuery, useDebounce
- 🛠️ **Utility Functions** - Formatters and validators
- 📁 **Clean Architecture** - Organized folder structure with path aliases
- 🎯 **Path Aliases** - Clean imports with @components, @hooks, @utils, etc.

## Quick Start

```bash
npx @ibrahimbutt/react-starter-template my-app
cd my-app
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI components (Button, Input, Card)
│   ├── layout/       # Layout components (Header, Footer, Layout)
│   └── features/     # Feature-specific components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── services/         # API service functions
└── styles/           # Global styles
```

## Components

### Button

```jsx
import { Button } from '@components/common';

<Button variant="primary" size="md">Click me</Button>
<Button variant="outline" loading>Loading...</Button>
```

**Variants:** `primary`, `secondary`, `outline`, `ghost`, `danger`  
**Sizes:** `sm`, `md`, `lg`

### Input

```jsx
import { Input } from '@components/common';

<Input label="Email" placeholder="Enter email" />
<Input variant="filled" error="Required field" />
```

**Variants:** `default`, `filled`, `flushed`

### Card

```jsx
import { Card } from '@components/common';

<Card variant="elevated" header={<h3>Title</h3>}>
  Content here
</Card>
```

**Variants:** `elevated`, `outlined`, `filled`

## Custom Hooks

```jsx
import { useLocalStorage, useMediaQuery, useDebounce } from '@hooks';

// Persist state to localStorage
const [theme, setTheme] = useLocalStorage('theme', 'light');

// Responsive breakpoints
const isMobile = useMediaQuery('(max-width: 768px)');

// Debounce values
const debouncedSearch = useDebounce(searchTerm, 500);
```

## Utilities

```jsx
import { formatDate, formatCurrency, isValidEmail, cn } from '@utils';

formatDate(new Date()); // "February 6, 2026"
formatCurrency(1234.56); // "$1,234.56"
isValidEmail('test@example.com'); // true
cn('base-class', condition && 'conditional-class'); // combines classes
```

## Path Aliases

| Alias | Path |
|-------|------|
| `@` | `src/` |
| `@components` | `src/components/` |
| `@hooks` | `src/hooks/` |
| `@utils` | `src/utils/` |
| `@services` | `src/services/` |
| `@pages` | `src/pages/` |
| `@styles` | `src/styles/` |

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Customization

### Tailwind Theme

Edit `tailwind.config.js` to customize colors, fonts, spacing, etc.

### Components

Modify components in `src/components/` to match your design system.

## Learn More

- [GitHub Repository](https://github.com/ibarhimbutt/react-starter-template)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## License

MIT
