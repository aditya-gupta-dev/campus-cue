import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, ShieldCheck } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { DemoNotice } from "@/components/demo-notice";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About CampusCue | Student Campus Safety Project",
  "Learn about the CampusCue student project, its campus safety awareness goals, prototype features, and research limitations.",
  "/about",
  true,
);
export default function AboutPage() {
  return (
    <main id="main-content" className="feature-page container">
      <PageHeading
        eyebrow="PROJECT P22 / HELP AT 2 A.M."
        title="A small project. A clearer path."
        description="CampusCue explores how simple, accessible information can support campus safety awareness. Built by students, for learning."
      />
      <DemoNotice />
      <div className="about-grid">
        <div className="about-story">
          <span className="eyebrow">WHY WE’RE BUILDING</span>
          <h2>
            Unfamiliar situations.
            <br />
            More familiar next steps.
          </h2>
          <p>
            A campus can feel familiar until you need to find a contact, name a
            building, or describe where you are. CampusCue gives students a
            space to practice those information journeys.
          </p>
          <p>
            This frontend-only educational prototype helps students, project
            evaluators, and authorized staff explore three focused flows:
            scenario guidance, a fictional contact directory, and sample
            location lookup.
          </p>
          <Separator />
          <h3>What we’re learning</h3>
          <p>
            Can a student understand the sample guidance, find a relevant role,
            and describe a location without assistance? That’s the question this
            MVP is designed to test.
          </p>
          <Button asChild>
            <Link href="/help">
              Explore a practice scenario
              <ArrowUpRight data-icon="inline-end" />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <BookOpen aria-hidden="true" />
              <CardTitle>
                <h2>A space to practice</h2>
              </CardTitle>
              <CardDescription>
                Local, predefined educational examples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                No accounts, database, external APIs, or AI-generated emergency
                decisions. Sample scripts are not reviewed medical protocols.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShieldCheck aria-hidden="true" />
              <CardTitle>
                <h2>Clear about our limits</h2>
              </CardTitle>
              <CardDescription>
                Awareness exercises, with fictional data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                CampusCue is not connected to security, medical services, an
                ambulance, or dispatch. It cannot report a real incident, place
                a call, or send help. In a real emergency, use verified local
                emergency services.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Compass aria-hidden="true" />
              <CardTitle>
                <h2>Made for exploration</h2>
              </CardTitle>
              <CardDescription>Prototype version 0.1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                No GPS permissions, tracking, notifications, or official campus
                integration. CampusCue is a working name, without verified
                trademark or domain availability.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
