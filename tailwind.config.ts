import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
    extend: {
      screens: {
        xs:'350px'
      },
      colors: {
        'd-blue': 'hsl(233, 26%, 24%)',
        'l-green': 'hsl(136, 65%, 51%)',
        'b-cyan': 'hsl(192, 70%, 51%)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },

	
		
		keyframes: {
			'accordion-down': {
				from: {
					height: '0',
				},
				to: {
					height: 'var(--radix-accordion-content-height)',
				},
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)',
				},
				to: {
					height: '0',
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;
// ### Primary

// ### Neutral

// - Grayish Blue: hsl(233, 8%, 62%)
// - Light Grayish Blue: hsl(220, 16%, 96%)
// - Very Light Gray: hsl(0, 0%, 98%)
// - White: hsl(0, 0%, 100%)
