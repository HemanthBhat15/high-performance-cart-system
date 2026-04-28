/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            // === Colors from Stitch ===
            colors: {
                primary: '#1A73E8',
                'primary-dark': '#1557B0',
                secondary: '#34A853',
                surface: '#F8F9FA',
                error: '#EA4335',
                'text-primary': '#202124',
                'text-secondary': '#5F6368',
            },
            // === Fonts from Stitch ===
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            // === Font sizes from Stitch ===
            fontSize: {
                h1: '32px',
                h2: '24px',
                body: '16px',
                caption: '12px',
            },
            // === Border radius from Stitch ===
            borderRadius: {
                card: '12px',
                button: '8px',
            },
            // === Spacing from Stitch ===
            spacing: {
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            },
        },
    },
    plugins: [],
};