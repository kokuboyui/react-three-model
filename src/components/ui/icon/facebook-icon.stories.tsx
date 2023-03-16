import { FacebookIcon } from './facebook-icon';

import type { Meta, Story } from '@storybook/react';

// eslint-disable-next-line import/exports-last
export default {
  title: 'ui/icon',
  component: FacebookIcon,
  argTypes: {},
} as Meta;

const Template: Story = () => <FacebookIcon />;
// eslint-disable-next-line import/exports-last
export const Facebook = Template.bind({});
Facebook.args = {
  primary: true,
  label: 'FacebookIcon',
};
