import type { Config } from 'tailwindcss';
import { withTV } from 'tailwind-variants/transformer';

const config: Config = withTV({
  content: ['./src/**/*.{ts,tsx}'],
});

export default config;
