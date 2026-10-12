import { contacts } from "@/data/contacts";
import { locations } from "@/data/locations";
export const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, " ");
export function searchContacts(query: string, category = "All") {
  const term = normalize(query);
  return contacts.filter(
    (c) =>
      (category === "All" || c.category === category) &&
      normalize(`${c.name} ${c.description} ${c.category}`).includes(term),
  );
}
export function searchLocations(query: string) {
  const term = normalize(query);
  if (!term) return [];
  return locations.filter(
    (l) =>
      normalize(l.code) === term ||
      normalize(`${l.building} ${l.landmark}`).includes(term),
  );
}
