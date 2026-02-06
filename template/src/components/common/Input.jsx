import { forwardRef } from 'react';
import { cn } from '@utils';

const inputVariants = {
    default: 'border border-secondary-300 focus:border-primary-500 focus:ring-primary-500 dark:border-secondary-600 dark:focus:border-primary-400',
    filled: 'border-0 bg-secondary-100 focus:bg-white focus:ring-2 focus:ring-primary-500 dark:bg-secondary-800 dark:focus:bg-secondary-700',
    flushed: 'border-0 border-b-2 border-secondary-300 rounded-none focus:border-primary-500 dark:border-secondary-600',
};

const Input = forwardRef(({
    label,
    error,
    helperText,
    variant = 'default',
    leftIcon,
    rightIcon,
    className,
    ...props
}, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                {leftIcon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary-500">
                        {leftIcon}
                    </div>
                )}
                <input
                    ref={ref}
                    className={cn(
                        'w-full px-4 py-2.5 rounded-lg transition-all duration-200',
                        'placeholder:text-secondary-400 dark:placeholder:text-secondary-500',
                        'focus:outline-none focus:ring-2',
                        'dark:bg-secondary-900 dark:text-white',
                        inputVariants[variant],
                        leftIcon && 'pl-10',
                        rightIcon && 'pr-10',
                        error && 'border-error-500 focus:border-error-500 focus:ring-error-500',
                        className
                    )}
                    {...props}
                />
                {rightIcon && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-secondary-500">
                        {rightIcon}
                    </div>
                )}
            </div>
            {(error || helperText) && (
                <p className={cn(
                    'mt-1 text-sm',
                    error ? 'text-error-500' : 'text-secondary-500 dark:text-secondary-400'
                )}>
                    {error || helperText}
                </p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
