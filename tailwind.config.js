/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    jit: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
  	extend: {
  		fontFamily: {
  			clash: [
  				'var(--font-clash-display)'
  			],
  			chakra: [
  				'var(--font-chakra)'
  			],
  			ibm: [
  				'var(--font-ibm)'
  			],
  			bebas: [
  				'var(--font-bebas)'
  			]
  		},
  		colors: {
  			soothing_black: '#0E1111',
  			main_primary: '#9747FF',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			gray: '#868888',
  			footer: '#1B1B1B',
  			facebookColor: '#1877F2',
  			youtubeColor: '#FF0000',
  			purple: '#6c5da1',
  			darkPurple: '#6f60a3',
  			turquise: '#bfe4f5',
  			metalBlue: '#2a357d',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		screens: {
  			sm: '496px',
  			md: '712px',
  			lg: '900px',
  			xl: '1142px',
  			'2xl': '1536px'
  		},
  		boxShadow: {
  			'3xl': '0 0px 5px 5px rgba(0, 0, 0, 0.3)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
