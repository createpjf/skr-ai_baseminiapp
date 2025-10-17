import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    "accountAssociation": {
      "header": "",
      "payload": "",
      "signature": ""
    },
    "miniapp": {
      "version": "1",
      "name": "Skr.AI",
      "subtitle": "AI Search Assistant",
      "description": "Intelligent AI-powered search with real-time web search and multi-language support",
      "screenshotUrls": ["/screenshot-portrait.svg"],
      "iconUrl": "/icon.svg",
      "splashImageUrl": "/splash.svg",
      "splashBackgroundColor": "#007AFF",
      "homeUrl": "/",
      "webhookUrl": "/api/webhook",
      "primaryCategory": "productivity",
      "tags": ["ai", "search", "productivity", "assistant", "multilingual"],
      "baseBuilder": {
        "ownerAddress": "0x1a37df55f8201f92A419290616f2dbDBd70E49E9"
      }
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
