import React from 'react';
import { OptionId, QuizOption } from '../data/quizData';
import { ParticleBurst } from './ParticleBurst';
import { Check, X } from 'lucide-react';

interface VanishingOptionProps {
  option: QuizOption;
  isCorrect: boolean;
  isVanishing: boolean;
  isVanished: boolean;
  isRevealedCorrect: boolean;
  disabled: boolean;
  onSelect: (optionId: OptionId) => void;
}

export const VanishingOption: React.FC<VanishingOptionProps> = ({
  option,
  isCorrect,
  isVanishing,
  isVanished,
  isRevealedCorrect,
  disabled,
  onSelect,
}) => {
  // If permanently vanished after wrong selection
  if (isVanished) {
    return (
      <div 
        aria-hidden="true" 
        className="h-0 m-0 p-0 overflow-hidden opacity-0 pointer-events-none transition-all duration-300"
      />
    );
  }

  return (
    <div className="relative w-full">
      {/* Particle disintegration burst during vanishing */}
      <ParticleBurst active={isVanishing} colorType="dissolve" />

      <button
        type="button"
        disabled={disabled || isVanishing}
        onClick={() => onSelect(option.id)}
        className={`group relative w-full text-left p-4 rounded-xl transition-all duration-300 flex items-start gap-4 outline-none focus-visible:ring-2 focus-visible:ring-red-500
          ${
            isRevealedCorrect
              ? 'bg-rose-50 border-2 border-emerald-600 text-emerald-950 shadow-sm ring-4 ring-emerald-500/10'
              : isVanishing
              ? 'bg-red-100/90 border-2 border-red-600 text-red-950 scale-95 opacity-50 blur-[1px] animate-pulse transition-all duration-300'
              : 'bg-white border border-rose-100 hover:border-red-400 text-neutral-800 hover:shadow-md hover:bg-rose-50/40 active:scale-[0.99]'
          }
        `}
      >
        {/* Letter Badge (A, B, C, D) */}
        <div
          className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-sm transition-colors duration-200
            ${
              isRevealedCorrect
                ? 'bg-emerald-600 text-white'
                : isVanishing
                ? 'bg-red-600 text-white animate-spin'
                : 'bg-rose-100 text-rose-900 border border-rose-200 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
            }
          `}
        >
          {isRevealedCorrect ? (
            <Check className="w-5 h-5 stroke-[2.5]" />
          ) : isVanishing ? (
            <X className="w-5 h-5 stroke-[2.5]" />
          ) : (
            option.id
          )}
        </div>

        {/* Option Text */}
        <div className="flex-1 pt-1">
          <p
            className={`text-sm md:text-base leading-relaxed ${
              isRevealedCorrect ? 'font-semibold text-emerald-950' : 'text-neutral-800'
            }`}
          >
            {option.text}
          </p>

          {isRevealedCorrect && (
            <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-700">
              <Check className="w-3.5 h-3.5" /> Đáp án chính xác
            </span>
          )}

          {isVanishing && (
            <span className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-red-700 animate-pulse">
              <X className="w-3.5 h-3.5" /> Sai - Đang tan biến...
            </span>
          )}
        </div>
      </button>
    </div>
  );
};
