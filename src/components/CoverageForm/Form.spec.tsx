import { render, screen, fireEvent } from "@testing-library/react";
import { FormProvider } from "./FormContext";
import Form from "./Form";

describe("Form component", () => {
  it("renders form fields and submits valid data", async () => {
    render(
      <FormProvider>
        <Form />
      </FormProvider>
    );

    // Assert form elements are present
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/submit/i);

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    // Submit invalid form (empty fields)
    fireEvent.click(submitButton);
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/invalid email address/i)
    ).toBeInTheDocument();

    // Fill in valid data
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });

    // Submit valid form
    fireEvent.click(submitButton);
    expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/invalid email address/i)
    ).not.toBeInTheDocument();
  });
});
