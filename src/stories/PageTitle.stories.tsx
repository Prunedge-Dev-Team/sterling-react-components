import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PageTitle from "../components/PageTitle/PageTitle";

export default {
  title: "Sterling/PageTitle",
  component: PageTitle,
  argTypes: {},
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const PageTitleDemo = Template.bind({});
PageTitleDemo.args = {
  pageTitle: "User and Access Management",
  current: "CREATE USER",
  historyStack: [
    { title: "USER & ACCESS MANAGEMENT", to: "/" },
    { title: "USER MANAGEMENT", to: "/" },
  ],
};
