import { test, expect } from "@playwright/test";

const origin = "https://campus-cue.adibuilds.shop";

test("social previews and sitemap use the public custom domain", async ({
  page,
  request,
}) => {
  await page.goto("/");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    origin,
  );
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    `${origin}/opengraph.webp`,
  );
  await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute(
    "content",
    "1200",
  );
  await expect(
    page.locator('meta[property="og:image:height"]'),
  ).toHaveAttribute("content", "630");
  await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
    "content",
    `${origin}/opengraph.webp`,
  );
  await expect(page.locator('meta[name="twitter:image:alt"]')).toHaveAttribute(
    "content",
    /CampusCue/,
  );
  const image = await request.get("/opengraph.webp");
  expect(image.ok()).toBe(true);
  expect(image.headers()["content-type"]).toBe("image/webp");
  const sitemap = await request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain(`${origin}/about`);
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain(`${origin}/sitemap.xml`);
});
