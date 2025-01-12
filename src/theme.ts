export const spectrum = {
  // First, our basic colors:
  gray: {
    DEFAULT: '#54565a',
    50: '#FAFAFA',
    100: '#EDEDED',
    200: '#CCCCCC',
    300: '#999999',
    400: '#7E7E7E',
    500: '#676767',
    600: '#5F5F5F',
    700: '#525252',
    800: '#4A4A4A',
    900: '#393939',
  },
  coin: '#cdde00',
  customersbg: '#92d3f1',
  green: '#00cc55',
  light: '#d4fbfc',
  ocean: '#71e2ea',
  orange: '#f59e0b',
  pagebg: '#c7e3fc',
  red: '#dc2626',
  sky: '#2a7de1',
  slate: '#cbd5e1',
  token: '#aa8321',
  vibrant: '#0047ba',
  vista: '#8098be',
  // internal pages
  beryl: '#00a3b8',
  forest: '#00515a',
  // impersonation
  burnt: '#cc5500', // short for burnt orange,
  // notifications
  ncampaigns: '#7a7a7a',
  ntokens: '#ed0000',
  // Now, some abcgray colors, which are for hover states on buttons. Direct
  // link for vibrantgray: https://bit.ly/3ToBBGH (points to https://colors.tools)
  berylgray: {
    200: '#0b8d9e', // 20% towards gray-900 from beryl
    300: '#118391', // 30%
    400: '#167885', // 40%
  },
  burntgray: {
    200: '#ae4f0b', // 20% towards gray-900 from burnt
    300: '#9f4c11', // 30%
    400: '#914916', // 40%
  },
  errorgray: {
    200: '#ac3528', // 20% towards gray-900 from error
    300: '#9d362a', // 30%
    400: '#8f362c', // 40%
  },
  greengray: {
    200: '#0bae4f', // 20% towards gray-900 from green
    300: '#119f4c', // 30%
    400: '#169149', // 40%
  },
  skygray: {
    200: '#2d6fbf', // 20% towards gray-900 from sky
    300: '#2e68ae', // 30%
    400: '#30619d', // 40%
  },
  tokengray: {
    200: '#937425', // 20% towards gray-900 from token
    300: '#886c28', // 30%
    400: '#7c652a', // 40%
  },
  vibrantgray: {
    200: '#0b44a0', // 20% towards gray-900 from vibrant
    300: '#114293', // 30%
    400: '#164186', // 40%
  },
  // Below here, these are because as of Dec 2023 they are currently in use or
  // otherwise necessary for replacing colors, rather than extending, in
  // tailwind.config.cjs. They are copied from tailwind src/public/colors.js.
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
};

export type SpectrumColor = keyof typeof spectrum;

export const spectrum_rgb_ignore = {
  beryl: 'rgb(0, 163, 184)',
  black: 'rgb(0, 0, 0)',
  burnt: 'rgb(204, 85, 0)',
  coin: 'rgb(205, 222, 0)',
  forest: 'rgb(0, 81, 90)',
  gray: 'rgb(84, 86, 90)',
  green: 'rgb(0, 204, 85)',
  light: 'rgb(212, 251, 252)',
  ncampaigns: 'rgb(122, 122, 122)',
  ntokens: 'rgb(237, 0, 0)',
  ocean: 'rgb(113, 226, 234)',
  orange: 'rgb(245, 158, 11)',
  pagebg: 'rgb(199, 227, 252)',
  red: 'rgb(220, 38, 38)',
  sky: 'rgb(42, 125, 225)',
  slate: 'rgb(203, 213, 225)',
  token: 'rgb(170, 131, 33)',
  vibrant: 'rgb(0, 71, 186)',
  vista: 'rgb(128, 152, 190)',
  white: 'rgb(256, 256, 256)',
};

export const spectrum_hex_ignore = {
  beryl: '#00a3b8',
  black: '#000',
  burnt: '#cc5500',
  coin: '#cdde00',
  forest: '#00515a',
  gray: '#54565a',
  green: '#00cc55',
  light: '#d4fbfc',
  ncampaigns: '#7a7a7a',
  ntokens: '#ed0000',
  ocean: '#71e2ea',
  orange: '#f59e0b',
  pagebg: '#c7e3fc',
  red: '#dc2626',
  sky: '#2a7de1',
  slate: '#cbd5e1',
  token: '#aa8321',
  vibrant: '#0047ba',
  vista: '#8098be',
  white: '#fff',
};
