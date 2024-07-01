import { render } from "@testing-library/react";
import TitlePrimaryComponent from ".";

describe("Title Primary Tests", () => {
  const TITLE = "Hello World from tests";
  const SUBTITLE = "This is my subtitle";

  test("Test Only Title", () => {
    const { getByText } = render(<TitlePrimaryComponent title={TITLE} />);

    const titleComponent = getByText(TITLE);

    expect(titleComponent.innerHTML).toBe(TITLE);
  });

  test("Test Title and Subtitle", () => {
    const { getByText } = render(
      <TitlePrimaryComponent title={TITLE} subtitle={SUBTITLE} />
    );

    const titleComponent = getByText(TITLE);
    const subTitleComponent = getByText(SUBTITLE);

    expect(titleComponent.innerHTML).toBe(TITLE);
    expect(subTitleComponent.innerHTML).toBe(SUBTITLE);
  });
});
