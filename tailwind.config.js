const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config = {
    mode: "jit",
    content: [
        "./views/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                trueGray: colors.neutral,
            },
        },
        fontFamily: {
            sans: ["Inter", ...defaultTheme.fontFamily.sans],
            stock: [defaultTheme.fontFamily.sans],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
export default config;