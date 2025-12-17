import React from 'react';

interface MobileFrameProps {
    children: React.ReactNode;
    className?: string;
}

export function MobileFrame({ children, className = '' }: MobileFrameProps) {
    return (
        <div className={`relative mx-auto w-[280px] ${className}`}>
            {/* Phone Bezel */}
            <div className="relative rounded-[3rem] bg-[#1a1a1a] p-3 shadow-2xl border-4 border-[#333] ring-1 ring-black/50">
                {/* Dynamic Island / Notch area */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-20 flex items-center justify-center">
                    <div className="w-16 h-4 bg-black rounded-full flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111] ring-1 ring-white/10" />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0d0d0d] ring-1 ring-white/10" />
                    </div>
                </div>

                {/* Screen Content Wrapper - Aspect Ratio ~19.5:9 */}
                <div className="relative aspect-[9/19.5] bg-black rounded-[2.5rem] overflow-hidden border border-white/5">
                    {/* Screen Reflection overlay */}
                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50" />

                    {/* The Content (Image) */}
                    <div className="relative w-full h-full bg-white">
                        {children}
                    </div>
                </div>

                {/* Side Buttons */}
                <div className="absolute top-24 -right-1.5 w-1 h-12 bg-[#2a2a2a] rounded-r-md" />
                <div className="absolute top-24 -left-1.5 w-1 h-8 bg-[#2a2a2a] rounded-l-md" />
                <div className="absolute top-36 -left-1.5 w-1 h-12 bg-[#2a2a2a] rounded-l-md" />
            </div>

            {/* Bottom Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl -z-10" />
        </div>
    );
}
