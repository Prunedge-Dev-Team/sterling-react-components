import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomAccordion from "../components/Accordion/CustomAccordion";

export default {
  title: "Sterling/CustomAccordion",
  component: CustomAccordion,
  argTypes: {},
} as ComponentMeta<typeof CustomAccordion>;

const Template: ComponentStory<typeof CustomAccordion> = (args) => (
  <CustomAccordion {...args} />
);

export const Accordion = Template.bind({});
Accordion.args = {
  accordionSummary: "This is the title of the accordion",
  accordionDetails: "This is the content of the accordion",
};
