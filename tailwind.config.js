/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      herr_von_muellerhoff: ["var(--font-herr_von_muellerhoff)"],
      source_sans_pro: ["var(--font-source_sans_pro)"],
    },
    extend: {
      spacing: {
        100: "35rem",
      },
      padding: {
        full: "100%",
      },
    },
  },
  plugins: [],
};
