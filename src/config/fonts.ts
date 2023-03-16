import { Jost } from '@next/font/google';

const jost300 = Jost({
  weight: '300',
  display: 'swap',
  subsets: ['latin'],
});

const jost400 = Jost({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

const jost500 = Jost({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
});

const jost600 = Jost({
  weight: '600',
  display: 'swap',
  subsets: ['latin'],
});

export const STYLE_ROOT_FONT_FAMILY = `
:root {
    --font-jost-300: ${jost300.style.fontFamily};
    --font-jost-400: ${jost400.style.fontFamily};
    --font-jost-500: ${jost500.style.fontFamily};
    --font-jost-600: ${jost600.style.fontFamily};
}
`;
