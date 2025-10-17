'use client';

import { useState } from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { Translations } from '@/lib/translations';

interface SearchHistoryProps {
  history: string[];
  onSelect: (query: string) => void;
  onClear: () => void;
  translations: Translations;
}

export function SearchHistory({ history, onSelect, onClear, translations }: SearchHistoryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const displayHistory = isExpanded ? history : history.slice(0, 5);

  const handleClear = () => {
    onClear();
    setShowClearConfirm(false);
  };

  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/40 backdrop-blur-2xl backdrop-saturate-150 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-white/60">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            {translations.searchHistory}
          </h3>
          
          <div className="flex items-center gap-2">
            {history.length > 5 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-blue-600 hover:text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-100/50 transition-colors"
              >
                {isExpanded ? '收起' : `展开全部 (${history.length})`}
              </button>
            )}
            
            <button
              onClick={() => setShowClearConfirm(true)}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-100/50 rounded-lg transition-colors"
              title="清空历史"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {displayHistory.map((item, index) => (
            <button
              key={index}
              onClick={() => onSelect(item)}
              className="w-full text-left p-3 rounded-xl bg-white/60 hover:bg-white/80 transition-colors group"
            >
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900">
                {item}
              </p>
            </button>
          ))}
        </div>

        {/* 清空确认对话框 */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm mx-4 shadow-2xl">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">确认清空</h4>
              <p className="text-gray-600 mb-6">确定要清空所有搜索历史吗？此操作无法撤销。</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  取消
                </button>
                <button
                  onClick={handleClear}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                >
                  清空
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
