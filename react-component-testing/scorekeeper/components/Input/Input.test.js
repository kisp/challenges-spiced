import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      name="nameOfGame"
      labelText="Name of game"
      placeholder="e.g. Dodelido"
      required
    />
  );

  const label = screen.getByLabelText("Name of game");
  const input = screen.getByRole("textbox");

  expect(label).toBeInTheDocument();
  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  render(<Input onChange={handleChange} />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();

  await userEvent.type(input, "1234567");

  expect(handleChange).toHaveBeenCalledTimes(7);
});
