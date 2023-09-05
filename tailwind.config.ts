import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // add your own custom colors
      colors: {
        primary: "#DAC3FF",
        secondary: "#6E61FF",
        tertiary: "#2D8AE0",
        quaternary: "#C9E2FA",
        quinary: "#FF5710",
        senary: "#59CE89",
        septenary: "#EEFDFF",
      },
      // make tailwind desktop first
      screens: {
        sm: { max: "640px" },
        md: { max: "768px" },
        lg: { max: "1024px" },
        xl: { max: "1440px" },
      },
      boxShadow: {
        "primary-shadow": "4px 4px 0px 0px",
        "secondary-shadow": "18px 18px 0px 0px",
        "tertiary-shadow": "8px 8px 0px 0px",

      },
      spacing: {
        primary: "103px",
      },
      backgroundImage: {
        "header-image": "url('/thumbsup_3d.png')",
      }
    },
  },
  plugins: [],
}
export default config
