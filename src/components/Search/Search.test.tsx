import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomSearch from "./Search";
import "@testing-library/jest-dom/extend-expect";

describe("Search field", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <CustomSearch onChangeText={setSearch} searchText="" placeholderText="" />
    );

    const searchInput = queryByPlaceholderText("Search...")!;

    fireEvent.change(searchInput, { target: { value: "test" } });
  });
});
