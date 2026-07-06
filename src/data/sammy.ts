import type { PersonData } from "./types";

// GIF instructions:
// Replace the placeholder URLs below with real GIPHY embed/media URLs.
// Go to giphy.com and search things like:
//   "birthday office", "work meeting funny", "happy birthday dance",
//   "corporate funny", "confetti celebration", "awkward office",
//   "the office birthday", "birthday cake fail", "coffee addict"
// Copy the "Media URL" / direct .gif or .webp link from GIPHY's Embed/Share panel
// and paste it as the `url` value below. Do not hotlink from disallowed sources
// and do not commit downloaded copyrighted GIF files into this repo.
const sammyGifs = [
  {
    title: "Office birthday celebration (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif",
  },
  {
    title: "Suspiciously confident nod (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
  },
  {
    title: "Confetti celebration (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",
  },
];

const sammyData: PersonData = {
  name: "Sammy Chesire",
  slug: "sammy",
  pageTitle: "Sammy Chesire: The Birthday Audit",
  heroSubtitle:
    "After a thorough investigation involving absolutely no credible sources, we have confirmed that Sammy has aged again. Fueled by an estimated three litres of kahawa a day, he has once more survived a full year of side quests that were never on the original agenda. Management is concerned, the team is amused, and the cake budget is under review.",
  heroBadgeText: "AGING CONFIRMED",
  caseSummary: {
    name: "Sammy Chesire",
    charge: "Having a birthday during business hours, aggravated by excessive coffee consumption",
    status: "Guilty of aging gracefully while chasing a new side quest every quarter",
    riskLevel: "Medium, may cause cake-related productivity loss and sudden business ideas",
  },
  evidence: [
    "Seen replying “noted” with dangerous confidence, three cups of coffee deep.",
    "Possibly knows where all the important files are hidden, and also where the good coffee spot is.",
    "Has survived another year of meetings that could have been emails, and side quests that could have been left alone.",
    "Allegedly brings experience. Also allegedly has a new business idea every fortnight.",
    "Known to disappear for “just five minutes” and return with a full pitch for a new hustle.",
  ],
  awards: [
    "Most Likely to Say “Let’s Circle Back” and Mean It",
    "Certified Meeting Survivor",
    "Chief Executive Officer of Random Side Quests",
    "Lifetime Sponsor of the Office Kahawa Fund",
    "Outstanding Achievement in Looking Busy",
    "Birthday Compliance Champion",
  ],
  timeline: [
    { label: "Born", text: "The world was not ready, and neither was the nearest coffee machine." },
    { label: "Joined work", text: "Productivity became slightly more complicated, and slightly more caffeinated." },
    { label: "Every year since", text: "Announces one wild new side quest. Nobody asked. Everybody listens." },
    { label: "This year", text: "Still here. Still smiling. Still on his third cup by 10 a.m. Suspicious." },
    { label: "Today", text: "Officially promoted to Older Sammy, Senior Kahawa Consultant." },
  ],
  verdict:
    "The committee finds Sammy guilty of being appreciated, respected, and slightly too comfortable with both aging and espresso. Sentence: cake, applause, one full day of birthday harassment, and a mandatory decaf hour that will absolutely not be observed.",
  ctaText: "Release the Birthday Confetti",
  hrWarnings: [
    "Warning: Excessive birthday energy detected near the cake table.",
    "HR has approved one compliment, two claps, and zero salary discussions.",
    "This employee has exceeded the recommended yearly aging limit.",
    "Notice: Sammy has been found guilty of saying “noted” in at least four unrelated conversations today.",
    "Alert: Unusually high morale detected. Investigation ongoing.",
    "Reminder: Cake is a team resource. Do not hoard the frosting corner.",
    "Incident report: Sammy pitched a new side hustle during what was supposed to be a five-minute stand-up.",
    "Caffeine advisory: office coffee reserves dropped 40% the moment Sammy walked in.",
  ],
  roastLevels: [
    { level: 1, label: "Polite", line: "Sammy is a valued colleague who is one year more experienced today." },
    { level: 2, label: "Office Safe", line: "Sammy has survived another year of “quick questions” that took forty minutes, and coffee refills that took longer." },
    { level: 3, label: "Mildly Spicy", line: "Sammy says “let's circle back” the way other people say “hello,” usually over a fresh cup of kahawa." },
    { level: 4, label: "HR Is Watching", line: "Sammy's calendar has more recurring meetings and side-quest brainstorms than actual output, allegedly." },
    { level: 5, label: "Delete Browser History", line: "We found Sammy's real age, his fourth side hustle, and his coffee bill. Legal is reviewing all three." },
  ],
  gifs: sammyGifs,
  images: [
    "/assets/sammy/sammy-1.jpg",
    "/assets/sammy/sammy-2.jpg",
    "/assets/sammy/sammy-3.jpg",
    "/assets/sammy/sammy-4.jpg",
    "/assets/sammy/sammy-5.jpg",
    "/assets/sammy/sammy-6.jpg",
    "/assets/sammy/sammy-7.jpg",
    "/assets/sammy/sammy-8.jpg",
    "/assets/sammy/sammy-9.jpg",
    "/assets/sammy/sammy-10.jpg",
    "/assets/sammy/sammy-11.jpg",
    "/assets/sammy/sammy-12.jpg",
    "/assets/sammy/sammy-13.jpg",
  ],
};

export default sammyData;
