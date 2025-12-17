import React from 'react';
import { motion } from 'framer-motion';

interface ComputerFrameProps {
    children: React.ReactNode;
    className?: string;
}

export function ComputerFrame({ children, className = '' }: ComputerFrameProps) {
    return (
        <div className={`relative mx-auto w-full max-w-[90%] ${className}`}>
            {/* Monitor Bezel */}
            <div className="relative rounded-t-xl bg-[#2a2a2a] p-2 pb-0 shadow-2xl border border-gray-700/50">
                {/* Camera dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-black/50 overflow-hidden z-20">
                    <div className="absolute inset-0 bg-green-500/20" />
                </div>

                {/* Screen Content Wrapper - Aspect Ratio 16:10 or similar */}
                <div className="relative aspect-[16/10] bg-black rounded-lg overflow-hidden border border-white/5 group-hover:border-primary-500/20 transition-colors duration-500">
                    {/* Screen Reflection overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

                    {/* The Content (Image) */}
                    <div className="relative w-full h-full">
                        {children}
                    </div>
                </div>

                {/* Monitor Chin */}
                <div className="h-4 bg-[#2a2a2a] relative flex items-center justify-center">
                    {/* Logo placeholder */}
                    {/* <div className="w-4 h-4 text-[6px] text-gray-500 flex items-center justify-center">XFUSE</div> */}
                </div>
            </div>

            {/* Stand Stem */}
            <div className="h-8 w-1/4 mx-auto bg-gradient-to-b from-[#1a1a1a] to-[#2a2a2a] relative -z-10 shadow-lg" />

            {/* Stand Base */}
            <div className="h-2 w-1/3 mx-auto bg-[#2a2a2a] rounded-t-lg shadow-2xl relative -z-10 bg-gradient-to-r from-[#2a2a2a] via-[#3a3a3a] to-[#2a2a2a]" />

            {/* Bottom Glow/Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl -z-20" />
        </div>
    );
}
