import { render } from "@testing-library/react";
import Navbar from ".";
import { items } from "./utils";

describe("Navbar tests", () => {
  test("render items", () => {
    const { getByText } = render(<Navbar />);

    for (const item of items) {
      const element = getByText(item.label);
      expect(element).toBeTruthy();
    }
  });
});
