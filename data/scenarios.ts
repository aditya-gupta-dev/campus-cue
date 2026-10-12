import type { Scenario } from "@/types";
// Educational scripts only. These are not clinical instructions or reviewed emergency protocols.
export const scenarios: Scenario[] = [
  {
    id: "medical",
    title: "Medical concern",
    summary: "Someone feels unwell or may need support.",
    situation:
      "In this fictional exercise, a student feels unwell near the Central library entrance. Practice finding the relevant contact and describing the location.",
    contactId: "health",
    locationCode: "LIB-G-01",
    steps: [
      {
        title: "Understand the example situation",
        detail:
          "Identify what is happening in the fictional scenario. This exercise does not assess symptoms or provide treatment advice.",
      },
      {
        title: "Identify a relevant contact",
        detail:
          "Find the sample health centre reception entry. In a real situation, use verified local emergency or campus services.",
      },
      {
        title: "Describe the location clearly",
        detail:
          "Practice sharing the building, floor, and nearby landmark: Central library, ground floor, main entrance.",
      },
    ],
  },
  {
    id: "safety",
    title: "Personal safety concern",
    summary: "A situation feels uncomfortable or unsafe.",
    situation:
      "In this fictional exercise, a student feels unsafe near the North hostel east staircase. Practice identifying who to contact and where they are.",
    contactId: "security",
    locationCode: "HST-1-12",
    steps: [
      {
        title: "Recognize the example concern",
        detail:
          "Identify the personal safety concern described in the exercise. No live incident is being recorded.",
      },
      {
        title: "Find the sample security contact",
        detail:
          "Look up the campus security desk in the fictional directory. The sample number cannot place a call.",
      },
      {
        title: "Identify a location reference",
        detail:
          "Use North hostel, first floor, Room 112 near the east staircase as the example location description.",
      },
    ],
  },
  {
    id: "accident",
    title: "Campus accident",
    summary: "An accident or hazard needs attention.",
    situation:
      "In this fictional exercise, an accident has occurred in the Science block laboratory corridor. Practice finding a relevant contact and location reference.",
    contactId: "security",
    locationCode: "SCI-G-02",
    steps: [
      {
        title: "Identify the example incident",
        detail:
          "Read the fictional situation and identify the campus area involved. This prototype cannot submit an incident.",
      },
      {
        title: "Look up a relevant contact",
        detail:
          "Find the sample campus security desk entry. Real reporting requires verified local services outside this app.",
      },
      {
        title: "Practice describing where",
        detail:
          "Use Science block, ground floor, laboratory corridor near Lab 02 as a concise location reference.",
      },
    ],
  },
];
