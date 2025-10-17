'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchBar } from '@/components/SearchBar';
import { SearchResults } from '@/components/SearchResults';
import { SearchHistory } from '@/components/SearchHistory';
import { FeatureCards } from '@/components/FeatureCards';
import { LanguageToggle } from '@/components/LanguageToggle';
import { HomeButton } from '@/components/HomeButton';
import { FlowingLights, ParticleLights, WaveLights } from '@/components/FlowingLights';
import { Sparkles, Zap, Globe } from 'lucide-react';
import { translations, Translations } from '@/lib/translations';

export default function Home() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [conversationHistory, setConversationHistory] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [currentLang, setCurrentLang] = useState<'en' | 'zh'>('en');
  const [t, setT] = useState<Translations>(translations.en);

  // 从URL参数获取初始查询
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery) {
      // 这里先不调用handleSearch，避免循环依赖
      setQuery(urlQuery);
    }
  }, [searchParams]);

  // 从localStorage加载搜索历史和语言设置
  useEffect(() => {
    const savedHistory = localStorage.getItem('skr-ai-history');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('加载搜索历史失败:', error);
      }
    }

    const savedLang = localStorage.getItem('skr-ai-language') as 'en' | 'zh';
    if (savedLang) {
      setCurrentLang(savedLang);
      setT(translations[savedLang]);
    }
  }, []);

  // 保存搜索历史到localStorage
  const saveSearchHistory = useCallback((newHistory: string[]) => {
    setSearchHistory(newHistory);
    localStorage.setItem('skr-ai-history', JSON.stringify(newHistory));
  }, []);

  const handleSearch = useCallback(async (searchQuery: string, enableWebSearch: boolean = true, enableThinking: boolean = false) => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    setQuery(searchQuery);
    
    // 如果是新问题（不是连续对话），才清空结果
    if (!conversationHistory.length) {
      setResults('');
    }
    
    // 添加到搜索历史
    const newHistory = [searchQuery, ...searchHistory.filter(item => item !== searchQuery)].slice(0, 20);
    saveSearchHistory(newHistory);
    
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          query: searchQuery, 
          enableWebSearch,
          enableThinking,
          conversationHistory: conversationHistory
        })
      });
  
      if (!response.ok) {
        throw new Error('搜索失败');
      }
      
      const data = await response.json();
      
      // 更新对话历史
      setConversationHistory(prev => [
        ...prev,
        { role: 'user', content: searchQuery },
        { role: 'assistant', content: data.result }
      ]);
      
      // 更新显示的结果（累积显示）
      setResults(prev => {
        if (prev) {
          return prev + '\n\n---\n\n**新问题：** ' + searchQuery + '\n\n**回答：**\n' + data.result;
        } else {
          return data.result;
        }
      });
    } catch (error) {
      console.error('Search error:', error);
      setResults('Sorry, an error occurred during the search. Please try again later. If the problem persists, please check your network connection or contact technical support.');
    } finally {
      setIsLoading(false);
    }
  }, [conversationHistory, searchHistory, saveSearchHistory]);

  const handleRegenerate = () => {
    if (query) {
      handleSearch(query);
    }
  };

  const handleLanguageChange = (lang: 'en' | 'zh') => {
    setCurrentLang(lang);
    setT(translations[lang]);
    localStorage.setItem('skr-ai-language', lang);
  };

  const handleHome = () => {
    setQuery('');
    setResults('');
    setIsLoading(false);
    setConversationHistory([]);
  };

  const handleNewQuestion = (newQuery: string) => {
    handleSearch(newQuery, true, false);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('skr-ai-history');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 relative overflow-hidden flex items-center justify-center p-8 font-sans">
      {/* 流动光效背景 */}
      <FlowingLights />
      <ParticleLights />
      <WaveLights />
      
      {/* iOS风格光晕背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-300/40 to-blue-300/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Base Mini App 状态指示器 */}
        <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-center">
          <p className="text-green-800 text-sm">
            🚀 Skr.AI Base Mini App - 智能搜索助手
          </p>
        </div>

        {/* Header */}
        <header className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 lg:py-8">
          {/* 右上角语言切换 */}
          <div className="flex justify-end items-center mb-2 sm:mb-4">
            <LanguageToggle onLanguageChange={handleLanguageChange} />
          </div>
          
          {/* 品牌展示区域 */}
          <div className="text-center mb-12">
            {/* 主品牌LOGO */}
            <div className="relative inline-block mb-8">
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden
                            bg-white/40 backdrop-blur-2xl backdrop-saturate-150
                            border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.6)]">
                {/* LOGO图标 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-gray-700" />
                </div>
              </div>
            </div>

            {/* 品牌文字 */}
            <h1 className="text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
            <p className="text-gray-600 text-lg">{t.description}</p>
          </div>

          {/* Search Section */}
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              <HomeButton 
                onHome={handleHome} 
                isVisible={!!query || !!results} 
                lang={currentLang}
              />
            </div>
            <SearchBar 
              onSearch={handleSearch} 
              isLoading={isLoading}
              translations={t}
            />
          </div>

          {/* Search History */}
          {searchHistory.length > 0 && !query && (
            <div className="mb-8">
              <SearchHistory 
                history={searchHistory} 
                onSelect={handleSearch}
                onClear={handleClearHistory}
                translations={t}
              />
            </div>
          )}

          {/* Search Results */}
          {query && (
            <div className="mb-8">
              <SearchResults 
                query={query}
                results={results}
                isLoading={isLoading}
                onRegenerate={handleRegenerate}
                onNewQuestion={handleNewQuestion}
                translations={t}
              />
            </div>
          )}

          {/* Features Section */}
          {!query && (
            <div>
              <FeatureCards translations={t} />
            </div>
          )}
        </header>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                <span className="text-base sm:text-lg font-semibold text-gray-800">{t.footerTitle}</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                {t.footerDescription}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t.fastResponse}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t.multiLanguage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{t.smartUnderstanding}</span>
                </div>
              </div>
            </div>
          </footer>
      </div>
    </div>
  );
}