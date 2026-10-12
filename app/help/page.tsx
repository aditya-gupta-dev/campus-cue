import { Suspense } from "react";
import { PageHeading } from "@/components/page-heading";
import { DemoNotice } from "@/components/demo-notice";
import { ScenarioSelector } from "@/features/guidance/scenario-selector";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Practice Campus Safety Scenarios | CampusCue",
  "Explore fictional campus situations and sample next-step guidance in a simulation-only awareness prototype.",
  "/help",
);
export default function HelpPage({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string | string[] }>;
}) {
  return (
    <main id="main-content" className="feature-page container">
      <PageHeading
        eyebrow="01 / SCENARIO PRACTICE"
        title="A clearer next step."
        description="Choose a fictional situation. Practice finding guidance, a relevant contact, and a location reference."
      />
      <DemoNotice />
      <Suspense fallback={<ScenarioSelector />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string | string[] }>;
}) {
  const { scenario } = await searchParams;
  return (
    <ScenarioSelector
      key={String(scenario)}
      initialScenario={Array.isArray(scenario) ? "invalid" : scenario}
    />
  );
}
