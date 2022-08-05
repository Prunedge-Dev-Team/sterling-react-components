import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Search from "../components/Search/Search";

export default {
  title: "Sterling/Search",
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const SearchDemo = Template.bind({});
SearchDemo.args = {
  placeholderText: "Please type the search word",
};
