import Greet from "../../src/components/Greet";
import { render, screen } from "@testing-library/react";

describe("group", () => {
  it("should render hello with the name when name is provided", () => {
    render(<Greet name="owen" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/owen/i);
  });

  it("should render login button when name not is provided", () => {
    render(<Greet />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});
