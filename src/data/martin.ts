import type { PersonData } from "./types";

// GIF instructions:
// Replace the placeholder URLs below with real GIPHY embed/media URLs.
// Go to giphy.com and search things like:
//   "birthday office", "work meeting funny", "happy birthday dance",
//   "corporate funny", "confetti celebration", "awkward office",
//   "the office birthday", "birthday cake fail", "stock market money"
// Copy the "Media URL" / direct .gif or .webp link from GIPHY's Embed/Share panel
// and paste it as the `url` value below. Do not hotlink from disallowed sources
// and do not commit downloaded copyrighted GIF files into this repo.
const martinGifs = [
  {
    title: "Awkward office moment (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
  },
  {
    title: "Happy birthday dance (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif",
  },
  {
    title: "Corporate funny (replace with real GIPHY link)",
    url: "https://media.giphy.com/media/l0MYGb1LuZ3n7dRnO/giphy.gif",
  },
];

const martinData: PersonData = {
  name: "Martin Wambui",
  slug: "martin",
  pageTitle: "Martin Wambui: The Annual Performance Roast",
  heroSubtitle:
    "Following a serious and completely unnecessary review, we regret to inform Martin that time has passed again. Despite numerous attempts to remain the same age, and at least two attempts to turn this very audit into an investment opportunity, the evidence is overwhelming. Somewhere in the background, a data fabric diagram is still loading in his head.",
  heroBadgeText: "APPROVED FOR CAKE",
  caseSummary: {
    name: "Martin Wambui",
    charge: "Unauthorized birthday activity and unsolicited investment pitching",
    status: "Guilty, with dramatic flair and a three-slide pitch deck nobody requested",
    riskLevel: "High, may trigger speeches, awkward singing, and a sacco recruitment drive",
  },
  evidence: [
    "Frequently appears calm, which is suspicious in this economy.",
    "May have mastered the art of attending meetings without volunteering, only to pitch a chama afterward.",
    "Possesses dangerous levels of birthday eligibility, and an even more dangerous number of investment ideas.",
    "Has aged, but denies all allegations, citing “compounding returns” as a defense.",
    "Cannot see a spreadsheet without mentioning data fabric within thirty seconds.",
    "Once turned a coffee-break chat into a full explanation of why everyone should be buying land right now.",
  ],
  awards: [
    "Best Actor in a Recurring Role: Employee of the Year, In His Mind",
    "Most Likely to Say “I'm Joining Now” While Still Opening the Laptop",
    "Lifetime Achievement in Surviving Deadlines",
    "Chief Evangelist, Ministry of Data Fabric",
    "Most Likely to Pitch a Sacco During a Fire Drill",
    "Certified Legend, Pending Verification",
  ],
  timeline: [
    { label: "Born", text: "A future calendar event was created, and immediately flagged as a growth opportunity." },
    { label: "Professional era began", text: "Coffee consumption increased globally, and so did unsolicited financial advice." },
    { label: "Every year since", text: "Launches at least one new money-making idea. Some involve land. All involve a spreadsheet." },
    { label: "This year", text: "Still pretending everything is under control, and still saying “data fabric” unprompted." },
    { label: "Today", text: "Martin receives another software update called Age. No investment plan covers this one." },
  ],
  verdict:
    "The birthday tribunal finds Martin guilty of excellence, resilience, and suspiciously surviving another year without a single sacco defaulting on him. Sentence: cake, laughter, several exaggerated compliments, and a strong recommendation to stop pitching at his own party.",
  ctaText: "Activate Birthday Chaos",
  hrWarnings: [
    "Warning: Excessive birthday energy detected near the cake table.",
    "HR has approved one compliment, two claps, and zero salary discussions.",
    "This employee has exceeded the recommended yearly aging limit.",
    "Notice: Martin was seen “joining now” for the third consecutive meeting.",
    "Alert: Suspicious levels of calm detected during a fire drill.",
    "Reminder: Singing “Happy Birthday” off-key is still a fireable offense in some countries. Not here, sadly.",
    "Incident report: Martin attempted to explain data fabric to the birthday cake.",
    "Compliance notice: One unsolicited investment pitch was filed during the candle-blowing ceremony.",
  ],
  roastLevels: [
    { level: 1, label: "Polite", line: "Martin is a dependable colleague celebrating another great year." },
    { level: 2, label: "Office Safe", line: "Martin has perfected the art of looking busy in every camera angle, and profitable in every conversation." },
    { level: 3, label: "Mildly Spicy", line: "Martin's “I'm joining now” has its own entry in the team glossary, right next to “data fabric.”" },
    { level: 4, label: "HR Is Watching", line: "Martin has attended more meetings than he has retained information from, but pitched more sacco ideas than anyone in the building." },
    { level: 5, label: "Delete Browser History", line: "We found Martin's real age, his fourth investment group, and his data fabric slide deck. Legal has advised us to move on." },
  ],
  gifs: martinGifs,
  images: [
    "/assets/martin/martin-1.jpg",
    "/assets/martin/martin-2.jpg",
    "/assets/martin/martin-3.jpg",
    "/assets/martin/martin-4.jpg",
    "/assets/martin/martin-5.jpg",
    "/assets/martin/martin-6.jpg",
    "/assets/martin/martin-7.jpg",
    "/assets/martin/martin-8.jpg",
    "/assets/martin/martin-9.jpg",
    "/assets/martin/martin-10.jpg",
    "/assets/martin/martin-11.jpg",
    "/assets/martin/martin-12.jpg",
    "/assets/martin/martin-13.jpg",
    "/assets/martin/martin-14.jpg",
    "/assets/martin/martin-15.jpg",
    "/assets/martin/martin-16.jpg",
  ],
};

export default martinData;
