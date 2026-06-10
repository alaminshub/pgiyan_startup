import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent and key from environment
const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({
  apiKey: apiKey || "",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// Helper for constructing prompts based on selected module, parameters, and optional premium mode
function constructStartupPrompt(moduleName: string, params: any, premiumMode: string | null): { system: string; user: string } {
  let modeInstruction = "";
  if (premiumMode) {
    if (premiumMode === "ai-ceo") {
      modeInstruction = "ACT AS AN AI CEO: Provide strategic, long-term decision-making, direct risk-mitigation plans, partnership ideas, and operational priorities. Focus on scale and global competitiveness.";
    } else if (premiumMode === "ai-marketing") {
      modeInstruction = "ACT AS AN AI MARKETING MANAGER: Focus entirely on customer acquisition, ultra-low-budget organic scale, branding psychology, creative campaigns, viral hooks, and conversion optimizations.";
    } else if (premiumMode === "ai-financial") {
      modeInstruction = "ACT AS AN AI FINANCIAL ADVISOR: Analyze every detail with deep financial scrutiny. Emphasize unit economics, customer lifetime value (LTV), customer acquisition cost (CAC), capital efficiency, and burn rate management.";
    } else if (premiumMode === "ai-sales") {
      modeInstruction = "ACT AS AN AI SALES MANAGER: Focus on the sales funnel, scripts, objection-handling templates, email cadences, and techniques to convert leads into high-paying, recurring accounts.";
    }
  } else {
    modeInstruction = "ACT AS A BALANCED STARTUP MENTOR AND MULTI-DISCIPLINARY OPERATING DIRECT.";
  }

  const systemPrompt = `You are PGIYAN Startup AI, the world's most advanced AI Business Builder and Entrepreneur Operating System.
Your mission is to help entrepreneurs, startups, freelancers, small business owners, and enterprises launch, manage, grow, and scale successful businesses.

DEVELOPMENT TEAM CREDIT & FOUNDER INFO:
- Founder: Turizita Hasan Kanta (PGIYAN, 28)
- Lead Developer: Abdullah Al Mamun (Al Amin) (PGIYAN, 24)

CORE RULES:
1. Always provide practical, actionable, and data-driven recommendations.
2. Think like an experienced startup founder, investor, marketer, and business strategist.
3. Tailor all advice to the specified country, location, budget, industry, business stage, skills, and interests.
4. Prioritize profitability, sustainability, and scalability.
5. Break complex tasks into clear step-by-step action plans.
6. Use clear business language understandable by beginners.
7. ${modeInstruction}
8. IMPORTANT LANGUAGE REQUIREMENT:
   - You MUST generate the entire analysis, detailed responses, and recommendations in easily understandable, friendly, professional, and natural Bangla (বাংলা ভাষা).
   - Use correct Benglai grammar, but feel free to write key business terminology in clear English words or bracketed English text (e.g. "মার্কেটিং (Marketing)", "ইউনিট ইকোনমিক্স (Unit Economics)") so that local startup founders can easily connect with the concepts.
   - Do NOT generate English responses. All explanation and blueprint text MUST be in Bangla.

IMPORTANT: Unless requested otherwise (e.g., website code or raw SVG generation), make sure the final section of your response contains a structured closing under the title "## PGIYAN Operational Growth Blueprint" (or the Bangla translation "## পিজিয়ান অপারেশনাল গ্রোথ ব্লুপ্রিন্ট") containing the following exact 7 points:
1. Executive Summary (কার্যকরী সারসংক্ষেপ)
2. Recommended Actions (প্রস্তাবিত পদক্ষেপসমূহ)
3. Estimated Costs (আনুমানিক সম্ভাব্য খরচ)
4. Revenue Potential (সম্ভাব্য আয় বা মুনাফা)
5. Risk Assessment (ঝুঁকি ও সমাধান পরিকল্পনা)
6. Growth Strategy (ব্যবসা সম্প্রসারণের কৌশল)
7. Next Steps (পরবর্তী প্রয়োজনীয় পদক্ষেপসমূহ)`;

  let userPrompt = "";

  switch (moduleName) {
    case "idea-generator":
      userPrompt = `MODULE 1: Business Idea Generator.
Generate 3 highly profitable business ideas based on these parameters:
- Interests: ${params.interests || "Any"}
- Skills/Expertise: ${params.skills || "Any"}
- Location/Country: ${params.location || "Global"}
- Available Capital: $${params.capital || "1000"} 

For each idea, provide a detailed breakdown including:
1. Name & Core Concept
2. Target Market
3. Startup Cost Breakdown
4. Expected Monthly Revenue (within 6 months)
5. Risk Level (Low/Med/High) with explanation
6. Growth Potential & Scalability
7. Difficulty Score (1-10) with key skills needed

Format your output in clean Markdown with professional heading styles. Ensure to include the final 7-point PGIYAN Operational Growth Blueprint summing up the best idea at the end.`;
      break;

    case "market-research":
      userPrompt = `MODULE 2: Market Research Engine.
Analyze the market opportunities for this industry/project:
- Industry/Niche: ${params.niche || "General Service"}
- Target Country/Location: ${params.location || "Global"}
- Main Potential Competitors (known or speculative): ${params.competitors || "Local alternates"}
- Research Budget: $${params.budget || "0 (Bootstrapped)"}

Output:
1. SWOT Analysis (detailed strengths, weaknesses, opportunities, threats)
2. Market Size & Demand Analysis (Target Addressable Market, Serviceable Market, Trends)
3. Competitor Analysis (Direct/indirect layout, competitive gaps, and differentiator strategies)
4. PGIYAN Opportunity Score (Give a score out of 100 based on profitability potential, barrier to entry, and current demand trends)

Format in clean Markdown tables and grids where appropriate. Frame the closing around the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "financial-planner":
      userPrompt = `MODULE 3: Financial Planner & Profit Calculator.
Calculate the primary financial plan for:
- Core Concept: ${params.concept || "Retail/Service"}
- Launch Capital: $${params.launchCapital || "5000"}
- Estimated Monthly Operating Expenses (e.g. rent, software, utilities): $${params.monthlyExpenses || "500"}
- Target Location/Industry: ${params.location || "US / Digital"}

Generate:
1. Detailed Initial Startup Cost Breakdown (CapEx)
2. Monthly Expenses Forecast (OpEx)
3. 6-Month Revenue & Profit Forecast (Represented as a clean Markdown table with Months, Projected Customers, Avg Transaction Value, Monthly Revenue, Monthly Expenses, Net Profit)
4. Break-even Point calculation (How many sales/customers needed per month)
5. Return on Investment (ROI) Timeline and projections.
6. Cash Flow Plan guidelines.

Provide precise numbers and equations. Complete with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "business-plan":
      userPrompt = `MODULE 4: Business Plan Builder.
Create a complete, export-ready business plan based on:
- Company Name: ${params.companyName || "PGIYAN Enterprise"}
- Industry: ${params.industry || "Digital Technology"}
- Products/Services: ${params.products || "SaaS / Consulting"}
- Launch Location/Region: ${params.location || "Global"}
- Capital Budget: $${params.budget || "2000"}

You must include:
1. Executive Summary (Pitch, vision, problem/solution)
2. Company Overview (Legal format, mission, founders)
3. Detailed Products & Services (Features, pricing tiers, IP potential)
4. Market Analysis Summary (Target audience personas, pain points)
5. Marketing & Launch Strategy (Channels, early-adopter acquisition)
6. Operations Plan (Day-to-day workflow, tools/technologies)
7. Financial Projection Overview (1-Year Targets)
8. Multi-Phase Growth Roadmap (Launch, Scaling, Expansion)

Make the formatting formal, professional, highly detailed, and elegant for exporting or printing. Ensure you conclude with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "branding-studio":
      userPrompt = `MODULE 5: Branding Studio.
Generate a complete, bespoke brand identity for:
- Core Product/Aspiration: ${params.ideas || "Eco-friendly retail"}
- Target Mood/Vibe (e.g., minimalist, prestige, tech-mono, organic, playful): ${params.vibe || "Modern Technical"}
- Main Accent Preferences: ${params.accentColor || "Gold/Blue"}

Output:
1. 5 Unique, high-impact Brand Names with semantic rationale
2. Core Brand Story (emotional connection, origin narrative)
3. 5 Catapult Slogans & Taglines
4. A complete Brand Color Palette (HEX code values and description - include 1 Main, 1 Dark slate, 1 Soft light background, and 2 bright modern accents)
5. Logo Concept, layout suggestions, and detailed Generative AI image prompts for designing the logo.
6. RAW SVG CODE block: Generate a unique, ultra-clean, modern minimalist vector SVG logo inside a single \`\`\`xml ... \`\`\` or \`\`\`html ... \`\`\` block that represents the business essence. Use beautiful styles, gradients, scale, rounded corners, or elegant geometric structures. Include responsive viewBox (e.g. 0 0 500 200), clean text tags using standard system-sans serif fonts, and inline styles. ONLY use valid SVG code.

End with the 7-part PGIYAN Operational Growth Blueprint on the final section.`;
      break;

    case "website-builder":
      userPrompt = `MODULE 6: Website Builder & Copywriter.
Create a complete Landing Page and copy deck for:
- Company Name: ${params.companyName || "LaunchPad"}
- Business Description: ${params.description || "Direct-to-consumer lifestyle brand"}
- Style Theme (e.g., Obsidian Dark, Premium Slate, Organic Light): ${params.theme || "Obsidian Dark"}
- Core Intent (Lead Gen, Sales, Portfolio, Booking): ${params.intent || "Lead Capture"}

Output:
1. Complete UI/UX copy structure (Navigation map, Hero banner headline + body + CTA, Feature list, Social Proof Testimonials, FAQ Accordions, Contact form fields).
2. Advanced Search Engine Optimization (SEO) Content: Meta Titles, Meta Descriptions, list of 10 high-value focus Keywords, and Slug recommendations.
3. RAW CODE block: Supply a complete, single, fully functional standalone index.html raw code. It MUST utilize Tailwind CSS from a CDN (i.e. <script src="https://cdn.tailwindcss.com"></script>) and optionally Lucide Icons if needed. Style it beautifully according to the selected theme. Make it fully responsive, professional, and responsive with interactive features in standard client-side JS (like tabs, accordion reveals, modal popups, and mock form submit responses). Place the code within a clean \`\`\`html ... \`\`\` block.

Conclude with the 7-part PGIYAN Operational Growth Blueprint at the very end.`;
      break;

    case "social-manager":
      userPrompt = `MODULE 7: Social Media Manager.
Create a complete monthly social media campaign and content calendar for:
- Campaign Theme/Product: ${params.campaignTheme || "Sustainable clothing line launch"}
- Target Networks (e.g. Instagram, LinkedIn, TikTok, Facebook): ${params.networks || "Instagram, TikTok"}
- Post Tone (e.g. bold, witty, academic, professional, casual): ${params.tone || "Empowering and casual"}

Output:
1. A 30-Day Content Calendar: Structure as a table with columns: [Day, Platform, Post Topic, Format Type (Image, Video, Carousel), Key Visual Suggestion, Primary Caption, Recommended Hashtags]. Generate the calendar in detail.
2. 3 High-converting Ad Copy variations (Hero headline, body content, hook, value proposition, and CTA).
3. 5 Direct engagement templates/replies to build community.

Conclude with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "growth-dashboard":
      userPrompt = `MODULE 8: Growth Operations Analysis.
Evaluate current metrics and supply weekly/monthly business execution insights:
- Current Monthly Revenue: $${params.revenue || "0"}
- Total Customer Count: ${params.customers || "0"}
- Website Traffic / Leads monthly: ${params.traffic || "0"}
- Average Conversion Rate: ${params.conversion || "1.5"}%
- Core Marketing Channel: ${params.channel || "Organic Social"}
- Monthly Marketing Budget: $${params.marketingSpend || "100"}

Provide:
1. Unit Economics Audit: Analyze Margin level, LTV (Lifetime Value Estimate), CAC (Customer Acquisition Cost), and ROI.
2. Friction point identification and Conversion Rate Optimization (CRO) recommendations.
3. Actionable, low-cost Growth Hacking experiments (minimum of 3).
4. Projections: A monthly projection table showing expected growth trajectory over 6 months if recommended strategies are deployed.

End with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "ai-coach":
      userPrompt = `MODULE 9: AI Business Coach.
The entrepreneur has requested strategic consulting advice.
- Industry/Niche: ${params.industry || "General Enterprise"}
- Current Business Stage: ${params.stage || "Ideation"}
- Input Budget: $${params.budget || "1000"}
- User's Question/Problem: "${params.question || "How do I secure my first 10 paying customers?"}"

Provide a detailed, expert consultant report addressing:
1. Root Cause Analysis: Identify why this problem is common and what underlying friction creates it.
2. Step-by-Step Strategic Frameworks (e.g. lean methodology, pricing adjustment, viral loops).
3. 3 Practical, immediately executable workarounds/actions.
4. Risk and counter-measures overview.

Ensure to provide the 7-part PGIYAN Operational Growth Blueprint targeted to this problem.`;
      break;

    case "team-builder":
      userPrompt = `MODULE 10: Team Builder & HR Strategist.
Design the team structure, hiring guidelines, and core job descriptions for:
- Business Model: ${params.businessModel || "E-commerce agency"}
- Current Team Count: ${params.currentTeam || "1 (Solopreneur)"}
- Immediate Position to Hire: ${params.targetRole || "Growth Marketer"}
- Hiring Budget per Month: $${params.monthlySalary || "1500"}

Output:
1. Customized, highly professional Job Description for the target role (Key Responsibilities, Required Skills, Profile Match, Compensation & Culture).
2. Complete 5-Step Interview Protocol with 10 specific diagnostic questions and the expected answers you should listen for.
3. Recommended Organizational Chart & Hiring Road-map for the next 12 months.
4. Standard Workplace operational policies blueprint (work hours, communication guidelines, OKR reviews, and confidentiality rules).

End with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "ecommerce-toolkit":
      userPrompt = `MODULE 11: E-commerce Toolkit & Merchandising Engine.
Draft optimized descriptions and listings for:
- Product Niche/Name: ${params.productName || "Smart Eco Water Bottle"}
- Distinctive Features/USPs: ${params.features || "Temperature display, self-cleaning, vacuum insulated"}
- Target Customer Demographic: ${params.audience || "Active professionals & outdoors enthusiasts"}
- Intended Price Point: $${params.price || "45"}

Generate:
1. A conversion-centered, SEO-optimized Product Listing Copy (compelling Shopify/Amazon title, sub-headline, emotional hook, structural benefit bullets, call-to-actions).
2. Technical Specifications list.
3. Comprehensive FAQ and Customer Support templates (answering Shipping queries, Return policies, product usage, troubleshooting).
4. Inventory & restock optimization triggers based on your targets.

Conclude with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    case "legal-assistant":
      userPrompt = `MODULE 12: Legal Assistant & Policy Crafter.
Supply regulatory guidance and custom policy templates for:
- Business Name: ${params.businessName || "Skyline Goods"}
- Jurisdiction & Location: ${params.jurisdiction || "Bangladesh / US"}
- Core Actions of Users (e.g., buy physical products, download software, subscribe): ${params.userActions || "Sign up and buy online products"}

Output:
1. Step-By-Step Business Registration Guide (how to register, where to apply, licenses needed in the specified jurisdiction).
2. Custom Terms & Conditions Template (tailored to your product/service).
3. Custom Privacy Policy Draft (staling data collection, payment processors, cookies rules).
4. Refund and Dispute Resolution policies.

IMPORTANT DISCLAIMER: Display a prominent notice stating that this guide is for educational reference only and does not constitute formal legal advice.
Conclude with the 7-part PGIYAN Operational Growth Blueprint tailored to minimizing compliance liabilities.`;
      break;

    case "funding-assistant":
      userPrompt = `MODULE 13: Funding Assistant & Pitch Advisor.
Draft funding strategies and layouts for:
- Project Concept: ${params.concept || "B2B SaaS tool"}
- Current Traction / Monthly Revenue / Metrics: ${params.traction || "Beta testing with 50 users"}
- Target Funding Amount: $${params.targetFunding || "50000"}
- Funding Type (Grants, Angel, VC, Crowdfunding): ${params.fundingType || "Angel Investors / Seed"}

Output:
1. Clean 10-Slide Investor Pitch Deck Layout & Copy (Slide title, main bullet, visual recommendation, notes for each slide).
2. Business Valuation Estimation modeling based on competitive market multiples.
3. 2 High-conversion Investor Outreach Email templates (Direct, cold reach-out, and warm-intro requests).
4. Crowdfunding / Pitching Strategy outline (How to build FOMO, handle due diligence, terms negotiation).

Conclude with the 7-part PGIYAN Operational Growth Blueprint.`;
      break;

    default:
      userPrompt = `Perform general startup growth analysis based on the inputs: ${JSON.stringify(params)}. Make sure to output the 7-part PGIYAN Operational Growth Blueprint.`;
  }

  return { system: systemPrompt, user: userPrompt };
}


// Server-side endpoint to generate business blueprints
app.post("/api/generate", async (req, res) => {
  try {
    const { module, params, premiumMode } = req.body;
    if (!module) {
      return res.status(400).json({ error: "Module parameter is required" });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ 
        error: "GEMINI_API_KEY is not configured on the server. Please add your key to the Secrets panel in AI Studio settings." 
      });
    }

    const promptObj = constructStartupPrompt(module, params, premiumMode);

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptObj.user,
      config: {
        systemInstruction: promptObj.system,
        temperature: 0.8,
      },
    });

    const generatedText = response.text;
    if (!generatedText) {
      throw new Error("Unable to extract text response from Gemini API");
    }

    // Extract raw XML/HTML vector logo from Branding response if present
    let extractedSvg: string | null = null;
    if (module === "branding-studio") {
      const svgMatch = generatedText.match(/```(?:xml|html|svg)?\s*(<svg[\s\S]*?<\/svg>)\s*```/i);
      if (svgMatch && svgMatch[1]) {
        extractedSvg = svgMatch[1].trim();
      }
    }

    // Extract raw HTML page from Website Builder if present
    let extractedHtml: string | null = null;
    if (module === "website-builder") {
      const htmlMatch = generatedText.match(/```html\s*(<!DOCTYPE[\s\S]*?<\/html>|<html[\s\S]*?<\/html>)\s*```/i);
      if (htmlMatch && htmlMatch[1]) {
        extractedHtml = htmlMatch[1].trim();
      } else {
        // Fallback robust search for <html> tag
        const secondaryMatch = generatedText.match(/(<html[\s\S]*?<\/html>)/i);
        if (secondaryMatch && secondaryMatch[1]) {
          extractedHtml = secondaryMatch[1].trim();
        }
      }
    }

    res.json({
      text: generatedText,
      extractedSvg,
      extractedHtml,
      timestamp: new Date().toISOString()
    });

  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    res.status(500).json({ 
      error: "An error occurred during Gemini AI processing. Details: " + (error.message || error) 
    });
  }
});


// Serve static assets and handle routing
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Mount Vite dev server in development format
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve build directory in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PGIYAN Startup AI Server running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode.`);
  });
}

startServer();
