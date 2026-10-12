"use client";
import { useState } from "react";
import Link from "next/link";
import {
  HeartPulse,
  ShieldCheck,
  TriangleAlert,
  ArrowRight,
  MapPin,
  Phone,
} from "lucide-react";
import { scenarios } from "@/data/scenarios";
import { contacts } from "@/data/contacts";
import { locations } from "@/data/locations";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
const icons = [HeartPulse, ShieldCheck, TriangleAlert];
export function ScenarioSelector({
  initialScenario = "medical",
}: {
  initialScenario?: string;
}) {
  const [selected, setSelected] = useState(initialScenario);
  const scenario = scenarios.find((s) => s.id === selected);
  const contact = contacts.find((c) => c.id === scenario?.contactId);
  const location = locations.find((l) => l.code === scenario?.locationCode);
  return (
    <div className="guidance-layout">
      <aside>
        <h2 className="compact-heading">Choose a fictional situation</h2>
        <p className="supporting">Explore one scenario at a time.</p>
        <ToggleGroup
          type="single"
          orientation="vertical"
          value={selected}
          onValueChange={(v) => {
            if (v) setSelected(v);
          }}
          className="scenario-options"
          aria-label="Practice scenarios"
        >
          {scenarios.map((s, i) => {
            const Icon = icons[i];
            return (
              <ToggleGroupItem key={s.id} value={s.id}>
                <Icon aria-hidden="true" />
                <span>
                  <strong>{s.title}</strong>
                  <span>{s.summary}</span>
                </span>
                <ArrowRight aria-hidden="true" />
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
        <p className="supporting small">
          These scripts are educational examples, not medical advice or
          operational emergency protocols.
        </p>
      </aside>
      <section aria-live="polite" aria-label="Scenario guidance">
        {!scenario || !contact || !location ? (
          <Empty>
            <EmptyHeader>
              <EmptyTitle>Scenario not found</EmptyTitle>
              <EmptyDescription>
                This example is unavailable. Choose a supported situation to
                continue.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button onClick={() => setSelected("medical")}>
                Explore medical concern
              </Button>
            </EmptyContent>
          </Empty>
        ) : (
          <Card className="guidance-card">
            <CardHeader>
              <Badge variant="secondary">FICTIONAL SCENARIO</Badge>
              <CardTitle>
                <h2>{scenario.title}</h2>
              </CardTitle>
              <CardDescription>{scenario.situation}</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="guidance-steps">
                {scenario.steps.map((step, i) => (
                  <li key={step.title}>
                    <span className="step-number">0{i + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
            <CardFooter className="guidance-actions">
              <div>
                <span className="eyebrow">YOUR EXAMPLE REFERENCES</span>
                <p>
                  {contact.name} · {location.code}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={`/contacts?contact=${contact.id}`}>
                    <Phone data-icon="inline-start" />
                    View sample contact
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href={`/locations?code=${location.code}`}>
                    <MapPin data-icon="inline-start" />
                    Look up location
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </section>
    </div>
  );
}
