# My React App

This project was created with [@ibrahimbutt1711/react-starter-template](https://github.com/ibarhimbutt/react-starter-template).

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── common/       # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── services/         # API services
└── styles/           # Global styles
```

## Path Aliases

Clean imports using path aliases:

```jsx
import { Button } from '@components/common';
import { useLocalStorage } from '@hooks';
import { formatDate } from '@utils';
```

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
