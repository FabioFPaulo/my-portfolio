import { render } from "@testing-library/react";
import Banner from ".";

describe("Testing Banner", () => {
  test("render items", () => {
    const { getByText } = render(<Banner />);

    expect(getByText("Fábio Paulo")).toBeTruthy();
    expect(getByText("I'm a Web Developer")).toBeTruthy();
    expect(getByText("Date of Birth")).toBeTruthy();
    expect(getByText("Dec 02, 2002")).toBeTruthy();
    expect(getByText("Address")).toBeTruthy();
    expect(getByText("Bairro do Reboleiro 16, Meireles, PT")).toBeTruthy();
    expect(getByText("Email")).toBeTruthy();
    expect(getByText("fabiofrapaulo@outlook.pt")).toBeTruthy();
    expect(getByText("Phone")).toBeTruthy();
    expect(getByText("+351 935 426 877")).toBeTruthy();
  });
});
