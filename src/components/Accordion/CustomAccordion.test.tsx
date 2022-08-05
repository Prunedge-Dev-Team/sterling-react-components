import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomAccordion from "./CustomAccordion";

test("can open accordion items to see the contents", () => {
  const accordionContent = {
    title: "Test Accordion summary",
    contents: "Test Accordion details",
  };

  const { getByText } = render(
    <CustomAccordion
      accordionSummary={accordionContent.title}
      accordionDetails={accordionContent.contents}
      idx={0}
    />
  );
  expect(getByText(accordionContent.contents)).toBeInTheDocument();
  fireEvent.click(getByText(accordionContent.title));
  expect(getByText(accordionContent.contents)).toBeInTheDocument();
});
