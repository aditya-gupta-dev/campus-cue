import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { pageMetadata, siteUrl } from "@/lib/metadata";
export const metadata: Metadata = {
  ...pageMetadata(
    "CampusCue — Campus Safety Awareness Prototype",
    "Explore a student-built campus safety prototype for practicing emergency first steps and communicating campus locations through simulated scenarios.",
    "/",
    true,
  ),
  metadataBase: new URL(siteUrl),
  icons: { icon: "/icon.png", apple: "/icon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
