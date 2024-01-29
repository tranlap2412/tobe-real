import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#F0B90B'
      },  
      backgroundImage: {
        'headblock': 'url("/images/home/head-block.png")',
        'subscribe-form':'url("/images/bg-subscribe-form.png")',
        'voucher':'url("/images/promotion/voucher-bg.svg")',
        'dashboard': 'url("/dashboard/images/bg-dashboard.svg")',
        'gradient-left': 'linear-gradient(90deg, #F0B90B 0%, #FADD55 100%)',
        'gradient-right': 'linear-gradient(90deg, #FFE259 15.1%, #FFA751 85.42%)',
        'gradient-bottom': 'linear-gradient(180deg, #F0B90B 0%, #EBF00B 100%)',
        'gradient-fade-yellow': 'linear-gradient(90deg, #FFF 27.08%, #FFF4CA 100%)',
        'gradient-pink': 'linear-gradient(90deg, #FF9191 0%, #F66 100%)',
        'gradient-card': 'linear-gradient(92.49deg, #D88A00 0%, #FFE259 31.8%)',
        'gradient-footer': 'linear-gradient(180deg, rgba(198, 147, 41, 0) 0%, #FF7E00 100%)',
        'posting-card': ' linear-gradient(180deg, #FADD55 0%, #FFEC88 100%)'
      },
      dropShadow: {
        'title': '0 4px 4px rgba(240, 185, 11, 0.50)',
        'card': '0 4px 11px 0px rgba(0, 0, 0, 0.25)',
        'context': '0 4px 4px rgb(0,0,0)',
        'footer-logo': '0 3px 10px #fff',
      },
      boxShadow: {
        'yellow': '0 10px 11px 0 rgba(240, 185, 11, 0.25)',
        'gray': '0 3px 10px rgba(0, 0, 0, 0.25)'
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        inter: ["Inter"]
      }

    }, 
  },
  plugins: [],
}
export default config
