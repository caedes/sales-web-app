import { render, screen, waitForElementToBeRemoved } from "@/test-utils";
import { describe, expect, it } from "vitest";

import { HomePage } from "./";
import { products } from "@/fixtures";

const radio = (name) => screen.getByRole("radio", { name });
const progressbar = () => screen.getByRole("progressbar");
const columnheader = (name) => screen.getByRole("columnheader", { name });

describe("HomePage", () => {
  it("renders a product list and its own search engine and filters", async () => {
    render(<HomePage />, { initialEntries: ["/"] });

    expect(
      screen.getByRole("textbox", { name: "Recherche" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("radiogroup", { name: "Condition" }),
    ).toBeInTheDocument();
    expect(radio("Toutes")).toBeInTheDocument();
    expect(radio("Neuf")).toBeInTheDocument();
    expect(radio("Occasion")).toBeInTheDocument();

    expect(progressbar()).toBeInTheDocument();

    await waitForElementToBeRemoved(progressbar);

    expect(screen.getByRole("grid")).toHaveAttribute(
      "aria-rowcount",
      String(1 + products().length),
    );

    expect(columnheader("Image produit")).toBeInTheDocument();
    expect(columnheader("Description")).toBeInTheDocument();
    expect(columnheader("Prix")).toBeInTheDocument();
    // expect(columnheader("Stock")).toBeInTheDocument();
    // expect(columnheader("État")).toBeInTheDocument();
    // expect(columnheader("Actions")).toBeInTheDocument();

    products().forEach(({ name, id }) => {
      expect(screen.getByRole("link", { name })).toHaveAttribute(
        "href",
        `/products/${id}`,
      );
    });
  });
});
