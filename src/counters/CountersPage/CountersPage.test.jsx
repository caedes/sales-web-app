import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import { CountersPage } from "./";

describe("CountersPage", () => {
  it("renders a title and some Counter", () => {
    render(<CountersPage />);

    expect(
      screen.getByRole("heading", { name: "CountersPage", level: 1 }),
    ).toBeInTheDocument();

    expect(screen.getAllByLabelText("counter")).toHaveLength(3);
  });
});
