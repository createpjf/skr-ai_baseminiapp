'use client';

import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  onLanguageChange: (lang: 'en' | 'zh') => void;
}

export function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600" />
      <div className="flex bg-white/40 backdrop-blur-2xl backdrop-saturate-150 rounded-xl p-1 border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
        <button
          onClick={() => onLanguageChange('en')}
          className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/60"
        >
          EN
        </button>
        <button
          onClick={() => onLanguageChange('zh')}
          className="px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-white/60"
        >
          中文
        </button>
      </div>
    </div>
  );
}
