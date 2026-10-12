import type { Contact } from "@/types";
export const contacts: Contact[] = [
  {
    id: "security",
    name: "Campus security desk",
    category: "Security",
    description:
      "Sample point of contact for personal safety concerns and campus accidents.",
    number: "+1 (202) 555-0101",
    availability: "24 hours · example availability",
    location: "Main gate",
  },
  {
    id: "patrol",
    name: "Evening patrol coordinator",
    category: "Security",
    description: "Example campus patrol and after-hours wayfinding contact.",
    number: "+1 (202) 555-0102",
    availability: "6 PM–6 AM · example availability",
    location: "Security office",
  },
  {
    id: "health",
    name: "Health centre reception",
    category: "Health centre",
    description: "Sample contact for a medical concern in a practice scenario.",
    number: "+1 (202) 555-0103",
    availability: "8 AM–8 PM · example availability",
    location: "Wellness building",
  },
  {
    id: "nurse",
    name: "Student health coordinator",
    category: "Health centre",
    description:
      "Example contact for student health information and awareness exercises.",
    number: "+1 (202) 555-0104",
    location: "Wellness building",
  },
  {
    id: "warden-north",
    name: "North hostel warden",
    category: "Hostel",
    description: "Sample support contact for students in the North residence.",
    number: "+1 (202) 555-0105",
    availability: "On-site evenings · example availability",
    location: "North hostel",
  },
  {
    id: "warden-south",
    name: "South hostel warden",
    category: "Hostel",
    description: "Sample support contact for students in the South residence.",
    number: "+1 (202) 555-0106",
    location: "South hostel",
  },
];
