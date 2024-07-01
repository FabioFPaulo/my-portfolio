import { render } from "@testing-library/react";
import CardAcademicComponent from ".";
import { CardAcademicProps } from "./types";
const OBJECT: CardAcademicProps = {
  dateString: "may, 20",
  href: "/test",
  src: "/test.jpg",
  title: "Graduation - Computer Science",
};
describe("Card Academic Tests", () => {
  it("Test render component", () => {
    const { getByTestId } = render(<CardAcademicComponent {...OBJECT} />);

    const containerElement = getByTestId("card-academic-container");
    const imageElement = getByTestId("card-academic-img");
    const titleElement = getByTestId("card-academic-title");
    const dateElement = getByTestId("card-academic-date");

    expect(containerElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
    expect(titleElement.innerHTML).toBe(OBJECT.title);
    expect(dateElement.innerHTML).toBe(OBJECT.dateString);
  });
});
