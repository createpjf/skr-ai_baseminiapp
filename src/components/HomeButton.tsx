'use client';

import { Home } from 'lucide-react';

interface HomeButtonProps {
  onHome: () => void;
  isVisible: boolean;
  lang: 'en' | 'zh';
}

export function HomeButton({ onHome, isVisible, lang }: HomeButtonProps) {
  if (!isVisible) return null;

  return (
    <button
      onClick={onHome}
      className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-2xl backdrop-saturate-150 rounded-xl border border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-200 text-gray-700"
    >
      <Home className="w-4 h-4" />
      <span className="text-sm font-medium">
        {lang === 'zh' ? '返回主页' : 'Back to Home'}
      </span>
    </button>
  );
}
