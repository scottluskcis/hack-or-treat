import type { CampusEvent } from "@/types/event";

export const events: CampusEvent[] = [
  {
    id: "haunted-hackathon",
    title: "Haunted Hackathon",
    time: "10:00–12:00",
    location: "Innovation Lab",
    category: "Workshop",
    description: "Build something delightfully spooky with your new favorite tools.",
  },
  {
    id: "pumpkin-api-lab",
    title: "Pumpkin API Lab",
    time: "12:30–13:30",
    location: "Computing Lab",
    category: "Workshop",
    description: "Give your jack-o'-lantern a little data-powered personality.",
  },
  {
    id: "costume-contest",
    title: "Campus Costume Contest",
    time: "14:00–15:00",
    location: "Student Center",
    category: "Social",
    description: "Show off a handmade costume or cheer on the campus favorites.",
  },
  {
    id: "spooky-design",
    title: "Spooky Design Studio",
    time: "15:30–16:30",
    location: "Makerspace",
    category: "Workshop",
    description: "Sketch eerie interfaces and bring your ideas to life.",
  },
  {
    id: "trick-or-treat-social",
    title: "Trick-or-Treat Social",
    time: "17:00–18:00",
    location: "Campus Quad",
    category: "Social",
    description: "Take a twilight stroll for treats, games, and good company.",
  },
  {
    id: "midnight-movie",
    title: "Not-Quite-Midnight Movie",
    time: "19:00–21:00",
    location: "Campus Theater",
    category: "Entertainment",
    description: "Settle in for a cozy, not-too-scary Halloween movie night.",
  },
];
