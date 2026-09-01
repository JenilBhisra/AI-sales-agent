export type LeadStatus =
  | "New"
  | "Reviewing"
  | "Qualified"
  | "Contact Ready"
  | "Call Scheduled"
  | "Contacted"
  | "Follow-up Required"
  | "Disqualified";

export type Intent = "High" | "Medium" | "Low";
export type Urgency = "Immediate" | "Near term" | "Exploratory";
export type Confidence = "High" | "Medium-high" | "Medium" | "Low";

export interface ServiceOffering {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  typicalCustomer: string;
  minimumProjectSize: string;
}

export interface CompanyProfile {
  companyName: string;
  website: string;
  industry: string;
  companySize: string;
  location: string;
  description: string;
}

export interface ICPProfile {
  targetIndustries: string[];
  targetCompanySizes: string[];
  targetLocations: string[];
  buyerTitles: string[];
  excludedIndustries: string[];
  keywords: string[];
}

export interface OutreachPreferences {
  language: "English" | "Hindi";
  timezone: string;
  tone: string;
  qualificationQuestions: string[];
  callbackPreference: string;
}

export interface WorkspaceProfile {
  company: CompanyProfile;
  services: ServiceOffering[];
  icp: ICPProfile;
  outreach: OutreachPreferences;
  completed: boolean;
}

export interface EnrichmentField {
  label: string;
  value: string;
  source: "Publicly available" | "Inferred" | "User-provided" | "Unavailable";
  confidence: Confidence;
}

export interface Lead {
  id: string;
  prospectName: string;
  initials: string;
  jobTitle: string;
  company: string;
  industry: string;
  location: string;
  requirement: string;
  fitScore: number;
  readinessScore: number;
  intent: Intent;
  urgency: Urgency;
  source: string;
  discoveryDate: string;
  status: LeadStatus;
  contactAvailable: boolean;
  email?: string;
  phone?: string;
  companySize: string;
  avatarTone: string;
  demoData: boolean;
  evidence: string[];
  explanation: string;
  enrichment: EnrichmentField[];
  callOutcome?: string;
  callDuration?: string;
  lastAction?: string;
}

export interface DiscoveryRunRequest {
  sources: string[];
  location: string;
  industry: string;
  keywords: string;
  minimumFitScore: number;
}

export interface DiscoveryRunResponse {
  analyzed: number;
  relevant: number;
  highIntent: number;
  outreachReady: number;
  lowFit: number;
  completedAt: string;
}

export interface DashboardKpis {
  opportunities: number;
  highIntent: number;
  contactReady: number;
  qualifiedCalls: number;
  meetingsRecommended: number;
}

export interface ToastMessage {
  id: number;
  tone: "success" | "info" | "warning" | "error";
  title: string;
  message: string;
}

export interface DemoState {
  signedIn: boolean;
  onboardingComplete: boolean;
  discoveryRunCount: number;
  discoveryResult?: DiscoveryRunResponse;
  workspace: WorkspaceProfile;
  leads: Lead[];
  campaignLeadIds: string[];
  lastResetAt?: string;
}
