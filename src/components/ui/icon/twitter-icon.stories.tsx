import { TwitterIcon } from './twitter-icon';

import type { Meta, Story } from '@storybook/react';

// eslint-disable-next-line import/exports-last
export default {
  title: 'ui/icon',
  component: TwitterIcon,
  argTypes: {},
} as Meta;

const Template: Story = () => <TwitterIcon />;
// eslint-disable-next-line import/exports-last
export const Twitter = Template.bind({});
Twitter.args = {
  primary: true,
  label: 'TwitterIcon',
};
