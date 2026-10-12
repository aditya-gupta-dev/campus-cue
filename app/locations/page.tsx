import { Suspense } from "react";
import { PageHeading } from "@/components/page-heading";
import { DemoNotice } from "@/components/demo-notice";
import { LocationSearch } from "@/features/locations/location-search";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Campus Location Lookup Demo | CampusCue",
  "Test building, floor, and landmark lookup using sample campus location codes in a simulated environment.",
  "/locations",
);
export default function LocationsPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string | string[] }>;
}) {
  return (
    <main id="main-content" className="feature-page container">
      <PageHeading
        eyebrow="03 / LOCATION LOOKUP"
        title="Put a place into words."
        description="A building. A floor. A nearby landmark. Practice describing a location using our fictional campus examples."
      />
      <DemoNotice />
      <Suspense fallback={<LocationSearch />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ code?: string | string[] }>;
}) {
  const { code } = await searchParams;
  return (
    <LocationSearch
      key={String(code)}
      initialCode={typeof code === "string" ? code : undefined}
    />
  );
}
