export type LeadFields = Record<string, string>;
export type DemoChoice = { label: string; reply: string; response: string; capture: LeadFields };
export type DemoStep = { prompt: string; choices: DemoChoice[]; showVehicles?: boolean };
export type DemoScenario = { id: string; label: string; introduction: string; initial: LeadFields; steps: DemoStep[]; outcome: string };

const viewingStep: DemoStep = {
  prompt: "Which example viewing time would suit you? These are demonstration slots, not live availability.",
  choices: [
    { label: "Saturday · 10:00", reply: "Saturday at 10:00, please.", response: "I’ve noted your preferred time. The dealership would confirm availability.", capture: { "Requested viewing": "Saturday, 10:00 · awaiting confirmation" } },
    { label: "Saturday · 14:00", reply: "Saturday at 14:00, please.", response: "I’ve noted your preferred time. The dealership would confirm availability.", capture: { "Requested viewing": "Saturday, 14:00 · awaiting confirmation" } },
  ],
};
const contactStep: DemoStep = {
  prompt: "To finish the example, choose a fictional customer profile. No personal details are needed or sent.",
  choices: [
    { label: "Use Alex · phone contact", reply: "I’m Alex Taylor. Please call me on the sample number 07700 900123.", response: "Thanks, Alex. The example enquiry is ready for the sales team to review and confirm the next step.", capture: { Customer: "Alex Taylor · fictional", "Preferred contact": "Phone · 07700 900123 (sample)", "Next action": "Sales team to confirm viewing and contact buyer" } },
    { label: "Use Sam · email contact", reply: "I’m Sam Morgan. Please email sam@example.com.", response: "Thanks, Sam. The example enquiry is ready for the sales team to review and confirm the next step.", capture: { Customer: "Sam Morgan · fictional", "Preferred contact": "Email · sam@example.com (sample)", "Next action": "Sales team to confirm viewing and contact buyer" } },
  ],
};

export const demoScenarios: DemoScenario[] = [
  {
    id: "find-a-car", label: "Find a car", introduction: "I need an automatic SUV under £15,000.",
    initial: { Requirements: "Automatic SUV", Budget: "Under £15,000" },
    steps: [
      { prompt: "Here are two matches from our sample stock. Which would you like to explore?", showVehicles: true, choices: [
        { label: "Explore the Qashqai", reply: "Tell me more about the Nissan Qashqai.", response: "The sample Qashqai is a 2019 1.5 dCi Tekna Auto, with 56,000 miles, listed at £13,995.", capture: { "Vehicle of interest": "Nissan Qashqai · £13,995" } },
        { label: "Explore the Sportage", reply: "Tell me more about the Kia Sportage.", response: "The sample Sportage is a 2018 1.6 CRDi GT-Line Auto, with 62,000 miles, listed at £14,750.", capture: { "Vehicle of interest": "Kia Sportage · £14,750" } },
      ] },
      { prompt: "When are you hoping to buy?", choices: [
        { label: "Within two weeks", reply: "I’d like to buy within the next two weeks.", response: "Understood. Let’s record a preferred viewing time so you can take a closer look.", capture: { "Buying timeframe": "Within two weeks" } },
        { label: "Within a month", reply: "I’m looking to buy within a month.", response: "Thanks. A viewing can help you decide whether this vehicle fits your needs.", capture: { "Buying timeframe": "Within a month" } },
      ] }, viewingStep, contactStep,
    ], outcome: "Viewing requested. Qualified enquiry ready for the team.",
  },
  {
    id: "part-exchange", label: "Part exchange", introduction: "Can I trade in my current car against the Qashqai?",
    initial: { "Vehicle of interest": "Nissan Qashqai · £13,995", "Part exchange": "Customer interested" },
    steps: [
      { prompt: "Yes, we can capture the details for the dealership to assess. Choose an example vehicle to continue.", choices: [
        { label: "2016 Ford Focus · 55,000 miles", reply: "It’s a 2016 Ford Focus with 55,000 miles, in good condition.", response: "I’ve captured the age, model, mileage and reported condition. The dealer would inspect the vehicle before confirming a valuation.", capture: { "Part exchange": "2016 Ford Focus · 55,000 miles", "Reported condition": "Good · subject to inspection" } },
        { label: "2017 VW Golf · 72,000 miles", reply: "It’s a 2017 VW Golf with 72,000 miles and some cosmetic wear.", response: "I’ve recorded the mileage and cosmetic wear for the sales team. A valuation would need the dealer’s assessment.", capture: { "Part exchange": "2017 VW Golf · 72,000 miles", "Reported condition": "Cosmetic wear · subject to inspection" } },
      ] },
      { prompt: "When would you like to change cars?", choices: [
        { label: "As soon as possible", reply: "As soon as possible, if the figures work for me.", response: "I’ll note that. You could bring your current car to a viewing for the team to assess.", capture: { "Buying timeframe": "As soon as possible", "Dealer note": "Assess part exchange during viewing; no valuation agreed" } },
        { label: "Within a month", reply: "Within the next month.", response: "Noted. Let’s choose a preferred viewing time and request a part-exchange assessment.", capture: { "Buying timeframe": "Within a month", "Dealer note": "Assess part exchange during viewing; no valuation agreed" } },
      ] }, viewingStep, contactStep,
    ], outcome: "Part-exchange details captured. Viewing and assessment requested.",
  },
  {
    id: "book-a-viewing", label: "Book a viewing", introduction: "Can I see the Qashqai on Saturday?",
    initial: { "Vehicle of interest": "Nissan Qashqai · £13,995", "Requested day": "Saturday" },
    steps: [
      { prompt: "Let’s prepare an example viewing request. Would you like a test drive too?", choices: [
        { label: "Viewing and test drive", reply: "A viewing and test drive, please.", response: "I’ll include a test-drive request for the dealership to confirm, along with any licence requirements.", capture: { "Visit purpose": "Viewing and test drive requested" } },
        { label: "Viewing only", reply: "Just a viewing for now, thanks.", response: "Of course. I’ll note that you’d like to look around the vehicle first.", capture: { "Visit purpose": "Viewing only" } },
      ] },
      { prompt: "If the vehicle is right for you, when would you be ready to buy?", choices: [
        { label: "This week", reply: "This week, if it’s the right car.", response: "Thanks. I’ll include that timeframe in the enquiry for your sales team.", capture: { "Buying timeframe": "This week, subject to viewing" } },
        { label: "Still exploring", reply: "I’m still exploring my options.", response: "That’s helpful to know. The team can focus on answering your questions at the viewing.", capture: { "Buying timeframe": "Exploring options" } },
      ] }, viewingStep, contactStep,
    ], outcome: "Viewing requested. Customer preferences ready for the team.",
  },
];

export const sampleVehicles = [
  { name: "Nissan Qashqai", details: "2019 · 1.5 dCi Tekna Auto · 56,000 miles", price: "£13,995", image: "/images/demo-qashqai.png" },
  { name: "Kia Sportage", details: "2018 · 1.6 CRDi GT-Line Auto · 62,000 miles", price: "£14,750", image: "/images/demo-sportage.png" },
];
