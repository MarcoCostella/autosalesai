export type DemoScenario = {
  id: string;
  label: string;
  messages: {
    role: "customer" | "assistant" | "dealer";
    text: string;
  }[];
  summary: {
    label: string;
    value: string;
  }[];
};

export const demoScenarios: DemoScenario[] = [
  {
    id: "inventory-search",
    label: "Inventory Search",
    messages: [
      {
        role: "customer",
        text: "Do you have any automatic SUVs under £15,000?"
      },
      {
        role: "assistant",
        text: "Yes. I found two suitable vehicles currently in stock: Nissan Qashqai 1.5 dCi Tekna Auto at £13,995 and Kia Sportage 1.6 CRDi GT-Line Auto at £14,750."
      },
      {
        role: "assistant",
        text: "Would you like more details on either vehicle or would you prefer to arrange a viewing?"
      },
      {
        role: "customer",
        text: "Can you tell me more about the Qashqai?"
      },
      {
        role: "assistant",
        text: "The Nissan Qashqai is a Tekna model with automatic transmission, diesel engine, satellite navigation, reversing camera and part-leather interior."
      },
      {
        role: "assistant",
        text: "Would you like me to arrange a callback from the sales team?"
      }
    ],
    summary: [
      { label: "Search Criteria", value: "Automatic SUV under £15,000" },
      { label: "Vehicle Matched", value: "Nissan Qashqai" },
      { label: "Alternative Match", value: "Kia Sportage" },
      { label: "Customer Intent", value: "Vehicle Search" },
      { label: "Status", value: "Qualified Lead" }
    ]
  },
  {
    id: "finance-enquiry",
    label: "Finance Enquiry",
    messages: [
      {
        role: "customer",
        text: "Can I get finance on the Audi A4?"
      },
      {
        role: "assistant",
        text: "Yes, finance options may be available. What monthly budget would you ideally like to stay within?"
      },
      {
        role: "customer",
        text: "Around £300 per month."
      },
      {
        role: "assistant",
        text: "Thank you. Do you have a deposit amount in mind?"
      },
      {
        role: "customer",
        text: "About £1,000."
      },
      {
        role: "assistant",
        text: "Great. May I take your name and best contact number so the sales team can discuss finance options with you?"
      }
    ],
    summary: [
      { label: "Vehicle", value: "Audi A4" },
      { label: "Finance Interest", value: "Yes" },
      { label: "Monthly Budget", value: "£300" },
      { label: "Deposit", value: "£1,000" },
      { label: "Status", value: "Finance Opportunity" }
    ]
  },
  {
    id: "part-exchange",
    label: "Part Exchange",
    messages: [
      {
        role: "customer",
        text: "I have a car I would like to part exchange."
      },
      {
        role: "assistant",
        text: "No problem. Could you provide the registration number?"
      },
      {
        role: "customer",
        text: "CV66 HVX"
      },
      {
        role: "assistant",
        text: "Thank you. Approximately how many miles has it covered?"
      },
      {
        role: "customer",
        text: "55,000 miles."
      },
      {
        role: "assistant",
        text: "How would you describe the overall condition?"
      },
      {
        role: "customer",
        text: "Good condition."
      }
    ],
    summary: [
      { label: "Part Exchange", value: "CV66 HVX" },
      { label: "Mileage", value: "55,000" },
      { label: "Condition", value: "Good" },
      { label: "Customer Intent", value: "Part Exchange" },
      { label: "Status", value: "Valuation Opportunity" }
    ]
  },
  {
    id: "lead-qualification",
    label: "Lead Qualification",
    messages: [
      {
        role: "customer",
        text: "Is the BMW 3 Series still available?"
      },
      {
        role: "assistant",
        text: "Yes, the BMW 3 Series is currently available. Would you like to arrange a viewing, discuss finance or request a callback?"
      },
      {
        role: "customer",
        text: "Can someone call me tomorrow morning?"
      },
      {
        role: "assistant",
        text: "Of course. May I take your name and best contact number?"
      },
      {
        role: "customer",
        text: "James Carter, 07700 900123."
      },
      {
        role: "assistant",
        text: "Thank you James. I will pass this to the sales team as a callback request for tomorrow morning."
      }
    ],
    summary: [
      { label: "Customer", value: "James Carter" },
      { label: "Vehicle", value: "BMW 3 Series" },
      { label: "Phone", value: "07700 900123" },
      { label: "Requested Action", value: "Callback Tomorrow Morning" },
      { label: "Status", value: "Qualified Lead" }
    ]
  }
];