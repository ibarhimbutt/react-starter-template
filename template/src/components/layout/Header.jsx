import { useState } from 'react';
import { cn } from '@utils';
import { Button } from '@components/common';

const Header = ({
    logo = 'React Starter',
    navLinks = [],
    className,
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className={cn(
            'bg-white dark:bg-secondary-900 border-b border-secondary-200 dark:border-secondary-800 sticky top-0 z-50',
            className
        )}>
            <nav className="container-wrapper">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">R</span>
                        </div>
                        <span className="font-semibold text-lg text-secondary-900 dark:text-white">
                            {logo}
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="text-secondary-600 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button size="sm">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-secondary-600 dark:text-secondary-400"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-secondary-200 dark:border-secondary-800">
                        <div className="flex flex-col gap-3">
                            {navLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-secondary-600 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button size="sm" fullWidth className="mt-2">Get Started</Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
