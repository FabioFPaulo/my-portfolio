import { render } from "@testing-library/react";
import ContainersSectionComponent from ".";

describe("Container Section Tests", () => {
  test("Render Container Section and verify id and children", () => {
    const ID = "test";

    const Children = <p>Hello</p>;
    const { getByTestId } = render(
      <ContainersSectionComponent id={ID}>
        {Children}
      </ContainersSectionComponent>
    );

    const container = getByTestId(ID);
    const content = getByTestId(`${ID}-content`);

    expect(container.id).toBe(ID);
    expect(content.childNodes[0]).toBeTruthy();
  });
});
