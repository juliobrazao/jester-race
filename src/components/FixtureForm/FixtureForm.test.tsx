import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
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

  it("Form submit handlering function", async () => {
    render(<FixtureForm />);
    const submitButton = screen.getByRole("button", { name: "Submit Info" });

    fireEvent.click(submitButton);

    await waitFor(() => {
      const firstFieldErrorContainer = screen
        .getByLabelText("First Field")
        .closest("div");
      const secondFieldErrorContainer = screen
        .getByLabelText("Second Field")
        .closest("div");
      const thirdFieldErrorContainer = screen
        .getByLabelText("Third Field")
        .closest("div");

      const firstFieldErrorMessage = within(
        firstFieldErrorContainer!
      ).getByText("String must contain at least 1 character(s)");
      const secondFieldErrorMessage = within(
        secondFieldErrorContainer!
      ).getByText("String must contain at least 1 character(s)");
      const thirdFieldErrorMessage = within(
        thirdFieldErrorContainer!
      ).getByText("String must contain at least 1 character(s)");

      expect(firstFieldErrorMessage).toBeInTheDocument();
      expect(secondFieldErrorMessage).toBeInTheDocument();
      expect(thirdFieldErrorMessage).toBeInTheDocument();
    });
  });

  it("Handles form submission with valid input data", async () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    render(<FixtureForm />);

    fireEvent.change(screen.getByLabelText("First Field"), {
      target: { value: "Valid input for first field" },
    });
    fireEvent.change(screen.getByLabelText("Second Field"), {
      target: { value: "Valid input for second field" },
    });
    fireEvent.change(screen.getByLabelText("Third Field"), {
      target: { value: "Valid input for third field" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Submit Info" }));

    await waitFor(() => {
      expect(alertMock).toHaveBeenCalledWith(
        JSON.stringify({
          firstField: "Valid input for first field",
          secondField: "Valid input for second field",
          thirdField: "Valid input for third field",
        })
      );
    });

    alertMock.mockRestore();
  });
});
