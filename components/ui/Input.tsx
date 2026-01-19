import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            // ✅ Base
            'flex h-12 w-full rounded-lg glass px-4 py-3 text-sm transition-all duration-200',
            'placeholder:text-gray-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',

            // ✅ Light mode: بوردر لبني ظاهر دايمًا
            'bg-white/50 text-gray-900 border border-primary-500/40',
            'hover:border-primary-500/60',
            'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30',

            // ✅ Dark mode: زي ما كان
            'dark:bg-transparent dark:text-white dark:border-white/10 dark:hover:border-white/20',
            'dark:focus:ring-primary-500/30',

            // ✅ Error overrides
            error && 'border-red-500/70 hover:border-red-500 focus:border-red-500 focus:ring-red-500/30',

            className
          )}
          ref={ref}
          {...props}
        />

        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
