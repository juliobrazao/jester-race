import { render } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

describe("Tests for 'Form' component", () => {
  it("Should have an error message field for 'name' field", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("error-message-name")).toBeInTheDocument();
  });

  it("Should have an error message field for 'email' field", () => {
    const { getByTestId } = render(<Form />);
    expect(getByTestId("error-message-email")).toBeInTheDocument();
  });
});
