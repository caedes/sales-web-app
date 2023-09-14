import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Price } from "./";

describe("Price", () => {
  let languageGetter;

  beforeEach(() => {
    languageGetter = vi.spyOn(window.navigator, "language", "get");
  });

  test("with default currency displays Price", () => {
    languageGetter.mockReturnValue("fr");

    render(<Price value={42.99} />);

    expect(screen.getByText("42,99 €")).toBeInTheDocument();
  });

  test("with USD displays Price", () => {
    languageGetter.mockReturnValue("fr");

    render(<Price value={42.99} currency="USD" />);

    expect(screen.getByText("42,99 $US")).toBeInTheDocument();
  });
});
