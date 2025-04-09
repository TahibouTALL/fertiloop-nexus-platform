
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        fertiloop: {
          green: {
            DEFAULT: '#2E7D32',
            light: '#4CAF50',
            dark: '#1B5E20',
            soft: '#0A3D0A'
          },
          blue: {
            DEFAULT: '#1E88E5',
            light: '#64B5F6',
            dark: '#0D47A1',
            soft: '#072A60'
          },
          gray: {
            DEFAULT: '#121212',
            light: '#1E1E1E',
            dark: '#0A0A0A',
            soft: '#050505'
          },
          purple: {
            DEFAULT: '#673AB7',
            light: '#9575CD',
            dark: '#4527A0',
            soft: '#2A1760'
          },
          teal: {
            DEFAULT: '#009688',
            light: '#4DB6AC',
            dark: '#00695C',
            soft: '#003D33'
          },
          amber: {
            DEFAULT: '#FFB300',
            light: '#FFCA28',
            dark: '#FF8F00',
            soft: '#A35900'
          },
          beige: {
            DEFAULT: '#E6D7B9',
            light: '#F0E6D2',
            dark: '#C2B092',
            soft: '#9E8F73'
          },
          coral: {
            DEFAULT: '#FF7043',
            light: '#FF9E80',
            dark: '#E64A19',
            soft: '#A82E10'
          }
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'soft': 'var(--shadow-sm)',
        'card': 'var(--shadow-md)',
        'raised': 'var(--shadow-lg)',
        'glow': '0 0 15px rgba(46, 125, 50, 0.3)',
        'glow-strong': '0 0 25px rgba(46, 125, 50, 0.5)',
        'inner-glow': 'inset 0 0 15px rgba(46, 125, 50, 0.2)',
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #2E7D32, 0 0 20px #2E7D32, 0 0 25px #2E7D32',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-soft': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, #0A0A0A, #121212)',
        'gradient-accent': 'linear-gradient(135deg, #1B5E20, #2E7D32)',
        'dots-pattern': 'radial-gradient(rgba(46, 125, 50, 0.2) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(rgba(46, 125, 50, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(46, 125, 50, 0.1) 1px, transparent 1px)',
        'nature-pattern': 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h20v20H0V0zm10 17L5 12h10l-5 5z\' fill=\'%232E7D32\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        'carbon-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\' viewBox=\'0 0 8 8\'%3E%3Cg fill=\'%232E7D32\' fill-opacity=\'0.15\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M0 0h4v4H0V0zm4 4h4v4H4V4z\'/%3E%3C/g%3E%3C/svg%3E")',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' }
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'sparkle': {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' }
        },
        'glowing': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(46, 125, 50, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(46, 125, 50, 0.7)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-out',
        'slide-in': 'slide-in 0.6s ease-out',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'float': 'float 5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'rotate-slow': 'rotate-slow 15s linear infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'glowing': 'glowing 2s ease-in-out infinite'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'hsl(var(--foreground))',
            h1: {
              color: 'hsl(var(--foreground))',
            },
            h2: {
              color: 'hsl(var(--foreground))',
            },
            h3: {
              color: 'hsl(var(--foreground))',
            },
            h4: {
              color: 'hsl(var(--foreground))',
            },
            code: {
              color: 'hsl(var(--primary))',
              background: 'hsl(var(--secondary))',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
            },
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.9)',
              },
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--primary) / 0.2)',
              backgroundColor: 'hsl(var(--secondary) / 0.1)',
            },
          },
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
