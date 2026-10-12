import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import { ScenarioSelector } from "@/features/guidance/scenario-selector";
import { DemoNotice } from "@/components/demo-notice";
test("each scenario displays its matching script and linked references", async () => {
  const user = userEvent.setup();
  render(
    <>
      <DemoNotice />
      <ScenarioSelector />
    </>,
  );
  expect(
    screen.getByRole("heading", { name: "Medical concern" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "View sample contact" }),
  ).toHaveAttribute("href", "/contacts?contact=health");
  expect(
    screen.getByRole("link", { name: "Look up location" }),
  ).toHaveAttribute("href", "/locations?code=LIB-G-01");
  await user.click(
    screen.getByRole("radio", { name: /Personal safety concern/ }),
  );
  expect(
    screen.getByRole("heading", { name: "Personal safety concern" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Look up location" }),
  ).toHaveAttribute("href", "/locations?code=HST-1-12");
  await user.click(screen.getByRole("radio", { name: /Campus accident/ }));
  expect(
    screen.getByRole("heading", { name: "Campus accident" }),
  ).toBeInTheDocument();
  expect(
    screen.getByText(/laboratory corridor near Lab 02/),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "Look up location" }),
  ).toHaveAttribute("href", "/locations?code=SCI-G-02");
  expect(screen.getByRole("note")).toHaveTextContent("Practice only");
});
test("an invalid scenario has a recoverable fallback", async () => {
  const user = userEvent.setup();
  render(<ScenarioSelector initialScenario="missing" />);
  expect(screen.getByText("Scenario not found")).toBeInTheDocument();
  await user.click(
    screen.getByRole("button", { name: "Explore medical concern" }),
  );
  expect(
    screen.getByRole("heading", { name: "Medical concern" }),
  ).toBeInTheDocument();
});
