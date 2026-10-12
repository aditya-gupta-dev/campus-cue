import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";
import About from "@/app/about/page";
test("home explains the prototype and links to all features", () => {
  render(<Home />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Find yournext step.",
  );
  expect(
    screen.getAllByRole("link", { name: /Practice a scenario/ }),
  ).toHaveLength(2);
  expect(
    screen.getByRole("link", { name: /Explore contacts/ }),
  ).toHaveAttribute("href", "/contacts");
  expect(screen.getByRole("link", { name: /Find a location/ })).toHaveAttribute(
    "href",
    "/locations",
  );
  expect(screen.getByRole("note")).toHaveTextContent("fictional");
});
test("about explains purpose and service limitations", () => {
  render(<About />);
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByText(/not connected to security/)).toBeInTheDocument();
  expect(screen.getByText(/without verified trademark/)).toBeInTheDocument();
});
