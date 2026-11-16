import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { items } from "../utils";
import NavbarComponent from "..";

describe("Navbar tests", () => {
  test("render items", () => {
    const { getByText } = render(
      <MemoryRouter>
        <NavbarComponent />
      </MemoryRouter>
    );

    for (const item of items) {
      const element = getByText(item.label);
      expect(element).toBeTruthy();
    }
  });
});
