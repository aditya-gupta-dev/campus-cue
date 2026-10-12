import type { Metadata } from "next";
export const siteUrl = "https://campus-cue.adibuilds.shop";

const socialImage = {
  url: "/opengraph.webp",
  width: 1200,
  height: 630,
  alt: "CampusCue — Find your next step. Campus safety awareness prototype.",
};

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
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
