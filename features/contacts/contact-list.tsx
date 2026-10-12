"use client";
import { useState } from "react";
import { Phone, Clock, MapPin, SearchX } from "lucide-react";
import { searchContacts } from "@/lib/search";
import { contacts } from "@/data/contacts";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@/components/ui/empty";
export function ContactList({ initialContact }: { initialContact?: string }) {
  const target = contacts.find((c) => c.id === initialContact);
  const [query, setQuery] = useState(target?.name || "");
  const [category, setCategory] = useState("All");
  const results = searchContacts(query, category);
  return (
    <div className="directory">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="contact-search">
            Search by name or role
          </FieldLabel>
          <Input
            type="search"
            id="contact-search"
            placeholder="Try ‘security’ or ‘warden’"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Field>
      </FieldGroup>
      <ToggleGroup
        type="single"
        value={category}
        onValueChange={(v) => {
          if (v) setCategory(v);
        }}
        variant="outline"
        className="category-filters"
        aria-label="Contact categories"
      >
        {["All", "Security", "Health centre", "Hostel"].map((c) => (
          <ToggleGroupItem value={c} key={c}>
            {c === "All" ? "All contacts" : c}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div aria-live="polite">
        <p className="result-count">
          {results.length} sample{" "}
          {results.length === 1 ? "contact" : "contacts"}
          <span>Fictional data · Numbers cannot place calls</span>
        </p>
        {results.length ? (
          <div className="contact-grid">
            {results.map((c) => (
              <Card key={c.id} className="contact-card">
                <CardHeader>
                  <Badge variant="secondary">{c.category}</Badge>
                  <CardTitle>
                    <h2>{c.name}</h2>
                  </CardTitle>
                  <CardDescription>{c.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="contact-number">
                    <Phone aria-hidden="true" />
                    <span>{c.number}</span>
                  </div>
                  <p className="fictional-label">
                    Fictional sample number · not callable
                  </p>
                  <div className="contact-detail">
                    <MapPin aria-hidden="true" />
                    {c.location}
                  </div>
                  {c.availability && (
                    <div className="contact-detail">
                      <Clock aria-hidden="true" />
                      {c.availability}
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <span>For awareness exercises only</span>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchX />
              </EmptyMedia>
              <EmptyTitle>No contacts found</EmptyTitle>
              <EmptyDescription>
                Try another name or role, or clear your filters to see all
                fictional contacts.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear search and filters
              </Button>
            </EmptyContent>
          </Empty>
        )}
      </div>
    </div>
  );
}
