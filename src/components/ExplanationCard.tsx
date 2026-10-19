import React from 'react';
import { Question, OptionId } from '../data/quizData';
import { CheckCircle2, ArrowRight, Brain, Lightbulb, BookOpen } from 'lucide-react';

interface ExplanationCardProps {
  question: Question;
  selectedOption: OptionId | null;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

export const ExplanationCard: React.FC<ExplanationCardProps> = ({
  question,
  onNextQuestion,
  isLastQuestion,
}) => {
  const correctOpt = question.options.find((o) => o.id === question.correctAnswer);

  return (
    <div className="mt-6 rounded-2xl bg-white border border-rose-200/80 shadow-lg shadow-rose-900/5 p-6 animate-fade-in relative overflow-hidden">
      {/* Decorative red accent top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-red-700" />

      {/* Header section with correct answer banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-rose-100">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-rose-800">
              Đáp án chính xác
            </div>
            <div className="text-base font-bold text-neutral-900 flex items-center gap-2">
              <span className="inline-block px-2 py-0.5 rounded bg-emerald-600 text-white font-mono text-sm">
                {question.correctAnswer}
              </span>
              <span>{correctOpt?.text}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onNextQuestion}
          className="self-end sm:self-center inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-medium text-sm transition-all shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/30 shrink-0"
        >
          <span>{isLastQuestion ? 'Xem kết quả' : 'Câu tiếp theo'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Explanation breakdown */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {/* Physiological Mechanism */}
        <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100/80">
          <div className="flex items-center gap-2 mb-2 font-semibold text-rose-900">
            <Brain className="w-4 h-4 text-red-600" />
            <span>Cơ chế Sinh lý Thần kinh</span>
          </div>
          <p className="text-neutral-700 leading-relaxed text-xs sm:text-sm">
            {question.explanation.mechanism}
          </p>
        </div>

        {/* Psychological & Behavioral Relevance */}
        <div className="p-4 rounded-xl bg-white border border-rose-100">
          <div className="flex items-center gap-2 mb-2 font-semibold text-rose-900">
            <Lightbulb className="w-4 h-4 text-amber-600" />
            <span>Ứng dụng Tâm lý học & Nhận thức</span>
          </div>
          <p className="text-neutral-700 leading-relaxed text-xs sm:text-sm">
            {question.explanation.clinicalPsychology}
          </p>
        </div>
      </div>

      {/* Core Concept footer */}
      <div className="mt-4 pt-3 border-t border-rose-100/60 flex items-center justify-between text-xs text-rose-900/70">
        <div className="flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-red-600" />
          <span className="font-medium">Học thuyết trọng tâm:</span>
          <span className="italic">{question.explanation.coreConcept}</span>
        </div>
        <span className="font-mono text-neutral-500">Độ khó: {question.difficulty}</span>
      </div>
    </div>
  );
};
