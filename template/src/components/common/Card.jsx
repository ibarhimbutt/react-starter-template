import { cn } from '@utils';

const cardVariants = {
    elevated: 'bg-white dark:bg-secondary-800 shadow-soft hover:shadow-medium',
    outlined: 'border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800',
    filled: 'bg-secondary-50 dark:bg-secondary-800',
};

const Card = ({
    children,
    variant = 'elevated',
    header,
    footer,
    padding = 'md',
    className,
    ...props
}) => {
    const paddingClasses = {
        none: '',
        sm: 'p-3',
        md: 'p-5',
        lg: 'p-8',
    };

    return (
        <div
            className={cn(
                'rounded-xl transition-all duration-200',
                cardVariants[variant],
                className
            )}
            {...props}
        >
            {header && (
                <div className="px-5 py-4 border-b border-secondary-200 dark:border-secondary-700">
                    {header}
                </div>
            )}
            <div className={paddingClasses[padding]}>
                {children}
            </div>
            {footer && (
                <div className="px-5 py-4 border-t border-secondary-200 dark:border-secondary-700 bg-secondary-50 dark:bg-secondary-900 rounded-b-xl">
                    {footer}
                </div>
            )}
        </div>
    );
};

export default Card;
