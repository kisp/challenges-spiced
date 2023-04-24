import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);

  const navigation = screen.getByRole("navigation");
  expect(navigation).toBeInTheDocument();

  const playButton = screen.getByRole("link", { name: /play/i });
  expect(playButton).toBeInTheDocument();

  const historyButton = screen.getByRole("link", { name: /history/i });
  expect(historyButton).toBeInTheDocument();
});
