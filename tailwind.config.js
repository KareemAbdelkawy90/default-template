/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-gray-1': '#dadce0',
                'brand-blue-1': '#1967d2',
                'brand-blue-2': '#4285f4',
                'brand-green-1': '#137333',
                'brand-gray-2': '#f8f9fa',
                'brand-gray-3': '#80886b',
            },
        },
    },
    plugins: [],
};
