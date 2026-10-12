import { test, expect } from "@playwright/test";
test("home, scenario, contact and location journey", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Find yournext step.",
  );
  await page
    .locator(".hero")
    .getByRole("link", { name: "Practice a scenario" })
    .click();
  await expect(
    page.getByRole("heading", { name: "Medical concern" }),
  ).toBeVisible();
  await page.getByRole("radio", { name: /Personal safety concern/ }).click();
  await expect(
    page.getByRole("heading", { name: "Personal safety concern" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View sample contact" }).click();
  await expect(
    page.getByRole("heading", { name: "Campus security desk" }),
  ).toBeVisible();
  await expect(
    page.getByText("Fictional sample number · not callable"),
  ).toBeVisible();
  await page.goto("/help?scenario=safety");
  await page.getByRole("link", { name: "Look up location" }).click();
  await expect(
    page.getByRole("heading", { name: "North hostel" }),
  ).toBeVisible();
  await expect(page.getByRole("note")).toContainText(
    "does not report incidents",
  );
});
test("independent feature pages and invalid states", async ({ page }) => {
  await page.goto("/help?scenario=unknown");
  await expect(page.getByText("Scenario not found")).toBeVisible();
  await page.getByRole("button", { name: "Explore medical concern" }).click();
  await expect(
    page.getByRole("heading", { name: "Medical concern" }),
  ).toBeVisible();
  await page.goto("/contacts");
  await page.getByLabel("Search by name or role").fill("north");
  await page.getByRole("radio", { name: "Hostel" }).click();
  await expect(
    page.getByRole("heading", { name: "North hostel warden" }),
  ).toBeVisible();
  await page.getByRole("radio", { name: "Security" }).click();
  await expect(page.getByText("No contacts found")).toBeVisible();
  await page.getByRole("button", { name: "Clear search and filters" }).click();
  await expect(
    page.getByText("Fictional sample number · not callable"),
  ).toHaveCount(6);
  await page.goto("/locations");
  await page
    .getByRole("button", { name: "Find location", exact: true })
    .click();
  await expect(page.locator("#location-error")).toContainText(
    "Enter a location",
  );
  await page.getByLabel("Location code, building, or landmark").fill("unknown");
  await page
    .getByRole("button", { name: "Find location", exact: true })
    .click();
  await expect(page.getByText("Location not found")).toBeVisible();
  await page
    .getByLabel("Location code, building, or landmark")
    .fill("main entrance");
  await page
    .getByRole("button", { name: "Find location", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Central library" }),
  ).toBeVisible();
});
test("responsive pages, accessible navigation and metadata", async ({
  page,
  isMobile,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  for (const route of ["/", "/help", "/contacts", "/locations", "/about"]) {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    if (["/help", "/contacts", "/locations"].includes(route))
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        "noindex, follow",
      );
  }
  await expect(page.getByText(/not connected to security/)).toBeVisible();
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Contacts", exact: true })
      .click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Know who to look for.",
    );
  }
  expect(errors).toEqual([]);
});
