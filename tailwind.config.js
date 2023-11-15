/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                custom: {
                    500: "#5a6f08",
                    501: "#E4E7D7",
                    502: "#8B9A52",
                    503: "#464B2F",
                    504: "#b40808",
                    505: "#0D632D",
                },
            },
        },
    },
    plugins: [],
};
