/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale:{
        '102': '1.02'
      },
      lineHeight:{
        '110': '110%',
        '150': '150%'
      },
      fontSize:{
        'custom-55px': '55px'
      },
      colors: {
        menuHover: '#0ff',
        contactMenuHover: '#2a0b85',
        aboutInlineHeader: '#8491a0',
        aboutContext: '#8491a0',
        popUpMenuBg: '#181823',
        projectCardBg: '#171f27',
        allProjectsButtonBorder: '#5221e6',
        activeLink: '#0082f3'
      },
      backgroundImage: {
        heroBackground: "url('/src/assets/IMG_4803_paint.png')",
        linkedinBg: "url('/src/assets/linkedin.png')",
        githubBg: "url('/src/assets/git2.png')",
      },
      transitionDuration: {
        '1500': '1500ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}

