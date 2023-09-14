import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Counter from "./Counter";
import { expect } from "vitest";

const button = (name) => screen.getByRole("button", { name });
const counter = (name) => screen.getByRole("heading", { name, level: 6 });

describe("Counter", () => {
  test("without any prop inc/dec the counter value", async () => {
    const user = userEvent.setup();

    render(<Counter />);

    expect(counter("0")).toBeInTheDocument();
    expect(button("+1")).toBeInTheDocument();
    expect(button("-1")).toBeInTheDocument();

    await user.click(button("+1"));

    expect(counter("1")).toBeInTheDocument();

    await user.click(button("-1"));

    expect(counter("0")).toBeInTheDocument();
  });
});
