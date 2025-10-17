'use client';

import { useState } from 'react';
import { RefreshCw, Copy, Check, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';
import { Translations } from '@/lib/translations';

interface SearchResultsProps {
  query: string;
  results: string;
  isLoading: boolean;
  onRegenerate: () => void;
  onNewQuestion: (query: string) => void;
  translations: Translations;
}

export function SearchResults({ query, results, isLoading, onRegenerate, onNewQuestion, translations }: SearchResultsProps) {
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState<'helpful' | 'not-helpful' | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(results);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleFeedback = (type: 'helpful' | 'not-helpful') => {
    setFeedback(type);
    // 这里可以发送反馈到服务器
    console.log('Feedback:', type);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/50 backdrop-blur-2xl backdrop-saturate-150 rounded-3xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.15)] border border-white/60">
        {/* 问题显示 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-blue-600" />
            {translations.yourQuestion}
          </h3>
          <p className="text-gray-700 bg-gray-100/50 rounded-xl p-4 text-base leading-relaxed">
            {query}
          </p>
        </div>

        {/* 回答显示 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            {translations.aiAnswer}
          </h3>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">{translations.generating}</p>
              </div>
            </div>
          ) : (
            <div className="prose prose-gray max-w-none">
              <div className="bg-white/60 rounded-xl p-6 text-gray-800 leading-relaxed whitespace-pre-wrap">
                {results}
              </div>
            </div>
          )}
        </div>

        {/* 操作按钮 */}
        {!isLoading && results && (
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-200/50">
            <div className="flex items-center gap-3">
              <button
                onClick={onRegenerate}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-700 rounded-xl hover:bg-blue-500/30 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                {translations.regenerate}
              </button>
              
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 text-gray-700 rounded-xl hover:bg-gray-500/30 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    {translations.copiedToClipboard}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {translations.copyAnswer}
                  </>
                )}
              </button>
            </div>

            {/* 反馈按钮 */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{translations.wasThisHelpful}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => handleFeedback('helpful')}
                  className={`p-2 rounded-lg transition-colors ${
                    feedback === 'helpful' 
                      ? 'bg-green-500/20 text-green-700' 
                      : 'bg-gray-100/50 text-gray-600 hover:bg-green-500/10'
                  }`}
                >
                  <ThumbsUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleFeedback('not-helpful')}
                  className={`p-2 rounded-lg transition-colors ${
                    feedback === 'not-helpful' 
                      ? 'bg-red-500/20 text-red-700' 
                      : 'bg-gray-100/50 text-gray-600 hover:bg-red-500/10'
                  }`}
                >
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 新问题建议 */}
        {!isLoading && results && (
          <div className="mt-6 pt-6 border-t border-gray-200/50">
            <h4 className="text-sm font-medium text-gray-700 mb-3">相关问题：</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "请详细解释一下",
                "有什么实际应用场景？",
                "能举个例子吗？",
                "还有其他相关信息吗？"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onNewQuestion(suggestion)}
                  className="px-3 py-1.5 bg-blue-100/50 text-blue-700 rounded-full text-sm hover:bg-blue-200/50 transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
