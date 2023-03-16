// import 'ress/ress.css';
import '../src/styles/base/_reset.scss';
import '../src/styles/base/_global.scss';
import '../src/styles/abstracts/_index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'synergyca',
    values: [
      {
        name: 'synergyca',
        value: '#f4efe9',
      },
    ],
  },
};
