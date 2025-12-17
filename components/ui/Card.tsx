import { ReactNode, forwardRef } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
    children: ReactNode;
    variant?: 'default' | 'glow';
    hoverable?: boolean;
    tilt?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, children, variant = 'default', hoverable = true, tilt = false, style, ...props }, ref) => {
        const baseStyles = 'rounded-xl p-6 glass dark:glass border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 transition-colors duration-300'; // Removed transition-all to prevent conflict with motion

        const variants = {
            default: '',
            glow: 'glow-border shadow-glow'
        };

        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
        const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

        const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]); // Reduced tilt for subtle feel
        const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!tilt) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const width = rect.width;
            const height = rect.height;
            const mouseXFromCenter = e.clientX - rect.left - width / 2;
            const mouseYFromCenter = e.clientY - rect.top - height / 2;
            x.set(mouseXFromCenter / width);
            y.set(mouseYFromCenter / height);
        };

        const handleMouseLeave = () => {
            if (!tilt) return;
            x.set(0);
            y.set(0);
        };

        const motionProps = hoverable ? {
            whileHover: { scale: 1.02, y: -5 },
            transition: { duration: 0.3, ease: 'easeOut' }
        } : {};

        return (
            <motion.div
                ref={ref}
                className={cn(baseStyles, variants[variant], hoverable && 'hover:shadow-glow-lg', className)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    ...(tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}),
                    ...style
                }}
                {...motionProps}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';

export { Card };


