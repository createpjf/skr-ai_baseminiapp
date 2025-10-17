'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, Loader2, Sparkles, Wifi, Brain } from 'lucide-react';
import { Translations } from '@/lib/translations';

interface SearchBarProps {
  onSearch: (query: string, enableWebSearch?: boolean, enableThinking?: boolean) => void;
  isLoading: boolean;
  translations: Translations;
}

export function SearchBar({ onSearch, isLoading, translations }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [enableWebSearch, setEnableWebSearch] = useState(true);
  const [enableThinking, setEnableThinking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim(), enableWebSearch, enableThinking);
      setQuery(''); // 搜索后清除输入框
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === '/' && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFocused]);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4">
      {/* 控制按钮组 - 移到搜索框上方 */}
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* 推理思考开关 */}
          <div className="relative group/thinking-container">
            <button
              type="button"
              onClick={() => setEnableThinking(!enableThinking)}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl liquid-button group/thinking ${
                enableThinking 
                  ? 'liquid-tab-active bg-purple-500/20' 
                  : ''
              }`}
              title={enableThinking ? translations.disableThinking : translations.enableThinking}
            >
              <Brain className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                enableThinking 
                  ? 'text-purple-600' 
                  : 'text-gray-500 group-hover/thinking:text-purple-500'
              }`} />
            </button>
            {/* Hover提示 */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/thinking-container:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              推理模型
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* 联网搜索开关 */}
          <div className="relative group/web-container">
            <button
              type="button"
              onClick={() => setEnableWebSearch(!enableWebSearch)}
              className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl liquid-button group/web ${
                enableWebSearch 
                  ? 'liquid-tab-active bg-blue-500/20' 
                  : ''
              }`}
              title={enableWebSearch ? translations.webSearchDisabled : translations.webSearchEnabled}
            >
              <Wifi className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                enableWebSearch 
                  ? 'text-blue-600' 
                  : 'text-gray-500 group-hover/web:text-blue-500'
              }`} />
            </button>
            {/* Hover提示 */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover/web-container:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              <div className="text-center">
                <div className="font-medium">
                  {enableWebSearch ? '关闭联网搜索' : '打开联网搜索'}
                </div>
                <div className="text-gray-300 mt-1">
                  模型: {enableThinking ? 'qwen-plus (思考模式)' : 'qwen-plus'}
                </div>
                <div className="text-gray-300">
                  {enableWebSearch ? '✓ 实时搜索已启用' : '✗ 实时搜索已关闭'}
                </div>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          {/* 搜索图标 */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10">
            {isLoading ? (
              <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
            ) : (
              <Search className="w-5 h-5 text-gray-500" />
            )}
          </div>

          {/* 输入框 */}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={translations.searchPlaceholder}
            className={`w-full pl-16 pr-28 py-5 text-lg rounded-3xl
                      bg-white/40 backdrop-blur-2xl backdrop-saturate-150
                      border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                      focus:outline-none focus:bg-white/60 focus:shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                      transition-all duration-300 ${
              isLoading ? 'cursor-not-allowed opacity-70' : ''
            }`}
            disabled={isLoading}
          />

          {/* 搜索按钮 */}
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-2xl font-medium transition-all duration-200
                      backdrop-blur-2xl backdrop-saturate-150 border border-white/60
                      shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                      active:scale-95 ${
              !query.trim() || isLoading
                ? 'opacity-50 cursor-not-allowed bg-white/20 text-gray-400'
                : 'bg-white/50 text-gray-700 hover:bg-white/60'
            }`}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>{translations.searching}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>{translations.search}</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
