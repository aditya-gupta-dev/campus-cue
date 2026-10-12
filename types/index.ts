export type ContactCategory = "Security" | "Health centre" | "Hostel";
export interface Contact {
  id: string;
  name: string;
  category: ContactCategory;
  description: string;
  number: string;
  availability?: string;
  location: string;
}
export interface CampusLocation {
  code: string;
  building: string;
  floor: string;
  landmark: string;
  description: string;
}
export interface Scenario {
  id: string;
  title: string;
  summary: string;
  situation: string;
  steps: { title: string; detail: string }[];
  contactId: string;
  locationCode: string;
}
