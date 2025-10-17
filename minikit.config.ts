const ROOT_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://skr-ai-miniapp.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    // 这将在部署后通过 Base Build Account Association Tool 生成
    "header": "",
    "payload": "",
    "signature": ""
  },
  miniapp: {
    version: "1",
    name: "Skr.AI", 
    subtitle: "AI Search Assistant", 
    description: "Intelligent AI-powered search with real-time web search and multi-language support",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.svg`],
    iconUrl: `${ROOT_URL}/icon.svg`,
    splashImageUrl: `${ROOT_URL}/splash.svg`,
    splashBackgroundColor: "#007AFF",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "productivity",
    tags: ["ai", "search", "productivity", "assistant", "multilingual"],
    heroImageUrl: `${ROOT_URL}/hero.svg`, 
    tagline: "Ask anything, get intelligent answers",
    ogTitle: "Skr.AI - AI Search Assistant",
    ogDescription: "Intelligent AI-powered search with real-time web search and multi-language support",
    ogImageUrl: `${ROOT_URL}/og-image.svg`,
  },
} as const;
