import type { Config } from 'tailwindcss';
import { withTV } from 'tailwind-variants/transformer';

const config: Config = withTV({
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        secondary: 'hsl(var(--secondary))',
        elements: 'hsl(var(--elements))',
        border: 'hsl(var(--border))',

        foreground: 'hsl(var(--foreground))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
        placeholder: 'hsl(var(--placeholder))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          border: 'hsl(var(--primary-border))',
          hover: 'hsl(var(--primary-hover))',
        },

        warning: {
          DEFAULT: 'hsl(var(--warning))',
          border: 'hsl(var(--warning-border))',
          hover: 'hsl(var(--warning-hover))',
        },

        danger: {
          DEFAULT: 'hsl(var(--danger))',
          border: 'hsl(var(--danger-border))',
          hover: 'hsl(var(--danger-hover))',
        },

        success: {
          DEFAULT: 'hsl(var(--success))',
          border: 'hsl(var(--success-border))',
          hover: 'hsl(var(--success-hover))',
        },
      },
    },
  },
});

export default config;
