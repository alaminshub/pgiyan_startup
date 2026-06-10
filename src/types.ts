export interface GlobalParams {
  interests?: string;
  skills?: string;
  location?: string;
  capital?: string;
  niche?: string;
  budget?: string;
  competitors?: string;
  concept?: string;
  launchCapital?: string;
  monthlyExpenses?: string;
  companyName?: string;
  industry?: string;
  products?: string;
  vibe?: string;
  accentColor?: string;
  description?: string;
  theme?: string;
  intent?: string;
  campaignTheme?: string;
  networks?: string;
  tone?: string;
  revenue?: string;
  customers?: string;
  traffic?: string;
  conversion?: string;
  channel?: string;
  marketingSpend?: string;
  stage?: string;
  question?: string;
  businessModel?: string;
  currentTeam?: string;
  targetRole?: string;
  monthlySalary?: string;
  productName?: string;
  features?: string;
  audience?: string;
  price?: string;
  jurisdiction?: string;
  userActions?: string;
  traction?: string;
  targetFunding?: string;
  fundingType?: string;
  ideas?: string;
  businessName?: string;
}

export type ModuleCategory = "ideation" | "marketing" | "financial" | "operations" | "legal" | "funding";

export interface StartupModule {
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  icon: string; // Name of Lucide icon to load dynamically
  params: (keyof GlobalParams)[];
  paramLabels: { [key in keyof GlobalParams]?: { label: string; placeholder: string; type: "text" | "number" | "select" | "textarea"; options?: string[] } };
}

export interface SavedBlueprint {
  id: string;
  companyName: string;
  module: string;
  moduleTitle: string;
  parameters: GlobalParams;
  premiumMode: string | null;
  text: string;
  extractedSvg: string | null;
  extractedHtml: string | null;
  createdAt: string;
}

export interface MetricEntry {
  id: string;
  date: string;
  revenue: number;
  expenses: number;
  customers: number;
  conversionRate: number;
  notes?: string;
}

export interface PremiumMode {
  id: string;
  title: string;
  description: string;
  benefit: string;
  accentClass: string;
  icon: string;
}
