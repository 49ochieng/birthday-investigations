/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        office: {
          paper: "#f3ead9",
          cream: "#f8f1e0",
          folder: "#d9c48f",
          ink: "#1c1a17",
        },
        gold: {
          DEFAULT: "#d4af37",
          light: "#e8cc6a",
          dark: "#a9861f",
        },
        redstamp: "#a0272d",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        mono: ["Courier New", "monospace"],
      },
      backgroundImage: {
        "paper-grain":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.03), transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.02), transparent 45%)",
      },
      keyframes: {
        "stamp-in": {
          "0%": { transform: "scale(2.2) rotate(-18deg)", opacity: "0" },
          "60%": { transform: "scale(0.95) rotate(-12deg)", opacity: "1" },
          "100%": { transform: "scale(1) rotate(-12deg)", opacity: "1" },
        },
        "badge-bounce": {
          "0%, 100%": { transform: "translateY(0) rotate(-3deg)" },
          "50%": { transform: "translateY(-6px) rotate(3deg)" },
        },
        "confetti-fall": {
          "0%": { transform: "translateY(-10px) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(120vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "stamp-in": "stamp-in 0.5s ease-out both",
        "badge-bounce": "badge-bounce 2.4s ease-in-out infinite",
        "confetti-fall": "confetti-fall 2.8s linear forwards",
      },
    },
  },
  plugins: [],
};
