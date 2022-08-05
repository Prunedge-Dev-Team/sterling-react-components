import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button  from '../components/Button/Button';
import theme from "../components/theme";

export default {
  title: "Sterling/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: theme.palette.primary.main,
  buttonText: "Primary",
  buttonType: "primary",
  rounded: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "#AAAAAA",
  buttonText: "Secondary",
  buttonType: "secondary",
  rounded: true,
};