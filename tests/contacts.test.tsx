import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { ContactList } from "@/features/contacts/contact-list";
test("all contacts are fictional and no call links exist", () => {
  const { container } = render(<ContactList />);
  expect(
    screen.getAllByText("Fictional sample number · not callable"),
  ).toHaveLength(6);
  expect(container.querySelector('[href^="tel:"]')).toBeNull();
});
test("search and category filtering work together and clear the empty state", async () => {
  const user = userEvent.setup();
  render(<ContactList />);
  await user.click(screen.getByRole("radio", { name: "Hostel" }));
  expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(2);
  await user.type(screen.getByLabelText("Search by name or role"), "north");
  expect(
    screen.getByRole("heading", { name: "North hostel warden" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "South hostel warden" }),
  ).not.toBeInTheDocument();
  await user.click(screen.getByRole("radio", { name: "Security" }));
  expect(screen.getByText("No contacts found")).toBeInTheDocument();
  await user.click(
    screen.getByRole("button", { name: "Clear search and filters" }),
  );
  expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(6);
});
test("scenario contact links preselect the correct record", () => {
  render(<ContactList initialContact="health" />);
  expect(
    screen.getByRole("heading", { name: "Health centre reception" }),
  ).toBeInTheDocument();
  expect(screen.getAllByRole("heading", { level: 2 })).toHaveLength(1);
});
