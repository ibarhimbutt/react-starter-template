import { useState } from 'react';
import { Layout } from '@components/layout';
import { Button, Input, Card } from '@components/common';
import { formatDate, formatCurrency } from '@utils';
import { useLocalStorage, useIsMobile } from '@hooks';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const isMobile = useIsMobile();

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Features', href: '#features' },
    { label: 'Components', href: '#components' },
    { label: 'Contact', href: '#contact' },
  ];

  const footerLinks = [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'GitHub', href: 'https://github.com/ibarhimbutt/react-starter-template' },
  ];

  return (
    <Layout
      headerProps={{ logo: 'React Starter', navLinks }}
      footerProps={{ links: footerLinks }}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container-wrapper text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            React Starter Template
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-2xl mx-auto">
            A modern, production-ready React template with Vite, Tailwind CSS,
            and pre-built components.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('https://github.com/ibarhimbutt/react-starter-template', '_blank')}
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Components Demo Section */}
      <section id="components" className="py-16 bg-secondary-50 dark:bg-secondary-900">
        <div className="container-wrapper">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900 dark:text-white">
            Component Showcase
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Buttons Card */}
            <Card header={<h3 className="text-lg font-semibold text-secondary-900 dark:text-white">Buttons</h3>}>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                  <Button variant="danger" size="sm">Danger</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </Card>

            {/* Inputs Card */}
            <Card header={<h3 className="text-lg font-semibold text-secondary-900 dark:text-white">Inputs</h3>}>
              <div className="space-y-4">
                <Input
                  label="Default Input"
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input
                  variant="filled"
                  label="Filled Input"
                  placeholder="Enter text..."
                />
                <Input
                  variant="flushed"
                  label="Flushed Input"
                  placeholder="Enter text..."
                />
                <Input
                  label="With Error"
                  error="This field is required"
                  placeholder="Enter text..."
                />
              </div>
            </Card>

            {/* Card Variants */}
            <Card header={<h3 className="text-lg font-semibold text-secondary-900 dark:text-white">Card Variants</h3>}>
              <div className="space-y-4">
                <Card variant="elevated" padding="sm">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Elevated Card</p>
                </Card>
                <Card variant="outlined" padding="sm">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Outlined Card</p>
                </Card>
                <Card variant="filled" padding="sm">
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">Filled Card</p>
                </Card>
              </div>
            </Card>

            {/* Utilities Demo */}
            <Card header={<h3 className="text-lg font-semibold text-secondary-900 dark:text-white">Utilities</h3>}>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">formatDate:</p>
                  <p className="text-secondary-900 dark:text-white">{formatDate(new Date())}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">formatCurrency:</p>
                  <p className="text-secondary-900 dark:text-white">{formatCurrency(1234.56)}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">useIsMobile:</p>
                  <p className="text-secondary-900 dark:text-white">{isMobile ? 'Mobile View' : 'Desktop View'}</p>
                </div>
                <div>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">useLocalStorage (theme):</p>
                  <p className="text-secondary-900 dark:text-white">{theme}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container-wrapper">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary-900 dark:text-white">
            Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '⚡ Vite', desc: 'Lightning fast build tool with HMR' },
              { title: '🎨 Tailwind CSS', desc: 'Utility-first CSS framework' },
              { title: '📦 Ready Components', desc: 'Pre-built, customizable components' },
              { title: '🪝 Custom Hooks', desc: 'Useful React hooks included' },
              { title: '🛠️ Utilities', desc: 'Formatters and validators ready to use' },
              { title: '📁 Clean Structure', desc: 'Organized folder architecture' },
            ].map((feature, index) => (
              <Card key={index} variant="outlined" className="hover:shadow-soft transition-shadow">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default App;
