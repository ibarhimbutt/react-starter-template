import { cn } from '@utils';

const Footer = ({
    copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    links = [],
    className,
}) => {
    return (
        <footer className={cn(
            'bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-800',
            className
        )}>
            <div className="container-wrapper py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                        {copyright}
                    </p>
                    {links.length > 0 && (
                        <div className="flex items-center gap-6">
                            {links.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    className="text-secondary-500 hover:text-primary-500 dark:text-secondary-400 dark:hover:text-primary-400 text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
