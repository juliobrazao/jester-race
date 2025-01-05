import { render, screen } from "@testing-library/react";
import { Container, ContainerCentered, ContainerFluid } from ".";

describe("<Container /> component", () => {
  it("Renders a basic container", async () => {
    render(<Container>Basic Container</Container>);
    const basicText = screen.getByText("Basic Container");
    expect(basicText).toBeInTheDocument();
  });
});

describe("<ContainerCentered /> component", () => {
  it("Renders a centered container", async () => {
    render(<ContainerCentered>Centered Container</ContainerCentered>);
    const basicText = screen.getByText("Centered Container");
    expect(basicText).toBeInTheDocument();
  });
});

describe("<ContainerFluid /> component", () => {
  it("Renders a fluid container", async () => {
    render(<ContainerFluid>Fluid Container</ContainerFluid>);
    const basicText = screen.getByText("Fluid Container");
    expect(basicText).toBeInTheDocument();
  });
});
