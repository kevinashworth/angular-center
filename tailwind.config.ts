import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';

import { spectrum } from './src/theme';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: [
        'Avenir Next',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      mono: ['monospace'],
    },
    extend: {
      colors: spectrum,
    },
  },
  plugins: [
    plugin(function ({ addBase }: { addBase: any }) {
      addBase({
        h1: { fontSize: '6.25rem', fontWeight: 500 },
        h2: { fontSize: '4rem', fontWeight: 500 },
        h3: { fontSize: '3rem', fontWeight: 500 },
        h4: { fontSize: '2rem', fontWeight: 500 },
        h5: { fontSize: '1.5rem', fontWeight: 500 },
        h6: { fontSize: '0.75rem', fontWeight: 500 },
      });
    }),
    daisyui,
  ],
  daisyui: {
    prefix: "d-",
    base: false,
    utils: false,
    logs: false,
  },
} satisfies Config;
