import type { Metadata } from "next";
const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteUrl = deploymentHost
  ? `https://${deploymentHost}`
  : "http://localhost:3000";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
  index = false,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: { index, follow: true },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "CampusCue",
      type: "website",
      images: [
        {
          url: "/opengraph-image.webp",
          width: 1672,
          height: 941,
          type: "image/webp",
          alt: "CampusCue — Find your next step. Campus safety awareness prototype.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.webp"],
    },
  };
}
