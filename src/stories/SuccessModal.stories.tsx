import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SuccessModal from "../components/Modals/SuccessModal";

export default {
  title: "Sterling/SuccessModal",
  component: SuccessModal,
  argTypes: {},
} as ComponentMeta<typeof SuccessModal>;

const Template: ComponentStory<typeof SuccessModal> = (args) => (
  <SuccessModal {...args} />
);

export const Open = Template.bind({});
Open.args = {
  modalText: "You have successfully enabled user!",
  open: true,
};
