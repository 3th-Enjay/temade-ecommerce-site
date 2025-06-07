import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
      responsive: 'clamp(2rem, 5vw, 4.74rem)',
      responsive2: 'clamp(3rem, 5vw, 6.3125rem)',
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
       fontFamily: {
        garamond: ['EB Garamond', 'serif'],
        WorkSans: ['Work Sans', 'sans-serif']
      },
       screens: {
        smb: '932px', // custom breakpoint
        'max-smb': { max: '500px' },
         'max-xsmb': { max: '338px' },
      },
    },
    plugins: [require('tailwind-scrollbar-hide')],
  },
} satisfies Config;
