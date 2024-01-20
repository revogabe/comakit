import type { Config } from 'tailwindcss'
import { withTV } from 'tailwind-variants/transformer'

const config: Config = withTV({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        elements: 'hsl(var(--elements))',
        border: 'hsl(var(--border))',
        'scroll-thumb': 'hsl(var(--scroll-thumb))',

        foreground: 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        placeholder: 'hsl(var(--placeholder))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          border: 'hsl(var(--primary-border))',
          hover: 'hsl(var(--primary-hover))',
        },

        danger: {
          DEFAULT: 'hsl(var(--danger))',
          border: 'hsl(var(--danger-border))',
          hover: 'hsl(var(--danger-hover))',
          foreground: 'hsl(var(--danger-foreground))',
        },

        success: {
          DEFAULT: 'hsl(var(--success))',
          border: 'hsl(var(--success-border))',
          hover: 'hsl(var(--success-hover))',
          foreground: 'hsl(var(--success-foreground))',
        },
      },
      animation: {
        'overlay-show': 'overlay-show 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-show': 'content-show 250ms cubic-bezier(0.16, 1, 0.3, 1)',
        'overlay-hide': 'overlay-hide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'content-hide': 'content-hide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'dropdown-hide': 'dropdown-hide 200ms cubic-bezier(0.16, 1, 0.3, 1)',
        'selection-show': 'selection-show 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'selection-hide': 'selection-hide 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down-fade': 'slide-down-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-left-fade': 'slide-left-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-up-fade': 'slide-up-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-right-fade': 'slide-right-fade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
})

export default config
