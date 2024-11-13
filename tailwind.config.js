/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Baloo 2', 'cursive'],
            },
            colors: {
                primary: '#325F7B',
                background: '#FDF9F3',
                backgroundT: '#F6F0E4',
            },
        },
    },
    plugins: [],
};
