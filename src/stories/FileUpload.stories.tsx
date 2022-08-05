import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FileUpload from "../components/FileUpload/FileUpload";

export default {
  title: "Sterling/FileUpload",
  component: FileUpload,
  argTypes: {},
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Upload = Template.bind({});
Upload.args = {
  showTop: true,
  canRename: true,
  accept: "pdf",
};
