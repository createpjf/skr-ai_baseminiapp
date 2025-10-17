export interface Translations {
  // Header
  title: string;
  subtitle: string;
  description: string;
  
  // Search
  searchPlaceholder: string;
  webSearchEnabled: string;
  webSearchDisabled: string;
  
  // Features
  featuresTitle: string;
  featuresDescription: string;
  smartSearch: string;
  smartSearchDesc: string;
  realtime: string;
  realtimeDesc: string;
  fast: string;
  fastDesc: string;
  secure: string;
  secureDesc: string;
  global: string;
  globalDesc: string;
  learning: string;
  learningDesc: string;
  webSearch: string;
  webSearchDesc: string;
  
  // Footer
  footerTitle: string;
  footerDescription: string;
  fastResponse: string;
  multiLanguage: string;
  smartUnderstanding: string;
  
  // Search Results
  yourQuestion: string;
  aiAnswer: string;
  generating: string;
  answerComplete: string;
  regenerate: string;
  copyAnswer: string;
  copiedToClipboard: string;
  wasThisHelpful: string;
  helpful: string;
  notHelpful: string;
  
  // Search History
  searchHistory: string;
  
  // Buttons
  search: string;
  searching: string;
  voiceInput: string;
  home: string;
  backToHome: string;
  
  // Errors
  searchError: string;
  networkError: string;
  
  // Thinking Mode
  thinkingMode: string;
  thinkingModeDesc: string;
  enableThinking: string;
  disableThinking: string;
}

export const translations: Record<'en' | 'zh', Translations> = {
  en: {
    // Header
    title: 'Skr.AI',
    subtitle: 'AI Search',
    description: 'Powered by FLock.io',
    
    // Search
    searchPlaceholder: 'Ask anything...',
    webSearchEnabled: 'Web search enabled',
    webSearchDisabled: 'Web search disabled',
    
    // Features
    featuresTitle: 'Features',
    featuresDescription: 'Powered by FLock.io',
    smartSearch: 'Smart Search',
    smartSearchDesc: 'AI-powered search that understands your intent',
    realtime: 'Real-time',
    realtimeDesc: 'Instant responses as AI thinks',
    fast: 'Fast',
    fastDesc: 'Millisecond response times',
    secure: 'Secure',
    secureDesc: 'Enterprise-grade security',
    global: 'Global',
    globalDesc: 'Multi-language support',
    learning: 'Learning',
    learningDesc: 'Continuously improving',
    webSearch: 'Web Search',
    webSearchDesc: 'Real-time information',
    
    // Footer
    footerTitle: 'Skr.AI',
    footerDescription: 'Intelligent search powered by FLock.io',
    fastResponse: 'Fast',
    multiLanguage: 'Global',
    smartUnderstanding: 'Smart',
    
    // Search Results
    yourQuestion: 'Your Question',
    aiAnswer: 'Skr',
    generating: 'Generating...',
    answerComplete: 'Answer Complete',
    regenerate: 'Regenerate',
    copyAnswer: 'Copy Answer',
    copiedToClipboard: 'Copied to clipboard',
    wasThisHelpful: 'Was this answer helpful?',
    helpful: 'Helpful',
    notHelpful: 'Not Helpful',
    
    // Search History
    searchHistory: 'Search History',
    
    // Buttons
    search: 'Search',
    searching: 'Searching',
    voiceInput: 'Voice Input',
    home: 'Home',
    backToHome: 'Back to Home',
    
    // Errors
    searchError: 'Sorry, an error occurred during the search. Please try again later.',
    networkError: 'If the problem persists, please check your network connection or contact technical support.',
    
    // Thinking Mode
    thinkingMode: 'Thinking Mode',
    thinkingModeDesc: 'Enable deep reasoning and analysis',
    enableThinking: 'Enable Thinking',
    disableThinking: 'Disable Thinking'
  },
  zh: {
    // Header
    title: 'Skr.AI',
    subtitle: 'AI搜索',
    description: '由FLock.io提供支持',
    
    // Search
    searchPlaceholder: '问任何问题...',
    webSearchEnabled: '已启用联网搜索',
    webSearchDisabled: '已禁用联网搜索',
    
    // Features
    featuresTitle: '功能特色',
    featuresDescription: '由FLock.io提供支持',
    smartSearch: '智能搜索',
    smartSearchDesc: '理解您意图的AI搜索',
    realtime: '实时响应',
    realtimeDesc: 'AI思考时即时响应',
    fast: '极速',
    fastDesc: '毫秒级响应时间',
    secure: '安全',
    secureDesc: '企业级安全标准',
    global: '全球化',
    globalDesc: '多语言支持',
    learning: '学习',
    learningDesc: '持续改进',
    webSearch: '联网搜索',
    webSearchDesc: '实时信息获取',
    
    // Footer
    footerTitle: 'Skr.AI',
    footerDescription: '由FLock.io提供支持的智能搜索',
    fastResponse: '快速',
    multiLanguage: '全球',
    smartUnderstanding: '智能',
    
    // Search Results
    yourQuestion: '您的问题',
    aiAnswer: 'Skr',
    generating: '正在生成...',
    answerComplete: '回答完成',
    regenerate: '重新生成',
    copyAnswer: '复制回答',
    copiedToClipboard: '已复制到剪贴板',
    wasThisHelpful: '这个回答对您有帮助吗？',
    helpful: '有用',
    notHelpful: '无用',
    
    // Search History
    searchHistory: '搜索历史',
    
    // Buttons
    search: '搜索',
    searching: '搜索中',
    voiceInput: '语音输入',
    home: '主页',
    backToHome: '返回主页',
    
    // Errors
    searchError: '抱歉，搜索时出现错误，请稍后重试。',
    networkError: '如果问题持续存在，请检查网络连接或联系技术支持。',
    
    // Thinking Mode
    thinkingMode: '推理模式',
    thinkingModeDesc: '启用深度推理和分析',
    enableThinking: '开启推理',
    disableThinking: '关闭推理'
  }
};
