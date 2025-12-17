import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // XFUSE Brand Colors - Exact Match from Logo
                primary: {
                    50: "#e0f2fe",
                    100: "#bae6fd",
                    200: "#7dd3fc",
                    300: "#38bdf8",
                    400: "#0ea5e9", // Vivid Light Blue
                    500: "#00A3FF", // Fuse Blue (Main Brand Color)
                    600: "#0284c7",
                    700: "#0369a1",
                    800: "#075985",
                    900: "#0c4a6e",
                },
                cyan: {
                    400: "#22d3ee",
                    500: "#06b6d4",
                    600: "#0891b2",
                },
                purple: {
                    400: "#c084fc",
                    500: "#7E22CE", // Deep Violet from X bottom-left
                    600: "#6b21a8",
                },
                orange: {
                    400: "#fb923c",
                    500: "#FF5F1F", // Bright Orange from X top-left
                    600: "#ea580c",
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                // The "X" Gradient: Orange -> Purple -> Blue
                "gradient-primary": "linear-gradient(135deg, #FF5F1F 10%, #7E22CE 50%, #00A3FF 90%)",
                // The "Fuse" Text Gradient: Blue -> Cyan
                "gradient-accent": "linear-gradient(135deg, #00A3FF 0%, #06b6d4 100%)",
                "gradient-glow": "radial-gradient(circle at center, rgba(0, 163, 255, 0.15) 0%, transparent 70%)",
            },
            boxShadow: {
                "glow-sm": "0 0 10px rgba(0, 112, 243, 0.3)",
                "glow": "0 0 20px rgba(0, 112, 243, 0.4)",
                "glow-lg": "0 0 30px rgba(0, 112, 243, 0.5)",
                "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.4)",
                "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
                "glow-orange": "0 0 20px rgba(249, 115, 22, 0.4)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "slide-left": "slideLeft 0.6s ease-out",
                "slide-right": "slideRight 0.6s ease-out",
                "scale-in": "scaleIn 0.5s ease-out",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                "float": "float 3s ease-in-out infinite",
                "gradient-shift": "gradientShift 3s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-30px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideLeft: {
                    "0%": { transform: "translateX(30px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                slideRight: {
                    "0%": { transform: "translateX(-30px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
                scaleIn: {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                pulseGlow: {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(0, 112, 243, 0.4)" },
                    "50%": { boxShadow: "0 0 30px rgba(0, 112, 243, 0.6)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                gradientShift: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
