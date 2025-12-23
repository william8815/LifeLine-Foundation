/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        foundation: {
          blue: "#1e40af", // 主題藍
          orange: "#f06e00", // 守護橘
          lightblue: "#60a5fa", // 淺藍
          beige: "#ffdc8c", // 守護米黃
          gray: "#b4b4b4", // 灰
        },
      },
    },
  },
  plugins: [],
};
