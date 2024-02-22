/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      }),
      colors: {
        Crimson: "hsl(0deg, 100%, 20%)",
        Dark_Slate_Grey: "hsl(234, 29%, 20%)",
        Charcoal_Grey: "hsl(235, 18%, 26%)",
        Grey: "#555555",
        Dark_Grey: "#111111",
        White: "hsl(0, 0%, 100%)",
        Pale_Navy: "#36384D",
        Dark_Navy: "#242742",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      borderWidth: {
        hairline: "0.5px",
      },
      boxShadow: {
        dark: "0 0 15px -3px rgba(87, 91, 93, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
};
