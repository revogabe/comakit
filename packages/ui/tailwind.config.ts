import sharedConfig from '@comaqui/config-tailwind';
import type { Config } from 'tailwindcss';
import { withTV } from 'tailwind-variants/transformer';

const config: Config = withTV({
  presets: [sharedConfig],
  content: ['./src/**/*.{ts,tsx}'],
});

export default config;
