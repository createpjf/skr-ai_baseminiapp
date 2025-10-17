'use client';

import { Sparkles, Zap, Globe, Shield, Brain, Wifi } from 'lucide-react';
import { Translations } from '@/lib/translations';

interface FeatureCardsProps {
  translations: Translations;
}

export function FeatureCards({ translations }: FeatureCardsProps) {
  const features = [
    {
      icon: Brain,
      title: translations.smartSearch,
      description: translations.smartSearchDesc,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-100/50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Wifi,
      title: translations.webSearch,
      description: translations.webSearchDesc,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-100/50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Zap,
      title: translations.fast,
      description: translations.fastDesc,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-100/50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: translations.secure,
      description: translations.secureDesc,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-100/50',
      iconColor: 'text-green-600'
    },
    {
      icon: Globe,
      title: translations.global,
      description: translations.globalDesc,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-100/50',
      iconColor: 'text-indigo-600'
    },
    {
      icon: Sparkles,
      title: translations.learning,
      description: translations.learningDesc,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-100/50',
      iconColor: 'text-pink-600'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{translations.featuresTitle}</h2>
        <p className="text-gray-600">{translations.featuresDescription}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className={`${feature.bgColor} backdrop-blur-2xl backdrop-saturate-150 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-white/60 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 group`}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg`}>
                  <IconComponent className={`w-6 h-6 ${feature.iconColor} text-white`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-3">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
