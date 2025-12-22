/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff006e",
          magenta: "#ed3895",
          purple: "#8338ec",
          cyan: "#06ffc4",
          blue: "#3a86ff",
          orange: "#fb5607",
          red: "#ff0000",
        },
        primary: {
          DEFAULT: "#ff006e",
          50: "#fff0f7",
          100: "#ffe0f0",
          200: "#ffc1e1",
          300: "#ff91cf",
          400: "#ff51b5",
          500: "#ff006e",
          600: "#e6006a",
          700: "#cc005e",
          800: "#b30052",
          900: "#990047",
        },
        secondary: {
          DEFAULT: "#8338ec",
          50: "#f5f0ff",
          100: "#ebe0ff",
          200: "#d6c1ff",
          300: "#c2a3ff",
          400: "#ad85ff",
          500: "#8338ec",
          600: "#7632d4",
          700: "#692cbd",
          800: "#5c26a5",
          900: "#4f208e",
        },
      },
      fontFamily: {
        sans: [
          "Roboto",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Montserrat",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        'gradient-rainbow': 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        'gradient-neon': 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #06ffc4 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 100%)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #ff006e, 0 0 10px #ff006e, 0 0 15px #ff006e' },
          '100%': { boxShadow: '0 0 10px #ff006e, 0 0 20px #ff006e, 0 0 30px #ff006e, 0 0 40px #8338ec' },
        },
      },
    },
  },
  plugins: [],
};
