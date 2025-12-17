import { forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    children: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
        const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';

        const variants = {
            primary: 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-glow hover:shadow-glow-lg hover:scale-105',
            secondary: 'glass border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white hover:shadow-glow',
            ghost: 'text-gray-300 hover:text-white hover:bg-white/10',
            outline: 'border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40'
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg'
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                disabled={disabled || isLoading}
                whileHover={!disabled && !isLoading ? { scale: 1.02 } : {}}
                whileTap={!disabled && !isLoading ? { scale: 0.98 } : {}}
                {...props}
            >
                {isLoading && (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                )}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export { Button };
