import React from "react";
import ConfirmModal from "./ConfirmModal";
import { render, fireEvent } from "@testing-library/react";

test("modal shows the children and a close button", () => {
  const handleClose = jest.fn();
  const handleConfirm = jest.fn();

  const { getByText } = render(
    <ConfirmModal
      onClose={handleClose}
      modalText="test"
      open={true}
      onConfirm={handleConfirm}
    />
  );
  expect(getByText("test")).toBeTruthy();

  fireEvent.click(getByText(/close/i));

  expect(handleClose).toHaveBeenCalledTimes(1);
});
