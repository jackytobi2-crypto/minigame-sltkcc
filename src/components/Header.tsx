import React from 'react';
import { Volume2, VolumeX, BookOpen, PlusCircle } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface HeaderProps {
  isMuted: boolean;
  onToggleMute: () => void;
  onOpenReference: () => void;
  onOpenAddQuestion: () => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMuted,
  onToggleMute,
  onOpenReference,
  onOpenAddQuestion,
  selectedCategory,
  onSelectCategory,
}) => {
  const quickCategories = [
    { label: 'Tất cả 10 câu', value: 'Tất cả' },
    { label: 'Tuổi thơ & Phát triển', value: 'Giai đoạn tuổi thơ & Phát triển' },
    { label: 'Liên hệ thần kinh tạm thời', value: 'Đường liên hệ thần kinh tạm thời' },
    { label: 'Hệ thống tín hiệu 2', value: 'Hệ thống tín hiệu thứ 2 & Ngôn ngữ' },
    { label: 'Tư duy & Khái quát hóa', value: 'Tư duy & Khái quát hóa nhận thức' },
    { label: 'Yếu tố sinh trưởng', value: 'Sinh trưởng & Yếu tố ảnh hưởng' },
  ];

  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shadow-red-600/30">
            Ψ
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-900 leading-none">
              Neuro<span className="text-red-600">Psych</span>
            </span>
            <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-rose-700/80">
              Sinh lý TK cấp cao & Tâm lý
            </span>
          </div>
        </div>

        {/* Zone 2: Navigation / Category Filters */}
        <nav className="hidden lg:flex items-center gap-1.5 text-xs font-medium">
          {quickCategories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onSelectCategory(cat.value);
                }}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-rose-50 text-red-700 font-bold border border-rose-200'
                    : 'text-neutral-600 hover:text-red-700 hover:bg-rose-50/50'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Interactive Affordances (Audio Toggle, Cẩm nang, Thêm câu hỏi) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleMute}
            title={isMuted ? 'Bật âm thanh hiệu ứng' : 'Tắt âm thanh'}
            className={`p-2 rounded-lg border transition-colors ${
              isMuted
                ? 'bg-neutral-100 text-neutral-500 border-neutral-200 hover:bg-neutral-200'
                : 'bg-rose-50 text-red-700 border-rose-200 hover:bg-rose-100'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenReference}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-white border border-rose-200 text-rose-900 hover:bg-rose-50 hover:border-red-400 transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>Cẩm nang</span>
          </button>

          <button
            type="button"
            onClick={onOpenAddQuestion}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg bg-red-600 hover:bg-red-700 text-white shadow-sm shadow-red-600/20 active:scale-95 transition-all"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Thêm câu hỏi</span>
            <span className="sm:hidden">Thêm</span>
          </button>
        </div>
      </div>
    </header>
  );
};
