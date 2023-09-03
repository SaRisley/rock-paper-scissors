import { screen, render, fireEvent } from "@testing-library/react";
import RockPaperScissors from "../src/components/RockPaperScissors";

describe("Choice", () => {
  it("Should render with the heading `Make your choice!`", () => {
    render((<RockPaperScissors/>));
    expect(screen.getByText("Make your choice!"));
  });

  it("Should render with the text `computer deciding...` if no choice has been made yet", () => {
    render((<RockPaperScissors/>));
    expect(screen.getByText("computer deciding..."));
  });

  it("Should initially render with no emojis if no choice has been made yet", () => {
    render((<RockPaperScissors/>));
    let emojis = screen.queryByText("🪨", "📄", "✂️");
    expect(emojis).toBeNull();
  });

  it("Should render with the `🪨` emoji if the correlating button is clicked", () => {
    render(<RockPaperScissors/>);
    let button = screen.getByRole("button", { name: "Rock" });
    fireEvent.click(button);
    expect(screen.getByTestId("user-choice")).toHaveTextContent("🪨");
  });

  it("Should render with the `📄` emoji if the correlating button is clicked", () => {
    render(<RockPaperScissors/>);
    let button = screen.getByRole("button", { name: "Paper" });
    fireEvent.click(button);
    expect(screen.getByTestId("user-choice")).toHaveTextContent("📄");
  });

  it("Should render with the `✂️` emoji if the correlating button is clicked", () => {
    render(<RockPaperScissors/>);
    let button = screen.getByRole("button", { name: "Scissors" });
    fireEvent.click(button);
    expect(screen.getByTestId("user-choice")).toHaveTextContent("✂️");
  });

  it("Should render with the text `The computer chose:` if a choice has been made", () => {
    render(<RockPaperScissors/>);
    let button = screen.getByRole("button", { name: "Rock" });
    fireEvent.click(button);
    expect(screen.getByText("The computer chose:"));
  });
});
