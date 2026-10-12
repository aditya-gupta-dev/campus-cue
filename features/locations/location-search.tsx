"use client";
import { useState, type FormEvent } from "react";
import {
  MapPin,
  ArrowRight,
  SearchX,
  Building2,
  Navigation,
} from "lucide-react";
import { locations } from "@/data/locations";
import { searchLocations } from "@/lib/search";
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
} from "@/components/ui/empty";
export function LocationSearch({ initialCode = "" }: { initialCode?: string }) {
  const [query, setQuery] = useState(initialCode);
  const [submitted, setSubmitted] = useState<string | null>(
    initialCode || null,
  );
  const [error, setError] = useState(false);
  const results = submitted ? searchLocations(submitted) : [];
  function lookup(value: string) {
    if (!value.trim()) {
      setError(true);
      setSubmitted(null);
      return;
    }
    setError(false);
    setSubmitted(value);
  }
  function submit(e: FormEvent) {
    e.preventDefault();
    lookup(query);
  }
  return (
    <div className="location-layout">
      <div>
        <Card className="lookup-card">
          <CardHeader>
            <Navigation aria-hidden="true" />
            <CardTitle>
              <h2>A code. A clearer location.</h2>
            </CardTitle>
            <CardDescription>
              Look up a fictional location without GPS or location permissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submit}>
              <FieldGroup>
                <Field data-invalid={error}>
                  <FieldLabel htmlFor="location-search">
                    Location code, building, or landmark
                  </FieldLabel>
                  <Input
                    id="location-search"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setError(false);
                    }}
                    placeholder="e.g. LIB-G-01 or Central library"
                    aria-invalid={error}
                    aria-describedby={
                      error ? "location-error" : "location-hint"
                    }
                  />
                  <FieldDescription id="location-hint">
                    Sample codes are case-insensitive.
                  </FieldDescription>
                  {error && (
                    <FieldError id="location-error">
                      Enter a location code, building, or landmark.
                    </FieldError>
                  )}
                </Field>
                <Button type="submit">
                  Find location
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter>
            <span>Fictional campus · No tracking</span>
          </CardFooter>
        </Card>
        <div className="example-locations">
          <h2 className="compact-heading">Try a sample location</h2>
          <div className="flex flex-wrap gap-2">
            {locations.map((l) => (
              <Button
                variant="outline"
                key={l.code}
                onClick={() => {
                  setQuery(l.code);
                  lookup(l.code);
                }}
              >
                {l.code}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <section aria-live="polite" aria-label="Location results">
        {submitted === null ? (
          <Empty className="location-empty">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <MapPin />
              </EmptyMedia>
              <EmptyTitle>Find your bearings.</EmptyTitle>
              <EmptyDescription>
                Enter a sample code or search for a building or landmark. Your
                example location will appear here.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : !results.length ? (
          <Empty className="location-empty">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchX />
              </EmptyMedia>
              <EmptyTitle>Location not found</EmptyTitle>
              <EmptyDescription>
                No fictional location matches “{submitted}”. Try LIB-G-01, North
                hostel, or main entrance.
              </EmptyDescription>
            </EmptyHeader>
          </Empty>
        ) : (
          <div className="flex flex-col gap-5">
            {results.map((l) => (
              <Card key={l.code} className="location-result">
                <CardHeader>
                  <Badge variant="secondary">FICTIONAL LOCATION</Badge>
                  <CardTitle>
                    <h2>{l.building}</h2>
                  </CardTitle>
                  <CardDescription>{l.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="location-code">
                    <MapPin aria-hidden="true" />
                    <span>{l.code}</span>
                  </div>
                  <dl className="location-facts">
                    <div>
                      <dt>Building</dt>
                      <dd>{l.building}</dd>
                    </div>
                    <div>
                      <dt>Floor</dt>
                      <dd>{l.floor}</dd>
                    </div>
                    <div>
                      <dt>Room / landmark</dt>
                      <dd>{l.landmark}</dd>
                    </div>
                  </dl>
                </CardContent>
                <CardFooter>
                  <Building2 aria-hidden="true" />
                  <span>
                    Example location reference. No live map or directions.
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
