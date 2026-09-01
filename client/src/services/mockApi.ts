import type {
  DashboardKpis,
  DemoState,
  DiscoveryRunRequest,
  DiscoveryRunResponse,
  Lead,
  WorkspaceProfile,
} from "@/types";

export const STORAGE_KEY = "atlas-loop-demo-state";

const requirement =
  "Looking for a reliable and experienced SharePoint implementation partner to support an upcoming project focused on collaboration, document management and workflow automation. Key requirements include SharePoint Online setup, custom application development, Microsoft 365 integration, migration from legacy systems, user training and post-go-live support. We are looking to move forward quickly.";

const defaultWorkspace: WorkspaceProfile = {
  company: {
    companyName: "Northstar Systems",
    website: "northstarsystems.co",
    industry: "IT Services & Consulting",
    companySize: "51–200 employees",
    location: "Austin, Texas",
    description:
      "Northstar Systems helps mid-market teams modernize collaboration, workflows, and enterprise applications.",
  },
  services: [
    {
      id: "sharepoint",
      name: "SharePoint implementation",
      description: "Plan, configure, and launch collaborative SharePoint workspaces.",
      keywords: ["SharePoint", "document management", "collaboration"],
      typicalCustomer: "Mid-market operations teams",
      minimumProjectSize: "$15k",
    },
    {
      id: "m365",
      name: "Microsoft 365 migration",
      description: "Move legacy content and identity workflows into Microsoft 365.",
      keywords: ["Microsoft 365", "migration", "legacy systems"],
      typicalCustomer: "Growing enterprise IT teams",
      minimumProjectSize: "$25k",
    },
    {
      id: "automation",
      name: "Workflow automation",
      description: "Remove repetitive work with Power Platform and custom automations.",
      keywords: ["workflow", "Power Automate", "process"],
      typicalCustomer: "Process-heavy business units",
      minimumProjectSize: "$10k",
    },
    {
      id: "apps",
      name: "Custom application development",
      description: "Design and build focused internal tools around the Microsoft stack.",
      keywords: ["custom application", "internal tools", "integration"],
      typicalCustomer: "Technology and operations leaders",
      minimumProjectSize: "$30k",
    },
  ],
  icp: {
    targetIndustries: ["Professional Services", "Healthcare", "Manufacturing"],
    targetCompanySizes: ["51–200", "201–500"],
    targetLocations: ["United States", "Canada"],
    buyerTitles: ["VP Operations", "IT Director", "CIO"],
    excludedIndustries: ["Adult entertainment", "Gambling"],
    keywords: ["SharePoint", "Microsoft 365", "workflow modernization"],
  },
  outreach: {
    language: "English",
    timezone: "Central Time (US & Canada)",
    tone: "Consultative and concise",
    qualificationQuestions: [
      "What outcome would make this project a success?",
      "What is your target go-live window?",
      "Who else should be involved in the evaluation?",
    ],
    callbackPreference: "Offer a calendar link after qualification",
  },
  completed: true,
};

const leadTemplates: Lead[] = [
  {
    id: "lead-001",
    prospectName: "Maya Patel",
    initials: "MP",
    jobTitle: "Director of Operations",
    company: "Lattice & Field Healthcare",
    industry: "Healthcare",
    location: "Chicago, Illinois",
    requirement,
    fitScore: 92,
    readinessScore: 78,
    intent: "High",
    urgency: "Immediate",
    source: "Public directories",
    discoveryDate: "Today, 09:42",
    status: "Contact Ready",
    contactAvailable: true,
    email: "maya.patel@latticefield.example",
    companySize: "201–500",
    avatarTone: "coral",
    demoData: true,
    evidence: [
      "Looking for an implementation partner",
      "Upcoming project",
      "Move forward quickly",
      "SharePoint Online",
      "Microsoft 365 integration",
    ],
    explanation:
      "This prospect demonstrates explicit partner-seeking intent, strong alignment with the client’s SharePoint and Microsoft 365 services, and near-term urgency.",
    enrichment: [
      { label: "Company", value: "Lattice & Field Healthcare", source: "Publicly available", confidence: "High" },
      { label: "Website", value: "latticefieldhealth.com", source: "Publicly available", confidence: "High" },
      { label: "Industry", value: "Healthcare services", source: "Publicly available", confidence: "High" },
      { label: "Company size", value: "201–500 employees", source: "Inferred", confidence: "Medium-high" },
      { label: "Headquarters", value: "Chicago, Illinois", source: "Publicly available", confidence: "High" },
      { label: "Prospect role", value: "Director of Operations", source: "Publicly available", confidence: "High" },
      { label: "Business email", value: "maya.patel@latticefield.example", source: "Publicly available", confidence: "Medium-high" },
      { label: "Business phone", value: "Not publicly verified", source: "Unavailable", confidence: "Low" },
      { label: "Source profile", value: "Public requirement record", source: "Publicly available", confidence: "High" },
    ],
    callOutcome: "Qualified — target a 30-minute discovery call",
    callDuration: "04:18",
    lastAction: "Recommend meeting",
  },
  {
    id: "lead-002",
    prospectName: "Owen Brooks",
    initials: "OB",
    jobTitle: "IT Director",
    company: "Redwood Freight Group",
    industry: "Logistics",
    location: "Denver, Colorado",
    requirement: "Exploring a Microsoft 365 migration partner for a multi-office operations team. Need guidance on legacy file cleanup and user adoption.",
    fitScore: 88,
    readinessScore: 71,
    intent: "High",
    urgency: "Near term",
    source: "Public company websites",
    discoveryDate: "Today, 08:16",
    status: "Reviewing",
    contactAvailable: true,
    email: "owen.brooks@redwoodfreight.example",
    phone: "+1 (303) 555-0148",
    companySize: "51–200",
    avatarTone: "blue",
    demoData: true,
    evidence: ["Exploring a migration partner", "Multi-office operations", "User adoption"],
    explanation: "A strong service match with a clear migration trigger and a defined operations context.",
    enrichment: [
      { label: "Company", value: "Redwood Freight Group", source: "Publicly available", confidence: "High" },
      { label: "Website", value: "redwoodfreight.example", source: "Publicly available", confidence: "Medium-high" },
      { label: "Industry", value: "Logistics", source: "Publicly available", confidence: "High" },
      { label: "Company size", value: "51–200 employees", source: "Inferred", confidence: "Medium" },
      { label: "Headquarters", value: "Denver, Colorado", source: "Publicly available", confidence: "High" },
      { label: "Prospect role", value: "IT Director", source: "Publicly available", confidence: "High" },
      { label: "Business email", value: "owen.brooks@redwoodfreight.example", source: "Publicly available", confidence: "Medium-high" },
      { label: "Business phone", value: "+1 (303) 555-0148", source: "Publicly available", confidence: "Medium" },
    ],
  },
  {
    id: "lead-003",
    prospectName: "Samira Khan",
    initials: "SK",
    jobTitle: "VP Operations",
    company: "Meridian Legal Collective",
    industry: "Professional Services",
    location: "Toronto, Ontario",
    requirement: "Seeking workflow automation support to reduce manual intake and improve document routing across a growing legal practice.",
    fitScore: 84,
    readinessScore: 66,
    intent: "High",
    urgency: "Near term",
    source: "Freelance platforms",
    discoveryDate: "Yesterday, 16:03",
    status: "New",
    contactAvailable: false,
    companySize: "51–200",
    avatarTone: "green",
    demoData: true,
    evidence: ["Seeking workflow automation support", "Reduce manual intake", "Growing practice"],
    explanation: "Clear automation pain with a buyer title aligned to the client’s ideal customer profile.",
    enrichment: [
      { label: "Company", value: "Meridian Legal Collective", source: "Publicly available", confidence: "High" },
      { label: "Website", value: "Not available", source: "Unavailable", confidence: "Low" },
      { label: "Industry", value: "Professional Services", source: "Inferred", confidence: "Medium-high" },
      { label: "Company size", value: "51–200 employees", source: "Inferred", confidence: "Medium" },
      { label: "Headquarters", value: "Toronto, Ontario", source: "Publicly available", confidence: "Medium-high" },
      { label: "Prospect role", value: "VP Operations", source: "Publicly available", confidence: "High" },
      { label: "Business email", value: "Unavailable", source: "Unavailable", confidence: "Low" },
    ],
  },
  {
    id: "lead-004",
    prospectName: "Eli Turner",
    initials: "ET",
    jobTitle: "CIO",
    company: "Canyon Ridge Manufacturing",
    industry: "Manufacturing",
    location: "Phoenix, Arizona",
    requirement: "Comparing options for document management and collaboration across multiple plants.",
    fitScore: 79,
    readinessScore: 59,
    intent: "Medium",
    urgency: "Exploratory",
    source: "Public directories",
    discoveryDate: "Yesterday, 11:25",
    status: "New",
    contactAvailable: true,
    email: "eli.turner@canyonridge.example",
    companySize: "201–500",
    avatarTone: "amber",
    demoData: true,
    evidence: ["Comparing options", "Document management", "Multiple plants"],
    explanation: "Promising enterprise fit, but the buying motion is still exploratory and timing is unconfirmed.",
    enrichment: [],
  },
  {
    id: "lead-005",
    prospectName: "Nora Whitfield",
    initials: "NW",
    jobTitle: "Head of IT",
    company: "Alpine Education Network",
    industry: "Education",
    location: "Boston, Massachusetts",
    requirement: "Need a partner to help consolidate legacy collaboration sites before the next academic year.",
    fitScore: 73,
    readinessScore: 54,
    intent: "Medium",
    urgency: "Near term",
    source: "CRM import",
    discoveryDate: "18 Aug 2026",
    status: "Follow-up Required",
    contactAvailable: true,
    email: "nora.whitfield@alpineed.example",
    companySize: "201–500",
    avatarTone: "violet",
    demoData: true,
    evidence: ["Consolidate legacy sites", "Before the next academic year"],
    explanation: "Timing is meaningful, but scope and decision-maker access need follow-up.",
    enrichment: [],
  },
  {
    id: "lead-006",
    prospectName: "Diego Morales",
    initials: "DM",
    jobTitle: "Operations Manager",
    company: "Harborline Utilities",
    industry: "Utilities",
    location: "Seattle, Washington",
    requirement: "Looking for ideas to digitize approvals and standard operating procedures.",
    fitScore: 61,
    readinessScore: 42,
    intent: "Medium",
    urgency: "Exploratory",
    source: "Demo social requirement feed",
    discoveryDate: "17 Aug 2026",
    status: "Disqualified",
    contactAvailable: false,
    companySize: "51–200",
    avatarTone: "slate",
    demoData: true,
    evidence: ["Looking for ideas", "Digitize approvals"],
    explanation: "Early-stage interest without a defined buying event or clear project owner.",
    enrichment: [],
  },
  {
    id: "lead-007",
    prospectName: "Priya Nair",
    initials: "PN",
    jobTitle: "Program Manager",
    company: "Brightwell Foods",
    industry: "Food & Beverage",
    location: "Atlanta, Georgia",
    requirement: "We need help standardizing team workflows across a distributed operations group.",
    fitScore: 58,
    readinessScore: 36,
    intent: "Low",
    urgency: "Exploratory",
    source: "Public company websites",
    discoveryDate: "16 Aug 2026",
    status: "New",
    contactAvailable: false,
    companySize: "51–200",
    avatarTone: "rose",
    demoData: true,
    evidence: ["Standardizing team workflows", "Distributed operations"],
    explanation: "Potential workflow fit, though the requirement is broad and lacks a near-term action.",
    enrichment: [],
  },
];

export const getDefaultState = (): DemoState => ({
  signedIn: true,
  onboardingComplete: true,
  discoveryRunCount: 1,
  discoveryResult: {
    analyzed: 20,
    relevant: 7,
    highIntent: 3,
    outreachReady: 2,
    lowFit: 13,
    completedAt: "Sep 01, 2026 · 09:42",
  },
  workspace: defaultWorkspace,
  leads: leadTemplates,
  campaignLeadIds: ["lead-001", "lead-002"],
});

export const loadDemoState = (): DemoState => {
  if (typeof window === "undefined") return getDefaultState();
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as DemoState) : getDefaultState();
  } catch {
    return getDefaultState();
  }
};

export const persistDemoState = (state: DemoState) => {
  if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const resetDemoState = (): DemoState => {
  const state = { ...getDefaultState(), signedIn: false, lastResetAt: new Date().toISOString() };
  persistDemoState(state);
  return state;
};

export const getDashboardKpis = (state: DemoState): DashboardKpis => ({
  opportunities: state.discoveryResult?.analyzed ?? 20,
  highIntent: state.leads.filter((lead) => lead.intent === "High").length,
  contactReady: state.leads.filter((lead) => lead.status === "Contact Ready" || lead.contactAvailable).length,
  qualifiedCalls: state.leads.filter((lead) => Boolean(lead.callOutcome)).length,
  meetingsRecommended: state.leads.filter((lead) => lead.lastAction === "Recommend meeting").length,
});

export const runDiscovery = async (_request: DiscoveryRunRequest): Promise<DiscoveryRunResponse> => {
  await new Promise((resolve) => window.setTimeout(resolve, 900));
  return {
    analyzed: 20,
    relevant: 7,
    highIntent: 3,
    outreachReady: 2,
    lowFit: 13,
    completedAt: "Sep 01, 2026 · 09:42",
  };
};

export const qualifyLead = async (lead: Lead): Promise<Lead> => {
  await new Promise((resolve) => window.setTimeout(resolve, 700));
  return {
    ...lead,
    status: "Qualified",
    callOutcome: "Qualified — target a 30-minute discovery call",
    callDuration: "04:18",
    lastAction: "Recommend meeting",
  };
};
