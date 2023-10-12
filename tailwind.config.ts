
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        default: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        bookCover: "4px 3px 3px 0px rgba(0, 0, 0, 0.25);",
        blogComponent: "0px 7px 4px 0px rgba(0, 0, 0, 0.25);"
      },
      colors: {
        primary: '#F5CB5C',
        defaultText: "#242423",
        defaultBlogText: "#3C3A36",
        bodyBG: "#CFDBD5",
        secondaryText: "#A9B4AFFF"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
