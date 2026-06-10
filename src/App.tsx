import React, { useState, useEffect, useRef } from "react";
import { 
  Lightbulb, 
  SearchCode, 
  DollarSign, 
  FileText, 
  Palette, 
  Globe, 
  Megaphone, 
  TrendingUp, 
  UserCheck, 
  Users, 
  ShoppingCart, 
  Scale, 
  Handshake, 
  Briefcase, 
  Target, 
  Activity, 
  ShieldAlert, 
  Cpu, 
  Sparkles, 
  Copy, 
  Download, 
  RefreshCw, 
  Plus, 
  Trash2, 
  CheckCircle, 
  ExternalLink, 
  Calendar, 
  BookOpen, 
  AlertTriangle,
  Flame,
  MousePointerClick,
  FileCode,
  Share2,
  ArrowLeft,
  LayoutGrid
} from "lucide-react";
import { STARTUP_MODULES, PREMIUM_MODES } from "./modulesData";
import { GlobalParams, SavedBlueprint, MetricEntry, StartupModule } from "./types";

export default function App() {
  // Navigation Screens: "dashboard" | "workspace" | "analytics"
  const [currentScreen, setCurrentScreen] = useState<"dashboard" | "workspace" | "analytics">("dashboard");

  // Application Language State: default "bn" as requested by the user
  const [appLanguage, setAppLanguage] = useState<"en" | "bn">("bn");

  // Translation dictionary mapping
  const t = {
    en: {
      founderPortal: "Unified Founder Portal",
      welcomeTitle: "Welcome to PGIYAN Executive Space",
      welcomeDesc: "A customized, premium suite hosting 13 advanced diagnostic business modules. Configure granular target constraints, design vectors, build search optimized layouts, and launch corporate-ready blueprints in real-time.",
      startIdeation: "Start Ideation Suite",
      launchKpi: "Launch KPI Tracker",
      systemStatus: "OS SYSTEM STATUS",
      activeModules: "Active Modules:",
      savedBlueprints: "Saved Blueprints:",
      accountingPeriods: "Accounting periods:",
      security: "Security:",
      activeEngines: "13 Core Engines",
      logged: "Logged",
      aesEnabled: "AES-256 Enabled",
      interactiveEngineSpace: "Interactive Engine Space",
      interactiveEngineDesc: "Select any action card below to open its dedicated workflow screen and work on your business.",
      allModules: "All Modules",
      ideationVision: "Ideation & Vision",
      growthBrand: "Growth & Brand",
      financialPlanning: "Financial Planning",
      operationsLaw: "Operations & Law",
      kpiLedger: "KPI Performance Ledger",
      kpiTrackerTitle: "Interactive Startup KPI & Growth Tracker",
      kpiTrackerDesc: "Plot financial statistics, analyze profit margins, log customer indices, and calculate running margins. Visualized with dynamically rendered custom real-time SVG charts.",
      openAnalytics: "Open Analytics Panel",
      strategicSavedList: "Strategic saved blueprints",
      accessSaved: "Access your historical generated outputs instantly from local secure cache.",
      backDashboard: "Back to Launchpad Dashboard",
      activeModuleLabel: "Active Module: ",
      premiumModesTitle: "PREMIUM AI MODE DIRECTIVES",
      premiumClear: "Clear",
      moduleInputsTitle: "MODULE INPUT PARAMETERS",
      composeBtn: "COMPOSE STRATEGIC BLUEPRINT",
      synthesizingText: "SYNTHESIZING PGIYAN AI STRATEGY...",
      aiStrategyTab: "AI Strategy Blueprint",
      brandSvgTab: "Brand SVG Canvas",
      webSandboxTab: "Website Sandbox Live",
      saveBlueprintBtn: "Save Blueprint",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      errorTitle: "PGIYAN Core System Fault",
      errorTip: "Check your API Key inside the AI Studio secrets configuration.",
      thinkingTitle: "PGIYAN AI Engine Thinking",
      thinkingDesc: "Formulating units economics, research matrices, trademark suggestions, and 7-part Operational growth blueprints...",
      founderLabel: "Founder",
      leadDevLabel: "Lead Developer",
      anyData: "No data available",
      launchWorkplace: "Launch Workplace",
      kpiSuiteTitle: "Startup KPI Growth Analytics & Planning Suite",
      kpiSuiteDesc: "Track structural accounting entries, map visual parameters, and monitor operational indices.",
      flushLedger: "Flush Ledgers History",
      confirmFlush: "Are you sure you want to delete all historical logs?",
      logNewPeriod: "Log New Accounting Period",
      calendarPeriod: "Calendar Period",
      grossRevenue: "Gross Revenue ($)",
      monthlyExpenses: "Monthly Expenses ($)",
      activeCustomers: "Active Customers",
      conversionRate: "Conversion Rate (%)",
      logPeriodBtn: "Log Period Metric",
      noLogEntries: "No historical log entries recorded.",
      fillParamsDesc: "Fill the periodic accounting parameters in the logger to create beautiful trend charts.",
      revenueTrendTitle: "MONTHLY GROSS REVENUE VISUALIZATION TREND",
      ledgerArchiveTitle: "OPERATIONAL LEDGER ARCHIVE",
      tblPeriodDate: "Period Date",
      tblGrossRevenue: "Gross Revenue",
      tblOverheadExpenses: "Overhead Expenses",
      tblCustomers: "Customers",
      tblConversionRate: "Conversion Rate",
      tblNetProfit: "Net Profit",
      tblDelete: "Delete",
      diagnosticTitle: "PGIYAN AUTOMATED DIAGNOSTIC METRIC",
      cumulativePre: "Cumulative tracked revenue of ",
      cumulativeMid: " generated against expenses of ",
      profitMarginText: "Total Profit Margin Score:",
      statusMessage: "Secure Connected",
      returnDashboard: "Return to Launchpad Dashboard"
    },
    bn: {
      founderPortal: "একত্রিত উদ্যোক্তা পোর্টাল",
      welcomeTitle: "পিজিয়ান এক্সিকিউটিভ স্পেসে আপনাকে স্বাগতম",
      welcomeDesc: "১৩টি অত্যন্ত শক্তিশালী ও উন্নত ব্যবসায়িক বিশ্লেষণ মডিউল নিয়ে তৈরি আমাদের বিশেষ প্রিমিয়াম প্ল্যাটফর্ম। এখানে আপনার ব্যবসার লক্ষ্য নির্ধারণ করুন, ডিজাইন কোড তৈরি করুন, সার্চ ইঞ্জিন অপ্টিমাইজড ওয়েবসাইট বানান এবং মুহূর্তেই সম্পূর্ণ কর্পোরেট গাইডলাইন তৈরি করুন।",
      startIdeation: "আইডিয়া জেনারেটর শুরু করুন",
      launchKpi: "কেপিআই ট্র্যাকার চালু করুন",
      systemStatus: "ওএস (OS) সিস্টেম স্ট্যাটাস",
      activeModules: "চলতি মডিউলসমূহ:",
      savedBlueprints: "সংরক্ষিত ব্লুপ্রিন্টসমূহ:",
      accountingPeriods: "হিসাবকাল রেকর্ড:",
      security: "নিরাপত্তা সিস্টেম:",
      activeEngines: "১৩টি মূল ইঞ্জিন",
      logged: "টি যুক্ত আছে",
      aesEnabled: "AES-256 সুরক্ষিত",
      interactiveEngineSpace: "ইন্টারেক্টিভ মডিউল গ্যালারি",
      interactiveEngineDesc: "নিচের যেকোনো মডিউল কার্ডে ক্লিক করে অবিলম্বে আপনার ব্যবসার নির্দিষ্ট কাজে চলে যান।",
      allModules: "সব মডিউল",
      ideationVision: "পরিকল্পনা ও ভিশন (Ideation)",
      growthBrand: "গ্রোথ ও ব্র্যান্ডিং (Growth)",
      financialPlanning: "আর্থিক হিসাব (Financial)",
      operationsLaw: "অপারেশনস ও আইন (Operations)",
      kpiLedger: "কেপিআই অগ্রগতি ট্র্যাকার",
      kpiTrackerTitle: "স্টার্টআপ কেপিআই এবং গ্রোথ ট্র্যাকার",
      kpiTrackerDesc: "সহজে আপনার আয়-ব্যয় হিসেব করুন, প্রফিট মার্জিন ট্র্যাক করুন, ক্রেতার সংখ্যা ও কনভার্সন রেট বিশ্লেষণ করুন। স্বয়ংক্রিয়ভাবে রিয়েল-টাইম কাস্টম এসভিজি চার্ট তৈরি হবে!",
      openAnalytics: "অ্যানালিটিক্স প্যানেল খুলুন",
      strategicSavedList: "সংরক্ষিত কৌশলগত ব্লুপ্রিন্টসমূহ",
      accessSaved: "আপনার লোকাল ক্যাশে পূর্বে তৈরি ও সংরক্ষিত করা গুরুত্বপূর্ণ ব্যবসায়িক নথিসমূহ দেখতে পারেন।",
      backDashboard: "মূল ড্যাশবোর্ডে ফিরে যান",
      activeModuleLabel: "চলতি কাজের মডিউল: ",
      premiumModesTitle: "প্রিমিয়াম এআই ইন্টেলিজেন্স মোডসমূহ",
      premiumClear: "মুছে ফেলুন",
      moduleInputsTitle: "মডিউল ইনপুট প্যারামিটারসসমূহ (বাংলা/English)",
      composeBtn: "এআই কৌশলগত ব্লুপ্রিন্ট তৈরি করুন",
      synthesizingText: "ডিজিটাল ব্লুপ্রিন্ট জেনারেট হচ্ছে...",
      aiStrategyTab: "এআই ব্যবসা ব্লুপ্রিন্ট",
      brandSvgTab: "ব্র্যান্ড লোগো এসভিজি",
      webSandboxTab: "লাইভ ওয়েবসাইট স্যান্ডবক্স",
      saveBlueprintBtn: "সংরক্ষণ করুন",
      copyBtn: "কপি করুন",
      copiedBtn: "কপি হয়েছে!",
      errorTitle: "পিজিয়ান কোর সিস্টেমে ত্রুটি",
      errorTip: "দয়া করে এআই স্টুডিওর সেটিংস থেকে আপনার API key চেক করুন।",
      thinkingTitle: "পিজিয়ান এআই মডিউল কাজ করছে...",
      thinkingDesc: "আপনার দেওয়া তথ্যের ভিত্তিতে ইউনিট ইকোনমিক্স, ঝুঁকি বিশ্লেষণ এবং কাস্টম ব্যবসায়িক গ্রোথ ব্লুপ্রিন্ট তৈরি করা হচ্ছে...",
      founderLabel: "ফাউন্ডার (উদ্যোক্তা)",
      leadDevLabel: "লিড ডেভেলপার",
      anyData: "এখনো কোনো তথ্য জেনারেট করা হয়নি",
      launchWorkplace: "কাজ শুরু করুন",
      kpiSuiteTitle: "স্টার্টআপ কেপিআই গ্রোথ অ্যানালিটিক্স ও প্ল্যানিং স্যুট",
      kpiSuiteDesc: "হিসাব-নিকাশের তথ্য ট্র্যাক করুন, ভিজ্যুয়াল মানচিত্র দেখুন এবং অপারেশনাল লাভ-লোকসান মনিটর করুন।",
      flushLedger: "রেকর্ড খতিয়ান মুছে ফেলুন",
      confirmFlush: "আপনার সমস্ত বিগত ট্র্যাকিং তথ্য কি মুছে ফেলতে চান?",
      logNewPeriod: "নতুন হিসাবকালের হিসাব যুক্ত করুন",
      calendarPeriod: "মাস ও বছর (Period)",
      grossRevenue: "মোট রাজস্ব বা আয় ($)",
      monthlyExpenses: "মাসিক খরচ ($)",
      activeCustomers: "সক্রিয় গ্রাহক সংখ্যা",
      conversionRate: "কনভার্সন রেট (%)",
      logPeriodBtn: "হিসাবকাল সংরক্ষণ করুন",
      noLogEntries: "কোনো পূর্ববর্তী হিসাব রেকর্ড পাওয়া যায়নি।",
      fillParamsDesc: "একটি সুন্দর ট্রেন্ড চার্ট ও গ্রাফ তৈরি করতে বাম পাশের খতিয়ান ফর্মটি পূরণ করুন নির্দ্বিধায়।",
      revenueTrendTitle: "মাসিক মোট রাজস্ব বা আয়ের তুলনামূলক চিত্র (গ্রাফ)",
      ledgerArchiveTitle: "অপারেশনাল হিসাব খতিয়ান আর্কাইভ",
      tblPeriodDate: "হিসাবকাল / তারিখ",
      tblGrossRevenue: "মোট রাজস্ব বা আয়",
      tblOverheadExpenses: "মোট খরচ",
      tblCustomers: "গ্রাহক সংখ্যা",
      tblConversionRate: "কনভার্সন রেট",
      tblNetProfit: "নিট লাভ/লোকসান",
      tblDelete: "মুছুন",
      diagnosticTitle: "পিজিয়ান স্বয়ংক্রিয় ডায়াগনস্টিক হিসাব পর্যালোচনা",
      cumulativePre: "আপনার ব্যবসার ট্র্যাককৃত মোট আয়ের পরিমাণ ",
      cumulativeMid: " এবং এর বিপরীতে মোট কার্যকর খতিয়ান খরচ ছিল ",
      profitMarginText: "মোট প্রফিট মার্জিন স্কোর:",
      statusMessage: "স্ট্যাটাস: নিরাপদের যুক্ত আছে",
      returnDashboard: "লঞ্চপ্যাড ড্যাশবোর্ডে ফিরে যান"
    }
  };

  const [activeModule, setActiveModule] = useState<string>("idea-generator");
  const [activePremiumMode, setActivePremiumMode] = useState<string | null>(null);
  
  // Dynamic parameters form state
  const [formParams, setFormParams] = useState<GlobalParams>({
    interests: "Wellness technology, personalized health advice",
    skills: "React development, nutrition coaching, writing",
    location: "Dhaka, Bangladesh",
    capital: "2500",
    niche: "AI-driven local travel assistant",
    budget: "100",
    competitors: "Local travel planners, TripAdvisor, social groups",
    concept: "Smart Green Courier",
    launchCapital: "8000",
    monthlyExpenses: "950",
    companyName: "PGIYAN GreenTech",
    industry: "Environmental Logistics",
    products: "Electric cargo bike delivery services for eco-friendly enterprises",
    ideas: "EcoPulse - Premium organic recycled energy apparel",
    vibe: "Minimalist Slate",
    accentColor: "Sapphire Blue on Dark Gray",
    description: "Personalized smart calendar that dynamically shifts tasks based on energy levels",
    theme: "Titanium Dark & Amber",
    intent: "Lead Capture Form",
    campaignTheme: "Unveiling eco-friendly bamboo fiber hoodies",
    networks: "Instagram, YouTube, LinkedIn",
    tone: "Inspiring and Scientific",
    revenue: "2200",
    customers: "115",
    traffic: "4500",
    conversion: "2.5",
    channel: "Organic Instagram Posts",
    marketingSpend: "150",
    stage: "Formulating early Traction",
    question: "How can I pitch corporate clients to sponsor our local health events?",
    businessModel: "Premium subscription SaaS for design agencies",
    currentTeam: "1",
    targetRole: "Senior Growth Marketer",
    monthlySalary: "1200",
    productName: "Bamboo Sleep Shield Mask",
    features: "Built-in soothing ambient speaker, certified climate positive fiber",
    audience: "Busy executives, frequent travelers",
    price: "49",
    jurisdiction: "Dhaka, Bangladesh",
    userActions: "Register accounts, list organic food items, and buy via mobile app",
    traction: "Alpha prototype launched with 80 test addresses",
    targetFunding: "35000",
    fundingType: "Angel Investment Series"
  });

  // Generated Result States
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [activeOutputTab, setActiveOutputTab] = useState<"blueprint" | "svg-preview" | "html-sandbox">("blueprint");
  
  const [gptResponse, setGptResponse] = useState<string>("");
  const [extractedSvg, setExtractedSvg] = useState<string | null>(null);
  const [extractedHtml, setExtractedHtml] = useState<string | null>(null);
  
  // Historical Blueprint Saved Stores
  const [savedBlueprints, setSavedBlueprints] = useState<SavedBlueprint[]>([]);
  const [viewingSavedId, setViewingSavedId] = useState<string | null>(null);

  // Growth Analytics Manual Inputs & Track state
  const [metricsList, setMetricsList] = useState<MetricEntry[]>([
    { id: "1", date: "Jan 2026", revenue: 1200, expenses: 800, customers: 45, conversionRate: 1.8 },
    { id: "2", date: "Feb 2026", revenue: 1850, expenses: 900, customers: 70, conversionRate: 2.1 },
    { id: "3", date: "Mar 2026", revenue: 2400, expenses: 950, customers: 110, conversionRate: 2.4 },
    { id: "4", date: "Apr 2026", revenue: 3100, expenses: 1100, customers: 145, conversionRate: 2.8 },
    { id: "5", date: "May 2026", revenue: 4500, expenses: 1400, customers: 210, conversionRate: 3.2 }
  ]);
  
  const [newMetric, setNewMetric] = useState({
    date: "",
    revenue: "",
    expenses: "",
    customers: "",
    conversionRate: ""
  });

  // UI elements handling
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);

  // Load storage configurations
  useEffect(() => {
    const historical = localStorage.getItem("pgiyan_historical_blueprints");
    if (historical) {
      try {
        setSavedBlueprints(JSON.parse(historical));
      } catch (e) {
        console.error("Failed to parse historical blueprints", e);
      }
    }

    const trackedMetrics = localStorage.getItem("pgiyan_tracker_metrics");
    if (trackedMetrics) {
      try {
        setMetricsList(JSON.parse(trackedMetrics));
      } catch (e) {
        console.error("Failed to parse local growth indices", e);
      }
    }
  }, []);

  const saveBlueprintsToLocalStorage = (list: SavedBlueprint[]) => {
    localStorage.setItem("pgiyan_historical_blueprints", JSON.stringify(list));
  };

  const handleParamChange = (key: keyof GlobalParams, value: string) => {
    setFormParams(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Main Generator API Call
  const handleGenerate = async () => {
    setIsGenerating(true);
    setApiError(null);
    setViewingSavedId(null);

    // Filter relevant parameters for the selected module
    const currentModuleObj = STARTUP_MODULES.find(m => m.id === activeModule);
    const filteredParams: any = {};
    if (currentModuleObj) {
      currentModuleObj.params.forEach(paramKey => {
        filteredParams[paramKey] = formParams[paramKey];
      });
    }

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          module: activeModule,
          params: filteredParams,
          premiumMode: activePremiumMode
        })
      });

      const data = await response.json();
      
      if (!response.ok || data.error) {
        throw new Error(data.error || `Server responded with status ${response.status}`);
      }

      setGptResponse(data.text || "");
      setExtractedSvg(data.extractedSvg || null);
      setExtractedHtml(data.extractedHtml || null);
      
      // Auto switch tabs based on output type
      if (activeModule === "branding-studio" && data.extractedSvg) {
        setActiveOutputTab("svg-preview");
      } else if (activeModule === "website-builder" && data.extractedHtml) {
        setActiveOutputTab("html-sandbox");
      } else {
        setActiveOutputTab("blueprint");
      }

    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "Failed to trigger PGIYAN-4.0 AI engine. Check connectivity or Secrets settings.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy blueprint output
  const handleCopy = () => {
    navigator.clipboard.writeText(gptResponse);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  // Add customized mockup SVG elements to export
  const downloadSvgFile = () => {
    if (!extractedSvg) return;
    const blob = new Blob([extractedSvg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pgiyan_logo_${formParams.companyName || "startup"}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadHtmlFile = () => {
    if (!extractedHtml) return;
    const blob = new Blob([extractedHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pgiyan_landing_${formParams.companyName || "index"}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Save strategic recommendation of AI startup
  const saveCurrentBlueprint = () => {
    if (!gptResponse) return;
    
    const activeModuleObj = STARTUP_MODULES.find(m => m.id === activeModule);
    const title = activeModuleObj ? activeModuleObj.title : "Business Analysis";
    
    // Retrieve business name or fallback to description
    const company = formParams.companyName || formParams.businessName || formParams.concept || "Unnamed Enterprise";
    
    const newBlueprint: SavedBlueprint = {
      id: Date.now().toString(),
      companyName: company,
      module: activeModule,
      moduleTitle: title,
      parameters: { ...formParams },
      premiumMode: activePremiumMode,
      text: gptResponse,
      extractedSvg: extractedSvg,
      extractedHtml: extractedHtml,
      createdAt: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    const updated = [newBlueprint, ...savedBlueprints];
    setSavedBlueprints(updated);
    saveBlueprintsToLocalStorage(updated);
  };

  const deleteSavedBlueprint = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = savedBlueprints.filter(b => b.id !== id);
    setSavedBlueprints(filtered);
    saveBlueprintsToLocalStorage(filtered);
    if (viewingSavedId === id) {
      setViewingSavedId(null);
      setGptResponse("");
      setExtractedSvg(null);
      setExtractedHtml(null);
    }
  };

  const loadSavedBlueprint = (blueprint: SavedBlueprint) => {
    setViewingSavedId(blueprint.id);
    setActiveModule(blueprint.module);
    setActivePremiumMode(blueprint.premiumMode);
    setFormParams(blueprint.parameters);
    setGptResponse(blueprint.text);
    setExtractedSvg(blueprint.extractedSvg);
    setExtractedHtml(blueprint.extractedHtml);
    
    if (blueprint.module === "branding-studio" && blueprint.extractedSvg) {
      setActiveOutputTab("svg-preview");
    } else if (blueprint.module === "website-builder" && blueprint.extractedHtml) {
      setActiveOutputTab("html-sandbox");
    } else {
      setActiveOutputTab("blueprint");
    }
    setCurrentScreen("workspace");
  };

  // Operational growth metric additions
  const handleAddMetric = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMetric.date || !newMetric.revenue || !newMetric.customers || !newMetric.expenses) {
      alert("Please provide the basic historical metric values.");
      return;
    }

    const value: MetricEntry = {
      id: Date.now().toString(),
      date: newMetric.date,
      revenue: parseFloat(newMetric.revenue) || 0,
      expenses: parseFloat(newMetric.expenses) || 0,
      customers: parseInt(newMetric.customers, 10) || 0,
      conversionRate: parseFloat(newMetric.conversionRate) || 1.5,
    };

    const updated = [...metricsList, value];
    setMetricsList(updated);
    localStorage.setItem("pgiyan_tracker_metrics", JSON.stringify(updated));
    setNewMetric({
      date: "",
      revenue: "",
      expenses: "",
      customers: "",
      conversionRate: ""
    });
  };

  const removeMetric = (id: string) => {
    const updated = metricsList.filter(m => m.id !== id);
    setMetricsList(updated);
    localStorage.setItem("pgiyan_tracker_metrics", JSON.stringify(updated));
  };

  // Custom JSX parsed Markdown display
  const renderFormattedMarkdown = (text: string) => {
    if (!text) return "No data available";
    
    const lines = text.split("\n");
    let inList = false;
    let listItems: string[] = [];
    let parsedElements: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    const flushList = (key: number) => {
      if (listItems.length > 0) {
        parsedElements.push(
          <ul key={`ul-${key}`} className="list-disc pl-6 mb-4 space-y-2 text-slate-300 text-sm">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: parseBoldText(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
      inList = false;
    };

    const flushTable = (key: number) => {
      if (tableRows.length > 0) {
        const cleanedRows = tableRows.filter(row => {
          return !row.every(cell => cell.trim().startsWith("-") || cell.trim() === "");
        });

        if (cleanedRows.length > 0) {
          const headers = cleanedRows[0];
          const dataRows = cleanedRows.slice(1);
          
          parsedElements.push(
            <div key={`table-container-${key}`} className="overflow-x-auto w-full my-6 rounded-xl border border-white/5 bg-[#0e0e12]">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    {headers.map((head, i) => (
                      <th key={i} className="p-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {head.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {dataRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="p-3 font-mono text-xs text-slate-300" dangerouslySetInnerHTML={{ __html: parseBoldText(cell.trim()) }} />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        tableRows = [];
      }
      inTable = false;
    };

    const parseBoldText = (input: string) => {
      return input
        .replace(/\*\*(.*?)\*\"/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/`(.*?)`/g, '<code class="bg-white/10 text-emerald-400 font-mono text-xs px-1.5 py-0.5 rounded">$1</code>');
    };

    lines.forEach((line, index) => {
      const cleanLine = line.trim();
      
      if (cleanLine.startsWith("|")) {
        if (inList) flushList(index);
        inTable = true;
        const cells = cleanLine.split("|").slice(1, -1);
        tableRows.push(cells);
        return;
      } else if (inTable && !cleanLine.startsWith("|")) {
        flushTable(index);
      }

      if (cleanLine.startsWith("* ") || cleanLine.startsWith("- ")) {
        inList = true;
        listItems.push(cleanLine.substring(2));
        return;
      } else {
        if (inList) flushList(index);
      }

      if (cleanLine.startsWith("### ")) {
        parsedElements.push(
          <h4 key={index} className="text-base font-bold text-indigo-300 tracking-tight mt-6 mb-3 flex items-center gap-2">
            <span className="w-1 h-3.5 bg-indigo-500 rounded-full"></span>
            {cleanLine.substring(4)}
          </h4>
        );
      } else if (cleanLine.startsWith("## ")) {
        const titleText = cleanLine.substring(3);
        const isSpecialResult = titleText.toLowerCase().includes("pgiyan operational growth blueprint") || titleText.toLowerCase().includes("operational blueprint");
        
        parsedElements.push(
          <h3 key={index} className={`text-lg font-bold tracking-tight mt-8 mb-4 py-1.5 px-3 rounded-lg border flex items-center justify-between ${
            isSpecialResult 
              ? "bg-amber-500/10 border-amber-500/20 text-amber-300" 
              : "bg-white/5 border-white/5 text-white"
          }`}>
            <span>{titleText}</span>
            {isSpecialResult && (
              <span className="text-[9px] uppercase tracking-widest font-mono bg-amber-500/20 text-amber-200 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                Strategic Anchor
              </span>
            )}
          </h3>
        );
      } else if (cleanLine.startsWith("# ")) {
        parsedElements.push(
          <h2 key={index} className="text-xl font-bold tracking-tight text-white mb-4 border-b border-white/10 pb-2 mt-6">
            {cleanLine.substring(2)}
          </h2>
        );
      } else if (cleanLine === "") {
        // Skip spacing
      } else {
        parsedElements.push(
          <p key={index} className="text-sm leading-relaxed text-slate-300 mb-4" dangerouslySetInnerHTML={{ __html: parseBoldText(line) }} />
        );
      }
    });

    if (inList) flushList(lines.length);
    if (inTable) flushTable(lines.length);

    return parsedElements;
  };

  // Helper dynamic Icon loader
  const renderModuleIcon = (iconName: string, className?: string) => {
    const iconMap: { [key: string]: any } = {
      Lightbulb,
      SearchCode,
      DollarSign,
      FileText,
      Palette,
      Globe,
      Megaphone,
      TrendingUp,
      UserCheck,
      Users,
      ShoppingCart,
      Scale,
      Handshake
    };
    const SelectedComponent = iconMap[iconName] || Lightbulb;
    return <SelectedComponent className={className} size={16} />;
  };

  // Helper translation mapping for all 13 Startup Modules
  const getModuleTranslation = (id: string, field: "title" | "description") => {
    const bnMap: { [key: string]: { title: string; description: string } } = {
      "idea-generator": {
        title: "ব্যবসায়িক আইডিয়া জেনারেটর",
        description: "আপনার পছন্দ, দক্ষতা এবং এলাকার ভিত্তিতে লাভজনক নতুন নতুন ব্যবসার সম্ভাব্য আইডিয়া খুঁজে বের করুন।"
      },
      "market-research": {
        title: "মার্কেট রিসার্চ ইঞ্জিন",
        description: "বাজারের চাহিদা যাচাই করুন, প্রতিযোগীদের শক্তি ও দুর্বলতা ম্যাপ করুন এবং কাস্টমার ডেমোগ্রাফি বিশ্লেষণ করুন।"
      },
      "financial-planner": {
        title: "আর্থিক পরিকল্পনাকারী ও ক্যালকুলেটর",
        description: "ব্যবসা শুরুর মোট খরচ, মাসিক বাজেট, নগদ অর্থের প্রবাহ এবং লাভজনক হওয়ার ব্রেক-ইভেন পয়েন্ট হিসেব করুন।"
      },
      "business-plan": {
        title: "ব্যবসায়িক প্ল্যান বিল্ডার",
        description: "ক্রেতা এবং বিনিয়োগকারীদের আকৃষ্ট করার মতো কার্যকরী ও এক্সপোর্ট-প্রস্তুত প্রাতিষ্ঠানিক বিজনেস প্ল্যান লিখুন।"
      },
      "branding-studio": {
        title: "ব্র্যান্ডিং স্টুডিও ও ডিজাইন জেনারেটর",
        description: "আপনার কোম্পানির জন্য সেরা রঙের প্যালেট, ব্র্যান্ডের মূল মেসেজিং এবং কাস্টম ভেক্টর লোগো ডিজাইন করুন।"
      },
      "website-builder": {
        title: "আইডিয়াল ওয়েব পেজ বিল্ডার",
        description: "সার্চ-অপ্টিমাইজড, আধুনিক সিঙ্গেল-পেজ ল্যান্ডিং পেজ বা দৃষ্টিনন্দন ওয়েবসাইট লেআউট ও স্যান্ডবক্স তৈরি করুন।"
      },
      "marketing-advisor": {
        title: "মার্কেটিং ও গ্রোথ গাইড",
        description: "সাশ্রয়ী খরচে নতুন কাস্টমার পাওয়ার কৌশল, বিজ্ঞাপনের পরিকল্পনা ও আকর্ষণীয় সোশ্যাল ক্যাম্পেইন ডিজাইন করুন।"
      },
      "competitor-intel": {
        title: "প্রতিযোগী ট্র্যাক ও বিশ্লেষণ",
        description: "প্রতিযোগীদের দুর্বলতা খুঁজে বের করুন এবং নিজের ব্যবসার মূল ভিন্নতা ও ইউনিক সেলিং পয়েন্ট (USP) ঠিক করুন।"
      },
      "startup-legal": {
        title: "আইনী পরামর্শ ও ডকুমেন্ট গাইড",
        description: "আইনী প্রয়োজনীয় কাগজপত্রের নির্দেশিকা, ব্যবসার লাইসেন্স সম্পর্কিত গাইডলাইন এবং কমপ্লায়েন্স ফাইল তৈরি করুন।"
      },
      "sales-copy": {
        title: "আকর্ষক সেলস কপি বিল্ডার",
        description: "গ্রাহকদের কেনার সিদ্ধান্তকে দ্রুত করার মতো দৃষ্টিনন্দন বিজ্ঞাপন কপি, পিচিং টেক্সট ও ইমেইল ফরম্যাট ডিজাইন করুন।"
      },
      "hiring-planner": {
        title: "টিম নিয়োগ ও হায়ার মেকার",
        description: "কাজের বিবরণী (Job Description), পজিশনের বেতন বাজেট এবং যোগ্য টিম সদস্য কাজের জন্য হায়ার করার রূপরেখা সাজান।"
      },
      "funding-pitch": {
        title: "বিনিয়োগ পিচ ডেক মেকার",
        description: "সহজে যেকোনো কাস্টমার বা ফাইন্যান্সিয়াল ইনভেস্টরকে আকৃষ্ট করার মতো পিচিং কাঠামো এবং ফান্ডিং ডিজাইন করুন।"
      },
      "elevator-pitch": {
        title: "সংক্ষিপ্ত এলিভেটর পিচ ক্রিয়েটর",
        description: "নিজে কি কাজ করছেন তা অতি সংক্ষেপে মাত্র ৩০ সেকেন্ড থেকে ১ মিনিটের মধ্যে আকর্ষণীয়ভাবে তুলে ধরার ডেক লিখুন।"
      }
    };

    const original = STARTUP_MODULES.find(m => m.id === id);
    if (!original) return "";

    if (appLanguage === "bn" && bnMap[id]) {
      return bnMap[id][field];
    }
    return original[field];
  };

  // Helper to load current workspace module
  const currentModuleObj = STARTUP_MODULES.find(m => m.id === activeModule) || STARTUP_MODULES[0];

  return (
    <div id="pgiyan-app" className="w-full min-h-screen bg-[#0A0A0C] text-slate-300 font-sans flex flex-col antialiased">
      
      {/* Top Banner Header */}
      <header className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#0D0D10] sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setCurrentScreen("dashboard")} 
            className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-lg tracking-wider shadow-md border border-indigo-400/20"
            title="Go to Dashboard"
          >
            P
          </button>
          <div className="flex flex-col">
            <h1 className="text-md font-bold tracking-tight text-white flex items-center gap-1.5">
              PGIYAN <span className="text-indigo-400 font-semibold text-xs border border-indigo-500/30 px-1.5 py-0.5 rounded-md bg-indigo-500/10">Startup OS 4.0</span>
            </h1>
            <p className="text-[10px] text-slate-400">{appLanguage === "en" ? "AI Personal Business Builder" : "এআই স্টার্টআপ ওএস ও বিজনেস মেকার"}</p>
          </div>
        </div>

        {/* Dynamic Interactive Language Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex bg-[#121217] p-0.5 rounded-lg border border-white/5 text-[10px] items-center shadow-inner">
            <button
              onClick={() => setAppLanguage("bn")}
              className={`px-2 py-1 rounded-md font-extrabold transition-all ${
                appLanguage === "bn" 
                  ? "bg-indigo-600 text-white shadow" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              বাংলা
            </button>
            <button
              onClick={() => setAppLanguage("en")}
              className={`px-2 py-1 rounded-md font-extrabold transition-all ${
                appLanguage === "en" 
                  ? "bg-indigo-600 text-white shadow" 
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Dynamic Founders & Status panel */}
        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <p className="text-[9px] uppercase tracking-widest text-[#fbbf24] font-semibold">Founder</p>
            <p className="text-xs text-white">Turizita Hasan Kanta</p>
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <div className="text-right text-xs">
            <p className="text-[9px] uppercase tracking-widest text-slate-500">Lead Developer</p>
            <p className="text-white">Abdullah Al Mamun (Al Amin)</p>
          </div>
          <div className="h-6 w-px bg-white/10"></div>
          <button
            onClick={() => setCurrentScreen("analytics")}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <TrendingUp size={13} />
            <span>KPI Tracker</span>
          </button>
        </div>
      </header>

      {/* RENDER VIEW: SCREEN 1 - LAUNCHPAD DASHBOARD */}
      {currentScreen === "dashboard" && (
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto max-w-7xl mx-auto w-full flex flex-col gap-8">
          
          {/* Welcome and Hero Section */}
          <section className="bg-gradient-to-r from-indigo-950/40 to-slate-900/30 border border-white/5 p-6 md:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                {t[appLanguage].founderPortal}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {t[appLanguage].welcomeTitle}
              </h2>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {t[appLanguage].welcomeDesc}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveModule("idea-generator");
                    setCurrentScreen("workspace");
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
                >
                  <Sparkles size={13} />
                  {t[appLanguage].startIdeation}
                </button>
                <button
                  onClick={() => setCurrentScreen("analytics")}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <TrendingUp size={13} className="text-emerald-400" />
                  {t[appLanguage].launchKpi}
                </button>
              </div>
            </div>
            
            <div className="bg-[#0D0D12] border border-white/5 p-4 rounded-2xl w-full md:w-80 shrink-0 space-y-3">
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider flex items-center justify-between">
                <span>{t[appLanguage].systemStatus}</span>
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t[appLanguage].activeModules}</span>
                  <span className="text-white font-mono">{t[appLanguage].activeEngines}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t[appLanguage].savedBlueprints}</span>
                  <span className="text-indigo-400 font-mono font-bold">{savedBlueprints.length} {appLanguage === "bn" ? "টি" : "Units"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t[appLanguage].accountingPeriods}</span>
                  <span className="text-emerald-400 font-mono font-bold">{metricsList.length} {appLanguage === "bn" ? "টি" : "Periods"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t[appLanguage].security}</span>
                  <span className="text-slate-400 font-mono">{t[appLanguage].aesEnabled}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Module Launchpad Grid */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                  <LayoutGrid size={18} className="text-indigo-400" />
                  <span>{t[appLanguage].interactiveEngineSpace}</span>
                </h3>
                <p className="text-xs text-slate-400">{t[appLanguage].interactiveEngineDesc}</p>
              </div>

              {/* Filtering Controls */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: "all", label: t[appLanguage].allModules },
                  { id: "ideation", label: t[appLanguage].ideationVision },
                  { id: "marketing", label: t[appLanguage].growthBrand },
                  { id: "financial", label: t[appLanguage].financialPlanning },
                  { id: "operations", label: t[appLanguage].operationsLaw }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all ${
                      filterCategory === cat.id 
                        ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30" 
                        : "bg-white/[0.02] border border-white/5 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Description Console previewing when hovering any icon */}
            <div className="min-h-[44px] px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#0D0D12]/90 to-slate-900/40 border border-white/5 flex items-center gap-3 transition-colors text-xs text-slate-300">
              <span className="bg-amber-500/10 text-amber-400 px-2.5 py-0.5 rounded font-mono font-bold text-[9px] uppercase tracking-wider shrink-0 border border-amber-500/15">
                {appLanguage === "bn" ? "মডিউল গাইড" : "Module Info"}
              </span>
              <p className="line-clamp-1 text-slate-300">
                {hoveredModule ? (
                  <strong className="text-white">
                    {getModuleTranslation(hoveredModule, "title")}: <span className="text-slate-400 font-normal">{getModuleTranslation(hoveredModule, "description")}</span>
                  </strong>
                ) : (
                  <span>{appLanguage === "bn" ? "নিচের যেকোনো মডিউল আইকনে মাউস ধরুন তার বিবরণ দেখতে, অথবা সরাসরি ক্লিক করে কাজ শুরু করুন।" : "Hover over any module icon to read details, or click on it to begin."}</span>
                )}
              </p>
            </div>

            {/* Compact grid display as small tiles with icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3">
              {STARTUP_MODULES.filter(m => {
                if (filterCategory === "all") return true;
                if (filterCategory === "operations") {
                  return m.category === "operations" || m.category === "legal" || m.category === "funding";
                }
                return m.category === filterCategory;
              }).map((item) => {
                // Determine group color tone accents
                let categoryLabel = appLanguage === "bn" ? "আইডিয়া" : "Ideation";
                let accentBorderClass = "hover:border-indigo-500/40 hover:shadow-indigo-500/5";
                let iconWrapperClass = "bg-indigo-500/10 text-indigo-400 ring-indigo-500/5";
                
                if (item.category === "marketing") {
                  categoryLabel = appLanguage === "bn" ? "ব্র্যান্ড" : "Growth";
                  accentBorderClass = "hover:border-rose-500/40 hover:shadow-rose-500/5";
                  iconWrapperClass = "bg-rose-500/10 text-rose-400 ring-rose-500/5";
                } else if (item.category === "financial") {
                  categoryLabel = appLanguage === "bn" ? "অর্থ" : "Finance";
                  accentBorderClass = "hover:border-emerald-500/40 hover:shadow-emerald-500/5";
                  iconWrapperClass = "bg-emerald-500/10 text-emerald-400 ring-emerald-500/5";
                } else if (item.category === "operations" || item.category === "legal" || item.category === "funding") {
                  categoryLabel = appLanguage === "bn" ? "অপারেশন" : "Ops";
                  accentBorderClass = "hover:border-amber-500/40 hover:shadow-amber-500/5";
                  iconWrapperClass = "bg-amber-500/10 text-amber-400 ring-amber-500/5";
                }

                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveModule(item.id);
                      setViewingSavedId(null);
                      setCurrentScreen("workspace");
                    }}
                    onMouseEnter={() => setHoveredModule(item.id)}
                    onMouseLeave={() => setHoveredModule(null)}
                    className={`bg-[#0d0d12]/60 border border-white/5 rounded-xl p-3 cursor-pointer shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center justify-center text-center gap-2 h-32 relative overflow-hidden ${accentBorderClass}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

                    <div className={`p-2 rounded-full transition-all duration-300 group-hover:scale-110 ring-4 ${iconWrapperClass}`}>
                      {renderModuleIcon(item.icon, "w-4.5 h-4.5")}
                    </div>
                    
                    <div className="space-y-0.5">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 block">
                        {categoryLabel}
                      </span>
                      <h4 className="text-[11px] font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug line-clamp-2 max-w-[124px]">
                        {getModuleTranslation(item.id, "title")}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Analytics & Metrics Tracker Summary Strip on Dashboard */}
          <section className="bg-[#0D0D12] border border-white/5 rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#fbbf24] bg-amber-500/10 px-2 py-0.5 rounded">
                KPI Performance Ledger
              </span>
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                <TrendingUp size={16} className="text-emerald-400" />
                <span>{t[appLanguage].kpiTrackerTitle}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                {t[appLanguage].kpiTrackerDesc}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex justify-end">
              <button
                onClick={() => setCurrentScreen("analytics")}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
              >
                {t[appLanguage].openAnalytics}
                <ExternalLink size={13} />
              </button>
            </div>
          </section>

          {/* Historical Saved Blueprints Grid on Dashboard */}
          {savedBlueprints.length > 0 && (
            <section className="space-y-4">
              <div className="border-b border-white/5 pb-2">
                <h3 className="text-md font-bold text-white tracking-tight flex items-center gap-2">
                  <FileCode size={16} className="text-[#fbbf24]" />
                  <span>{t[appLanguage].strategicSavedList} ({savedBlueprints.length})</span>
                </h3>
                <p className="text-xs text-slate-400">{t[appLanguage].accessSaved}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedBlueprints.map((save) => (
                  <div
                    key={save.id}
                    onClick={() => loadSavedBlueprint(save)}
                    className="p-4 rounded-xl border border-white/5 bg-[#0D0D12]/40 hover:bg-white/[0.03] hover:border-[#fbbf24]/20 cursor-pointer group flex flex-col justify-between transition-all"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <div className="truncate min-w-0">
                          <h4 className="text-xs font-semibold text-white truncate">{save.companyName}</h4>
                          <p className="text-[10px] text-indigo-400 mt-0.5">{save.moduleTitle}</p>
                        </div>
                        <button
                          onClick={(e) => deleteSavedBlueprint(save.id, e)}
                          className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-red-400 p-1 rounded hover:bg-white/5 transition-opacity"
                          title="Delete saved item"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                        {save.text?.substring(0, 100)}...
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[8.5px] text-slate-500 font-mono mt-4 pt-2 border-t border-white/5">
                      <span>{save.createdAt}</span>
                      <span className="text-indigo-400 group-hover:underline">Open Blueprint →</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      )}

      {/* RENDER VIEW: SCREEN 2 - DEDICATED WORKSPACE PAGE */}
      {currentScreen === "workspace" && (
        <main className="flex-1 flex flex-col overflow-hidden bg-[#0a0a0d]">
          
          {/* Workspace Subheading Nav bar */}
          <div className="h-14 border-b border-white/5 bg-[#101015]/80 flex items-center justify-between px-6 shrink-0">
            <button
              onClick={() => setCurrentScreen("dashboard")}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/5"
            >
              <ArrowLeft size={14} />
              <span>{t[appLanguage].backDashboard}</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono tracking-widest text-[#fbbf24] uppercase bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                {t[appLanguage].activeModuleLabel}
              </span>
              <p className="text-xs text-white font-medium">{getModuleTranslation(activeModule, "title")}</p>
            </div>
          </div>

          {/* Interactive Workspace Area */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Input Configurator (Left Pane) */}
            <div className="w-full lg:w-[420px] border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0f0f15]/55 p-5 md:p-6 overflow-y-auto shrink-0 flex flex-col gap-6">
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-indigo-600/15 text-indigo-400">
                    {renderModuleIcon(currentModuleObj.icon, "w-4 h-4")}
                  </div>
                  <h2 className="text-sm font-bold text-white tracking-tight">{getModuleTranslation(activeModule, "title")}</h2>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{getModuleTranslation(activeModule, "description")}</p>
              </div>

              {/* Premium AI Modes Selection Panel */}
              <div className="p-4 rounded-xl bg-indigo-950/10 border border-indigo-500/10 space-y-2.5">
                <p className="text-[9.5px] uppercase font-bold text-slate-400 tracking-widest flex items-center justify-between">
                  <span>{t[appLanguage].premiumModesTitle}</span>
                  {activePremiumMode && (
                    <button 
                      onClick={() => setActivePremiumMode(null)}
                      className="text-[9px] text-red-400 hover:underline uppercase transition-all"
                    >
                      {t[appLanguage].premiumClear}
                    </button>
                  )}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {PREMIUM_MODES.map((mode) => {
                    const isSelected = activePremiumMode === mode.id;
                    return (
                      <button
                        key={mode.id}
                        onClick={() => {
                          setActivePremiumMode(isSelected ? null : mode.id);
                        }}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          isSelected 
                            ? "bg-indigo-900/10 border-indigo-400 text-white" 
                            : "bg-white/[0.01] border-white/5 hover:bg-white/5 text-slate-400"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`${isSelected ? 'text-indigo-400' : 'text-slate-500'}`}>
                            {mode.id === "ai-ceo" && <Briefcase size={11} />}
                            {mode.id === "ai-marketing" && <Target size={11} />}
                            {mode.id === "ai-financial" && <Activity size={11} />}
                            {mode.id === "ai-sales" && <ShieldAlert size={11} />}
                          </span>
                          <span className="text-[10px] font-bold tracking-tight">{mode.title}</span>
                        </div>
                        <p className="text-[8.5px] leading-relaxed line-clamp-2 opacity-80">{mode.description}</p>
                        <p className="text-[7.5px] mt-0.5 font-mono text-indigo-300 italic">{mode.benefit}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Module Input Parameters Form */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5 pb-1">
                  {t[appLanguage].moduleInputsTitle}
                </p>

                {currentModuleObj.params.map((paramKey) => {
                  const paramMeta = currentModuleObj.paramLabels[paramKey];
                  if (!paramMeta) return null;

                  return (
                    <div key={paramKey} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                        <span>{paramMeta.label}</span>
                        <span className="text-[9px] bg-white/5 font-mono text-slate-500 px-1.5 py-0.5 rounded">
                          {paramKey}
                        </span>
                      </label>

                      {paramMeta.type === "select" ? (
                        <select
                          className="w-full h-10 px-3 py-1 bg-[#0D0D10] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          value={formParams[paramKey] || ""}
                          onChange={(e) => handleParamChange(paramKey, e.target.value)}
                        >
                          <option value="">-- Choose Option --</option>
                          {paramMeta.options?.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : paramMeta.type === "textarea" ? (
                        <textarea
                          rows={4}
                          className="w-full p-3 bg-[#0D0D10] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-600 block resize-none font-sans"
                          placeholder={paramMeta.placeholder}
                          value={formParams[paramKey] || ""}
                          onChange={(e) => handleParamChange(paramKey, e.target.value)}
                        />
                      ) : (
                        <input
                          type={paramMeta.type === "number" ? "number" : "text"}
                          className="w-full h-10 px-3 bg-[#0D0D10] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 placeholder-slate-600"
                          placeholder={paramMeta.placeholder}
                          value={formParams[paramKey] || ""}
                          onChange={(e) => handleParamChange(paramKey, e.target.value)}
                        />
                      )}
                    </div>
                  );
                })}

                {/* Synthesis Core Button */}
                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className={`w-full mt-2 h-11 rounded-xl font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 ${
                    isGenerating 
                      ? "bg-white/10 border border-white/10 text-slate-400 cursor-not-allowed" 
                      : "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/20 active:translate-y-px"
                  }`}
                >
                  <Sparkles size={13} className={isGenerating ? "animate-spin" : ""} />
                  {isGenerating ? t[appLanguage].synthesizingText : t[appLanguage].composeBtn}
                </button>
              </div>

            </div>

            {/* AI Strategic Intelligence Output (Right Pane) */}
            <div className="flex-1 p-5 md:p-6 overflow-y-auto flex flex-col gap-4">
              
              {/* Output Tab Control Headers */}
              <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 p-2 rounded-xl shrink-0">
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActiveOutputTab("blueprint")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all uppercase ${
                      activeOutputTab === "blueprint" 
                        ? "bg-white/10 text-white border border-white/5" 
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t[appLanguage].aiStrategyTab}
                  </button>

                  {/* Show vector SVG tab ONLY if we have Branding Studio response or extracted logo */}
                  {extractedSvg && (
                    <button
                      onClick={() => setActiveOutputTab("svg-preview")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all uppercase flex items-center gap-1.5 ${
                        activeOutputTab === "svg-preview" 
                          ? "bg-amber-500/15 text-amber-300 border border-amber-500/30" 
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Palette size={12} />
                      {t[appLanguage].brandSvgTab}
                    </button>
                  )}

                  {/* Show website preview tab ONLY if we have HTML response */}
                  {extractedHtml && (
                    <button
                      onClick={() => setActiveOutputTab("html-sandbox")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-all uppercase flex items-center gap-1.5 ${
                        activeOutputTab === "html-sandbox" 
                          ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30" 
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <Globe size={12} />
                      {t[appLanguage].webSandboxTab}
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {gptResponse && (
                    <>
                      <button
                        onClick={saveCurrentBlueprint}
                        className="py-1 px-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all text-xs flex items-center gap-1"
                        title="Save to local database archives"
                      >
                        <Plus size={14} />
                        <span className="hidden sm:inline">{t[appLanguage].saveBlueprintBtn}</span>
                      </button>

                      <button
                        onClick={handleCopy}
                        className="py-1 px-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all text-xs flex items-center gap-1"
                        title="Copy raw markdown content"
                      >
                        <Copy size={14} />
                        <span>{copiedText ? t[appLanguage].copiedBtn : t[appLanguage].copyBtn}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Dynamic Panel Canvas */}
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 md:p-6 flex-1 flex flex-col justify-between min-h-[400px]">
                
                {apiError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-500/20 text-red-100 flex items-start gap-3">
                    <AlertTriangle className="text-red-400 shrink-0 mt-0.5" size={16} />
                    <div>
                      <p className="text-xs font-bold font-mono">{t[appLanguage].errorTitle}</p>
                      <p className="text-xs text-red-200/80 mt-1">{apiError}</p>
                      <p className="text-[10px] text-red-300/60 mt-2 font-mono">{t[appLanguage].errorTip}</p>
                    </div>
                  </div>
                )}

                {/* Loading Framework */}
                {isGenerating ? (
                  <div className="flex-1 flex flex-col items-center justify-center py-20 text-center">
                    <div className="relative w-16 h-16 mb-4">
                      <div className="absolute inset-0 rounded-full border-t border-b border-indigo-500 animate-spin"></div>
                      <div className="absolute inset-2 rounded-full border-l border-r border-[#fbbf24] animate-spin animation-delay-200"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                        <Cpu size={18} className="animate-pulse" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest animate-pulse">
                      {t[appLanguage].thinkingTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 max-w-sm">
                      {t[appLanguage].thinkingDesc}
                    </p>
                  </div>
                ) : gptResponse ? (
                  <div className="flex-1 flex flex-col justify-between">
                    
                    {/* CASE A: Print Strategic Markdown */}
                    {activeOutputTab === "blueprint" && (
                      <div className="flex-1 font-sans text-slate-200 prose prose-invert overflow-y-auto max-h-[600px] pr-2">
                        {renderFormattedMarkdown(gptResponse)}
                      </div>
                    )}

                    {/* CASE B: SVG Brand Concept Preview Mockups */}
                    {activeOutputTab === "svg-preview" && extractedSvg && (
                      <div className="flex-1 flex flex-col gap-6">
                        
                        <div className="p-8 rounded-xl bg-gradient-to-lg from-[#070709] to-[#121217] border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group">
                          <p className="absolute top-2.5 left-3 text-[9px] font-mono uppercase tracking-widest text-slate-500">
                            RENDERED VECTOR CANVAS
                          </p>
                          <div 
                            className="w-full max-w-xs h-40 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:max-h-full" 
                            dangerouslySetInnerHTML={{ __html: extractedSvg }} 
                          />
                          <button 
                            onClick={downloadSvgFile}
                            className="mt-4 px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                          >
                            <Download size={12} />
                            Download Solid Vector (.svg)
                          </button>
                        </div>

                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                            REAL-WORLD APPLICATION MOCKUPS
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Premium Business Card */}
                            <div className="bg-[#1c1d24] p-5 rounded-xl border border-white/5 aspect-[1.75] flex flex-col justify-between relative shadow-lg">
                              <span className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#fbbf24] rounded-full"></span>
                              <div 
                                className="w-1/2 h-10 flex items-start [&>svg]:w-full [&>svg]:h-auto"
                                dangerouslySetInnerHTML={{ __html: extractedSvg }}
                              />
                              <div className="text-[9px] text-slate-400 font-mono">
                                <p className="font-bold text-white text-xs">Turizita Hasan Kanta</p>
                                <p className="text-indigo-400">Chief Executive Founder</p>
                                <p className="mt-2 opacity-60">contact@pgiyan.eco • Dhaka HQ</p>
                              </div>
                            </div>

                            {/* Mobile Launcher Dashboard mockup */}
                            <div className="bg-[#0b0c10] p-6 rounded-2xl border border-white/10 aspect-[1] flex flex-col items-center justify-center relative text-center">
                              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 mb-3 shadow-md">
                                <div 
                                  className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-auto"
                                  dangerouslySetInnerHTML={{ __html: extractedSvg }}
                                />
                              </div>
                              <p className="text-[10px] text-white font-semibold uppercase tracking-widest">{formParams.companyName || "PGIYAN App"}</p>
                              <p className="text-[8px] text-slate-500 font-mono mt-1">iOS & Android App Launcher</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* CASE C: HTML Playground Website Simulator */}
                    {activeOutputTab === "html-sandbox" && extractedHtml && (
                      <div className="flex-1 flex flex-col gap-4">
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                              Live Site Preview
                            </span>
                            <span className="text-xs text-slate-400 ml-2">Responsive sandbox simulation</span>
                          </div>
                          
                          <button 
                            onClick={downloadHtmlFile}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
                          >
                            <Download size={12} />
                            Download index.html File
                          </button>
                        </div>

                        {/* Sandbox Frame */}
                        <div className="bg-white rounded-lg overflow-hidden border border-white/10 flex flex-col">
                          <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-mono select-none">
                            <div className="flex gap-1.5 items-center font-bold">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-405 inline-block bg-red-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-yellow-405 inline-block bg-yellow-400"></span>
                              <span className="w-2.5 h-2.5 rounded-full bg-green-405 inline-block bg-green-400"></span>
                            </div>
                            <div className="w-2/3 bg-white border border-slate-200 rounded px-3 py-0.5 text-center text-[10px] truncate">
                              https://{formParams.companyName?.toLowerCase().replace(/\s+/g, '') || "pgiyan-site"}.live-preview.pgiyan.com
                            </div>
                            <span className="opacity-0">.</span>
                          </div>

                          <iframe 
                            srcDoc={extractedHtml}
                            className="w-full h-96 bg-white border-none"
                            title="Website sandbox frame"
                          />
                        </div>

                        {/* HTML Source Code block */}
                        <div className="relative mt-2">
                          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 font-mono">
                            RAW SOURCE CODE FOR EXTERNAL DEPLOYMENT
                          </p>
                          <textarea
                            readOnly
                            value={extractedHtml}
                            className="w-full h-24 p-3 bg-black/60 border border-white/5 rounded-lg font-mono text-[10px] text-emerald-400 select-all resize-none block focus:outline-none"
                          />
                        </div>

                      </div>
                    )}

                    <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <CheckCircle size={15} className="text-amber-400" />
                        <span>Executive 7-point Operational growth strategy computed.</span>
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        PGIYAN Stable Release • OS v4.0
                      </div>
                    </div>

                  </div>
                ) : (
                  // Default Welcoming State inside the workspace
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-10 px-4">
                    <div className="relative w-14 h-14 mb-4 flex items-center justify-center bg-indigo-950/45 border border-indigo-500/20 rounded-2xl text-indigo-400">
                      <Sparkles size={24} className="animate-pulse" />
                    </div>

                    <h2 className="text-sm font-bold text-white uppercase tracking-widest">
                      Workspace Ready Setup
                    </h2>
                    
                    <p className="text-xs text-slate-400 mt-2 max-w-sm mx-auto leading-relaxed">
                      Fill in the custom startup parameters on the left pane, toggle a custom Premium AI Advisor directive if necessary, and execute the synthesis core to retrieve real-time responses.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>

        </main>
      )}

      {/* RENDER VIEW: SCREEN 3 - KPI ANALYTICS PERFORMANCE PAGE */}
      {currentScreen === "analytics" && (
        <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto max-w-7xl mx-auto w-full flex flex-col gap-6">
          
          {/* Header row with back button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
            <div className="space-y-1">
              <button
                onClick={() => setCurrentScreen("dashboard")}
                className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-all bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/5"
              >
                <ArrowLeft size={14} />
                <span>Return to Launchpad Dashboard</span>
              </button>
              
              <h2 className="text-lg md:text-xl font-extrabold text-white tracking-tight flex items-center gap-2 pt-2">
                <TrendingUp className="text-emerald-400" />
                <span>Startup KPI Growth Analytics & Planning Suite</span>
              </h2>
              <p className="text-xs text-slate-400">Track structural accounting entries, map visual parameters, and monitor operational indices.</p>
            </div>

            {metricsList.length > 0 && (
              <button 
                onClick={() => {
                  if (confirm("Are you sure you want to delete all historical logs?")) {
                    setMetricsList([]);
                    localStorage.removeItem("pgiyan_tracker_metrics");
                  }
                }}
                className="px-3.5 py-1.5 bg-red-950/20 border border-red-500/20 text-red-300 rounded-lg text-xs hover:bg-red-950/40 transition-colors"
              >
                Flush Ledgers History
              </button>
            )}
          </div>

          {/* Interactive Layout Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
            
            {/* Left Pane: Metrics Log entry form */}
            <div className="xl:col-span-4 bg-[#0d0d12]/60 border border-white/5 rounded-2xl p-5 md:p-6 space-y-5">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <Plus size={14} className="text-indigo-400" />
                <span>Log New Accounting Period</span>
              </h3>

              <form onSubmit={handleAddMetric} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">Calendar Period</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Jun 2026" 
                    className="w-full h-10 px-3 bg-[#0a0a0d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={newMetric.date}
                    onChange={(e) => setNewMetric({...newMetric, date: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">Gross Revenue ($)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 5200" 
                    className="w-full h-10 px-3 bg-[#0a0a0d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={newMetric.revenue}
                    onChange={(e) => setNewMetric({...newMetric, revenue: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">Monthly Expenses ($)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 1100" 
                    className="w-full h-10 px-3 bg-[#0a0a0d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={newMetric.expenses}
                    onChange={(e) => setNewMetric({...newMetric, expenses: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">Active Customers</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 240" 
                    className="w-full h-10 px-3 bg-[#0a0a0d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={newMetric.customers}
                    onChange={(e) => setNewMetric({...newMetric, customers: e.target.value})}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">Conversion Rate (%)</label>
                  <input 
                    type="number" 
                    step="0.1"
                    placeholder="e.g. 2.9" 
                    className="w-full h-10 px-3 bg-[#0a0a0d] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    value={newMetric.conversionRate}
                    onChange={(e) => setNewMetric({...newMetric, conversionRate: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md active:translate-y-px mt-2"
                >
                  Log Period Metric
                </button>
              </form>
            </div>

            {/* Right Pane: Charts and tabular ledger */}
            <div className="xl:col-span-8 flex flex-col gap-6">
              
              {metricsList.length === 0 ? (
                <div className="py-20 border border-dashed border-white/10 rounded-2xl text-center text-slate-400 bg-[#0d0d12]/30">
                  <TrendingUp size={40} className="mx-auto mb-3 opacity-30 text-indigo-400" />
                  <p className="text-sm font-bold">No historical log entries recorded.</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Fill the periodic accounting parameters in the logger to create beautiful trend charts.
                  </p>
                </div>
              ) : (
                <>
                  {/* Dynamic Custom SVG Visualizer render */}
                  <div className="bg-[#0D0D12]/60 border border-white/5 p-6 rounded-2xl">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-6 font-mono font-bold">
                      MONTHLY GROSS REVENUE VISUALIZATION TREND
                    </p>

                    {(() => {
                      const maxRevenue = Math.max(...metricsList.map(m => m.revenue), 1000) * 1.15;
                      const chartWidth = 600;
                      const chartHeight = 220;
                      const paddingLeft = 50;
                      const paddingRight = 20;
                      const paddingTop = 20;
                      const paddingBottom = 30;
                      
                      const stepX = (chartWidth - paddingLeft - paddingRight) / Math.max(metricsList.length - 1, 1);
                      const scaleY = (chartHeight - paddingTop - paddingBottom) / maxRevenue;

                      const points = metricsList.map((m, idx) => {
                        const x = paddingLeft + idx * stepX;
                        const y = chartHeight - paddingBottom - (m.revenue * scaleY);
                        return { x, y, date: m.date, val: m.revenue };
                      });

                      const pathD = points.map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                      const areaD = points.length > 0 
                        ? `${pathD} L ${points[points.length - 1].x} ${chartHeight - paddingBottom} L ${points[0].x} ${chartHeight - paddingBottom} Z`
                        : '';

                      return (
                        <div className="w-full">
                          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible select-none">
                            <defs>
                              <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4"/>
                                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.0"/>
                              </linearGradient>
                            </defs>

                            {/* Horizontal grid guide lines */}
                            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                              const val = Math.round(maxRevenue * ratio);
                              const y = chartHeight - paddingBottom - (val * scaleY);
                              return (
                                <g key={i}>
                                  <line 
                                    x1={paddingLeft} 
                                    y1={y} 
                                    x2={chartWidth - paddingRight} 
                                    y2={y} 
                                    stroke="rgba(255,255,255,0.04)" 
                                    strokeDasharray="4,4"
                                  />
                                  <text 
                                    x={paddingLeft - 10} 
                                    y={y + 3} 
                                    fill="#475569" 
                                    fontSize="9" 
                                    fontFamily="monospace"
                                    textAnchor="end"
                                  >
                                    ${val}
                                  </text>
                                </g>
                              );
                            })}

                            {/* Shaded Area under path */}
                            {areaD && <path d={areaD} fill="url(#analyticsGradient)" />}

                            {/* Linear Gradient Trend line */}
                            {pathD && (
                              <path 
                                d={pathD} 
                                fill="none" 
                                stroke="#818cf8" 
                                strokeWidth="3" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              />
                            )}

                            {/* Dots */}
                            {points.map((p, idx) => (
                              <g key={idx} className="group/dot cursor-pointer">
                                <circle 
                                  cx={p.x} 
                                  cy={p.y} 
                                  r="4" 
                                  fill="#ffffff" 
                                  stroke="#818cf8" 
                                  strokeWidth="2.5" 
                                />
                                <circle 
                                  cx={p.x} 
                                  cy={p.y} 
                                  r="9" 
                                  fill="#818cf8" 
                                  opacity="0" 
                                  className="hover:opacity-15 transition-opacity"
                                />
                                <text
                                  x={p.x}
                                  y={p.y - 10}
                                  fill="#ffffff"
                                  fontSize="9"
                                  fontWeight="bold"
                                  fontFamily="monospace"
                                  textAnchor="middle"
                                  className="opacity-0 group-hover/dot:opacity-100 transition-opacity bg-slate-900 px-2 py-0.5 rounded"
                                >
                                  ${p.val}
                                </text>
                                
                                <text 
                                  x={p.x} 
                                  y={chartHeight - 10} 
                                  fill="#94a3b8" 
                                  fontSize="9.5" 
                                  textAnchor="middle"
                                >
                                  {p.date}
                                </text>
                              </g>
                            ))}
                          </svg>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Tabular Spreadsheet Ledger */}
                  <div className="bg-[#0D0D12]/60 border border-white/5 p-6 rounded-2xl space-y-4">
                    <span className="text-[10px] text-[#fbbf24] font-bold uppercase tracking-widest block font-mono">
                      OPERATIONAL LEDGER ARCHIVE
                    </span>

                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0a0a0d]">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-white/5 bg-white/[0.01] text-slate-400">
                            <th className="p-3">Period Date</th>
                            <th className="p-3">Gross Revenue</th>
                            <th className="p-3">Overhead Expenses</th>
                            <th className="p-3">Customers</th>
                            <th className="p-3">Conversion Rate</th>
                            <th className="p-3">Net Profit</th>
                            <th className="p-3 text-right">Delete</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {metricsList.map((m) => {
                            const profit = m.revenue - m.expenses;
                            return (
                              <tr key={m.id} className="hover:bg-white/[0.01] transition-colors text-slate-300">
                                <td className="p-3 font-semibold text-white">{m.date}</td>
                                <td className="p-3 font-mono">${m.revenue}</td>
                                <td className="p-3 font-mono">${m.expenses}</td>
                                <td className="p-3">{m.customers}</td>
                                <td className="p-3 font-mono">{m.conversionRate}%</td>
                                <td className="p-3">
                                  <span className={`font-bold font-mono ${profit >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                    {profit >= 0 ? `+$${profit}` : `-$${Math.abs(profit)}`}
                                  </span>
                                </td>
                                <td className="p-3 text-right">
                                  <button 
                                    onClick={() => removeMetric(m.id)}
                                    className="text-slate-500 hover:text-red-400 p-1.5 rounded transition-all"
                                    title="Delete metric item"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 bg-indigo-950/15 rounded-xl border border-indigo-500/10 space-y-2">
                      <p className="text-[10px] uppercase tracking-widest text-[#fbbf24] font-bold">
                        PGIYAN AUTOMATED DIAGNOSTIC METRIC
                      </p>
                      {(() => {
                        const totalRev = metricsList.reduce((acc, c) => acc + c.revenue, 0);
                        const totalExp = metricsList.reduce((acc, c) => acc + c.expenses, 0);
                        const netProfit = totalRev - totalExp;
                        return (
                          <div className="text-xs space-y-1.5">
                            <p className="text-slate-300">
                              Cumulative tracked revenue of <strong className="text-white">${totalRev}</strong> generated against expenses of <strong className="text-white">${totalExp}</strong>.
                            </p>
                            <div className="flex justify-between items-center font-mono text-[11px] pt-1">
                              <span className="text-slate-400">Total Profit Margin Score:</span>
                              <span className="text-[#fbbf24] font-bold">
                                {totalRev > 0 ? `${Math.round((netProfit / totalRev) * 100)}%` : "0%"}
                              </span>
                            </div>
                          </div>
                        );
                      })()}
                    </div>

                  </div>
                </>
              )}
              
            </div>

          </div>

        </main>
      )}

      {/* Bottom Footer Status Bar */}
      <footer className="min-h-12 h-auto py-3 md:py-0 md:h-11 bg-[#070709] border-t border-white/5 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3 z-10 shrink-0 select-none text-center md:text-left">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
          <div className="flex items-center gap-1.5 bg-emerald-500/5 px-2.5 py-0.5 rounded border border-emerald-500/10 shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-mono">
              {appLanguage === "bn" ? "নিরাপদ সংযোগ চালু" : "Secure Connection Live"}
            </span>
          </div>
          <span className="text-slate-800 hidden sm:inline">|</span>
          <div className="text-[10px] text-slate-400 font-mono tracking-wide flex flex-wrap gap-x-2.5 gap-y-1 justify-center items-center">
            <span className="inline-flex items-center gap-1">
              <span className="text-amber-400 font-semibold">{appLanguage === "bn" ? "প্রতিষ্ঠাতা: " : "Founder: "}</span>
              <span className="text-slate-200">Turizita Hasan Kanta</span>
            </span>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1">
              <span className="text-indigo-400 font-semibold">{appLanguage === "bn" ? "লিড ডেভেলপার: " : "Lead Dev: "}</span>
              <span className="text-slate-200">Abdullah Al Mamun (Al Amin)</span>
            </span>
          </div>
        </div>
        <p className="text-[9px] text-slate-500 font-mono shrink-0">
          © 2026 PGIYAN Startup. OS v4.0
        </p>
      </footer>

    </div>
  );
}
