import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { LocationSearch } from "@/features/locations/location-search";
test("empty, invalid and valid location searches are handled", async () => {
  const user = userEvent.setup();
  render(<LocationSearch />);
  const input = screen.getByLabelText("Location code, building, or landmark");
  await user.click(screen.getByRole("button", { name: "Find location" }));
  expect(screen.getByRole("alert")).toHaveTextContent("Enter a location");
  expect(input).toHaveAttribute("aria-invalid", "true");
  await user.type(input, "UNKNOWN-999");
  await user.click(screen.getByRole("button", { name: "Find location" }));
  expect(screen.getByText("Location not found")).toBeInTheDocument();
  await user.clear(input);
  await user.type(input, "  lib-g-01  ");
  await user.click(screen.getByRole("button", { name: "Find location" }));
  expect(
    screen.getByRole("heading", { name: "Central library" }),
  ).toBeInTheDocument();
  expect(screen.getByText("Ground floor")).toBeInTheDocument();
  expect(screen.getByText("FICTIONAL LOCATION")).toBeInTheDocument();
});
test("building, landmark and sample buttons return supported locations", async () => {
  const user = userEvent.setup();
  render(<LocationSearch />);
  const input = screen.getByLabelText("Location code, building, or landmark");
  await user.type(input, "east staircase");
  await user.click(screen.getByRole("button", { name: "Find location" }));
  expect(
    screen.getByRole("heading", { name: "North hostel" }),
  ).toBeInTheDocument();
  await user.clear(input);
  await user.type(input, "science");
  await user.click(screen.getByRole("button", { name: "Find location" }));
  expect(
    screen.getByRole("heading", { name: "Science block" }),
  ).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "HLT-G-01" }));
  expect(
    screen.getByRole("heading", { name: "Wellness building" }),
  ).toBeInTheDocument();
});
test("a direct code link returns its location", () => {
  render(<LocationSearch initialCode="HST-1-12" />);
  expect(
    screen.getByRole("heading", { name: "North hostel" }),
  ).toBeInTheDocument();
});
