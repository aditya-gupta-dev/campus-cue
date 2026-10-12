import { Suspense } from "react";
import { PageHeading } from "@/components/page-heading";
import { DemoNotice } from "@/components/demo-notice";
import { ContactList } from "@/features/contacts/contact-list";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Campus Contact Directory Demo | CampusCue",
  "Browse fictional campus safety contacts and explore how a clearer contact directory could support student awareness.",
  "/contacts",
);
export default function ContactsPage({
  searchParams,
}: {
  searchParams: Promise<{ contact?: string | string[] }>;
}) {
  return (
    <main id="main-content" className="feature-page container">
      <PageHeading
        eyebrow="02 / CONTACT DIRECTORY"
        title="Know who to look for."
        description="Explore the roles that support a campus. Search and filter this fictional directory to get familiar with your options."
      />
      <DemoNotice />
      <Suspense fallback={<ContactList />}>
        <Results searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

async function Results({
  searchParams,
}: {
  searchParams: Promise<{ contact?: string | string[] }>;
}) {
  const { contact } = await searchParams;
  return (
    <ContactList
      key={String(contact)}
      initialContact={typeof contact === "string" ? contact : undefined}
    />
  );
}
