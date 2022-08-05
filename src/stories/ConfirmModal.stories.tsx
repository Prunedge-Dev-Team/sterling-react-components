import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ConfirmModal from "../components/Modals/ConfirmModal";

export default {
  title: "Sterling/ConfirmModal",
  component: ConfirmModal,
  argTypes: {},
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Open = Template.bind({});
Open.args = {
  modalText: "Do you want to enable user?",
  open: true,
  loading: false,
};
