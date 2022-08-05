import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';
import ThemeProviderWrapper from './ThemeProviderWrapper'

export default {
  title: "SterlingCore/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProviderWrapper>
    <Button {...args} />
  </ThemeProviderWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
  buttonText: "Primary",
  color: "primary",
  variant: "contained",
  rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonText: "Secondary",
  color: "inherit",
  variant: "contained",
  rounded: true,
};