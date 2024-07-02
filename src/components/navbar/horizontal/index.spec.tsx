import { render } from "@testing-library/react";
import { items } from "../utils";
import NavbarComponent from "..";

describe("Navbar tests", () => {
  test("render items", () => {
    const { getByText } = render(<NavbarComponent />);

    for (const item of items) {
      const element = getByText(item.label);
      expect(element).toBeTruthy();
    }
  });
});
