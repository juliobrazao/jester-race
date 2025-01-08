import { render, screen } from "@testing-library/react";
import FixtureForm from ".";

describe("<FixtureForm /> component", () => {
  it("Basic FixtureForm UI component rendering", async () => {
    render(<FixtureForm />);

    const title = screen.getByText("Fixture Form");
    const firstField = screen.getByText("First Field");
    const secondField = screen.getByText("Second Field");
    const thirdField = screen.getByText("Third Field");
    const submitButton = screen.getByRole("button", { name: "Submit Info" });

    expect(title).toBeInTheDocument();
    expect(firstField).toBeInTheDocument();
    expect(secondField).toBeInTheDocument();
    expect(thirdField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
