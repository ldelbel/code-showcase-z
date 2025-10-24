/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: [
					'Roboto',
					'sans-serif'
				],
				inter: [
					'Inter',
					'sans-serif'
				],
				rajdhani: [
					'Rajdhani',
					'sans-serif'
				],
				oleo: [
					'Oleo Script',
					'cursive'
				]
			},
			colors: {
				whitesmoke: '#f5f5f5',
				lightgray: '#E3E2DF',
				lightgray2: '#E7E7E7',
				oldgoldbrown: '#BBA27C',
				oldgold: '#DCBA85',
				oldgoldlight: '#E6BE69',
				oldgolddark: '#D3A84C',
				oldgolddark2: '#B58F3E',
				customBrown: '#55472A',
				customBrown2: '#4B3A19',
				customGray: '#6C6C6C',
				customGray2: '#616161',
				customGray3: '#4A4A4A',
				customGray4: '#979797',
				customGray5: '#585858',
				CustomBlack: '#171717',
				DarkGray: '#242424',
				DarkGray2: 'rgba(30, 30, 30, 0.8)',
				DarkGray3: 'rgba(30, 30, 30, 0.9)',
				CustomGreen: '#175020',
				LightGreen: '#21B876',
				customOrange: '#DC683D',
				customRed: '#C34335',
				customGreen2: '#36AF5A',
				customBlue: '#3772C0',
				customYellow: '#C3B035',
				customYellow2: '#FFEC94',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
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
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			spacing: {
				'18': '4.5rem',
				'10%': '10%'
			},
			backgroundImage: {
				'golden-gradient': 'linear-gradient(90deg, #a47a1e 3%, #d3a84c 19%, #ffec94 38%, #e6be69 58%, #ffd87c 80%, #b58f3e 91%, #956d13 100%)',
				'golden-gradient-vertical': 'linear-gradient(0, #a47a1e 3%, #d3a84c 19%, #ffec94 38%, #e6be69 58%, #ffd87c 80%, #b58f3e 91%, #956d13 100%)',
				'golden-gradient-2': 'linear-gradient(90deg, #a47a1e 3%, #d3a84c 9%, #ffec94 38%, #e6be69 75%, #ffd87c 86%, #b58f3e 94%, #956d13 100%)',
				'golden-gradient-3': 'linear-gradient(90deg, #A47A1E 2.5%, #D3A84C 19%, #FFEC94 38.5%, #E6BE69 58%, #FFD87C 79.5%)',
				'golden-gradient-4': 'linear-gradient(90deg, #FFD87C 2.5%, #D3A84C 19%, #FFEC94 38.5%, #E6BE69 58%, #FFD87C 79.5%)',
				'gray-gradient': 'radial-gradient(174.71% 87.3% at 21.88% 8.6%, #FAFAFA 0%, #BCBCBC 100%)',
				'dark-gray-gradient': 'radial-gradient(174.71% 87.3% at 21.88% 8.6%, #282828 0%, #202020 100%)',
				'golden-conic': 'conic-gradient(from 90deg at 50% 50%, #956D13 0deg, #A47A1E 9deg, #D3A84C 68.4deg, #FFEC94 138.6deg, #E6BE69 208.8deg, #FFD87C 286.2deg, #B58F3E 327.6deg, #956D13 360deg)'
			},
			textShadow: {
				'gold-shadow': '2px 2px 5px rgba(0, 0, 0, 0.5)',
				tight: '0 1px 1px rgba(0, 0, 0, 0.3)',
				'golden-glow': '3px 3px 5px #f5e9a6, 0px 0px 10px #d3b869, 0px 0px 1px #f5f3ebd5, 0px 0px 3px #FFD87C, 0px 0px 1px #f6dc15, -1px -1px 0 #FFD87C, 1px -1px 0 #FFD87C, -1px 1px 0 #FFD87C, 1px 1px 0 #FFD87C'
			},
			dropShadow: {
				tight: '0 1px 1px rgba(0, 0, 0, 0.8)'
			},
			boxShadow: {
				'custom-inset': '0px 3px 3px 0px rgba(0, 0, 0, 0.3) inset',
				'button-inset': 'inset 4px 4px 4px rgba(18,19,21,1),inset -4px -4px 4px rgba(56,56,58,0.5)',
				'top-light': '-1px -1px 3px 0px rgba(255, 255, 255, 0.5)',
				'bottom-dark': '2px 2px 3px 0px rgba(0, 0, 0, 0.5)',
				'black-white': '3px 3px 10px rgba(0,0,0,1), -1px -1px 6px rgba(255,255,255,0.4)',
				box: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
				'box-2': '0px 2px 2px 0px rgba(0, 0, 0, 0.25)',
				'box-3': '4px 4px 5px 0px rgba(0, 0, 0, 0.50)',
				'inset-dark': '0px 5px 10px 0px rgba(0, 0, 0, 0.5) inset'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'spin-slow': 'spin 20s linear infinite',
				'spin-slow2': 'spin 70s linear infinite'
			},
			fontSize: {
				xxs: '10px',
				xxxs: '8px'
			}
		},
		screens: {
			...defaultTheme.screens,
			'min-380': '380px',
			'min-400': '400px',
			sm: {
				raw: '(min-height: 730px)'
			},
			md: {
				raw: '(min-height: 800px)'
			},
			md2: {
				raw: '(min-height: 820px)'
			},
			tall: {
				raw: '(min-height: 900px)'
			}
		}
	},
	plugins: [
		animate,
		function ({ addUtilities }) {
			addUtilities({
				'.text-shadow-md': {
					textShadow: '0px 4px 4px #000000BF',
				},
			});
		}
	],
};
