/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { 
  QUIZ_QUESTIONS, 
  Question, 
  OptionId, 
  CATEGORIES 
} from './data/quizData';
import { soundManager } from './utils/audio';
import { NeuroDecorations } from './components/NeuroDecorations';
import { Header } from './components/Header';
import { VanishingOption } from './components/VanishingOption';
import { ExplanationCard } from './components/ExplanationCard';
import { ReferenceModal } from './components/ReferenceModal';
import { AddQuestionModal } from './components/AddQuestionModal';
import { ParticleBurst } from './components/ParticleBurst';
import { 
  Sparkles, 
  Flame, 
  RotateCcw, 
  Eye, 
  Award, 
  CheckCircle, 
  Activity,
  ArrowRight,
  BookOpen
} from 'lucide-react';

export default function App() {
  const [questionsList, setQuestionsList] = useState<Question[]>(() => {
    try {
      const saved = localStorage.getItem('neuropsych_custom_questions_v2');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return [...QUIZ_QUESTIONS, ...parsed];
        }
      }
    } catch {
      // fallback
    }
    return QUIZ_QUESTIONS;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(soundManager.isMuted);

  // Elimination & State for the current question
  const [vanishedOptions, setVanishedOptions] = useState<Set<OptionId>>(new Set());
  const [vanishingOption, setVanishingOption] = useState<OptionId | null>(null);
  const [selectedOption, setSelectedOption] = useState<OptionId | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);

  // Modals
  const [isReferenceOpen, setIsReferenceOpen] = useState<boolean>(false);
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState<boolean>(false);
  const [showCelebrationBurst, setShowCelebrationBurst] = useState<boolean>(false);

  // Filtered questions based on selected category
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'Tất cả') return questionsList;
    return questionsList.filter((q) => q.category === selectedCategory);
  }, [questionsList, selectedCategory]);

  const currentQuestion = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Reset question state when moving to a new question or category
  const resetQuestionState = () => {
    setVanishedOptions(new Set());
    setVanishingOption(null);
    setSelectedOption(null);
    setIsAnswered(false);
    setAttempts(0);
    setShowCelebrationBurst(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setIsQuizComplete(false);
    resetQuestionState();
  };

  const handleToggleMute = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
  };

  const handleAddQuestion = (newQuestion: Question) => {
    const updated = [newQuestion, ...questionsList];
    setQuestionsList(updated);
    try {
      const customOnly = updated.filter((q) => q.id.startsWith('custom_'));
      localStorage.setItem('neuropsych_custom_questions_v2', JSON.stringify(customOnly));
    } catch {
      // ignore
    }
  };

  // User selects an option (A, B, C, D)
  const handleSelectOption = (optionId: OptionId) => {
    if (isAnswered || vanishedOptions.has(optionId) || vanishingOption === optionId) {
      return;
    }

    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);

    if (optionId === currentQuestion.correctAnswer) {
      // CORRECT ANSWER!
      setSelectedOption(optionId);
      setIsAnswered(true);
      setShowCelebrationBurst(true);

      // Play custom celebratory chime
      soundManager.playSuccessChime();

      // Score calculation: 100 for 1st try, 60 for 2nd, 30 for 3rd, 10 for 4th
      const pointsEarned = currentAttempts === 1 ? 100 : currentAttempts === 2 ? 60 : currentAttempts === 3 ? 30 : 10;
      const newStreak = streak + 1;
      setScore((prev) => prev + pointsEarned);
      setStreak(newStreak);
      if (newStreak > maxStreak) {
        setMaxStreak(newStreak);
      }
    } else {
      // WRONG ANSWER: MUST VANISH WITH ANIMATION & SOUND
      soundManager.playWrongVanishSound();
      setVanishingOption(optionId);
      setStreak(0); // Break streak

      // After dissolution animation, permanently vanish this option
      setTimeout(() => {
        setVanishedOptions((prev) => new Set([...prev, optionId]));
        setVanishingOption(null);
      }, 420);
    }
  };

  // Reveal correct answer if user desires
  const handleRevealAnswer = () => {
    soundManager.playClick();
    setIsAnswered(true);
    setSelectedOption(currentQuestion.correctAnswer);
  };

  // Move to next question
  const handleNextQuestion = () => {
    soundManager.playClick();
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setIsQuizComplete(true);
      soundManager.playFanfare();
    }
  };

  // Restart Quiz
  const handleRestartQuiz = () => {
    soundManager.playClick();
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setIsQuizComplete(false);
    resetQuestionState();
  };

  const progressPercentage = Math.round(
    ((currentQuestionIndex + (isAnswered ? 1 : 0)) / filteredQuestions.length) * 100
  );

  return (
    <div className="min-h-screen bg-[#FFFDFD] text-neutral-900 flex flex-col font-sans relative selection:bg-red-600 selection:text-white">
      {/* Decorative Neuro & Psychology linework background */}
      <NeuroDecorations />

      {/* Top Header */}
      <Header
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenReference={() => setIsReferenceOpen(true)}
        onOpenAddQuestion={() => setIsAddQuestionOpen(true)}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Mobile Category Scroll Bar */}
      <div className="lg:hidden w-full overflow-x-auto bg-white/80 border-b border-rose-100 px-4 py-2 flex gap-1 text-xs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => handleCategoryChange(cat)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-red-600 text-white font-bold'
                : 'text-neutral-600 hover:text-red-700 bg-rose-50/60'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 md:py-10 z-10 flex flex-col justify-start">
        {!isQuizComplete ? (
          <div>
            {/* Top Stats Bar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-rose-100 shadow-sm shadow-rose-900/5">
              {/* Question Index & Category */}
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 font-bold font-mono text-xs flex items-center justify-center">
                  #{currentQuestionIndex + 1}
                </span>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">
                    Câu hỏi {currentQuestionIndex + 1} / {filteredQuestions.length}
                  </div>
                  <div className="text-xs font-bold text-red-700">
                    {currentQuestion.category}
                  </div>
                </div>
              </div>

              {/* Score & Streak Counters */}
              <div className="flex items-center gap-4 text-xs">
                {streak > 1 && (
                  <div className="flex items-center gap-1 text-amber-600 font-bold animate-pulse">
                    <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
                    <span>Chuỗi {streak}x!</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5 font-mono font-bold text-neutral-800 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                  <Award className="w-4 h-4 text-red-600" />
                  <span>Điểm: {score}</span>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-rose-100 h-2 rounded-full overflow-hidden mb-6">
              <div
                className="bg-gradient-to-r from-red-600 to-rose-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-3xl border-2 border-rose-100 shadow-xl shadow-rose-900/5 p-6 sm:p-8 relative">
              {/* Confetti celebration burst upon correct answer */}
              <ParticleBurst active={showCelebrationBurst} colorType="celebrate" />

              {/* Difficulty & Academic Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-semibold tracking-wide text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-200">
                  Môn: Sinh lý thần kinh cấp cao & Tâm lý học
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  Độ khó: <span className="font-semibold text-rose-700">{currentQuestion.difficulty}</span>
                </span>
              </div>

              {/* Question Text */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 leading-snug mb-6 text-wrap-balance">
                {currentQuestion.question}
              </h2>

              {/* Prompt Instruction reminder */}
              <div className="mb-4 text-xs text-neutral-500 flex items-center justify-between">
                <span>Chọn đáp án đúng (A, B, C, D). Chọn sai sẽ <strong>biến mất</strong> phương án:</span>
                {vanishedOptions.size > 0 && !isAnswered && (
                  <span className="text-rose-600 font-medium">
                    Đã loại bỏ {vanishedOptions.size} câu sai
                  </span>
                )}
              </div>

              {/* ABCD Options Grid */}
              <div className="space-y-3 relative">
                {currentQuestion.options.map((option) => (
                  <VanishingOption
                    key={option.id}
                    option={option}
                    isCorrect={option.id === currentQuestion.correctAnswer}
                    isVanishing={vanishingOption === option.id}
                    isVanished={vanishedOptions.has(option.id)}
                    isRevealedCorrect={isAnswered && option.id === currentQuestion.correctAnswer}
                    disabled={isAnswered || vanishingOption !== null}
                    onSelect={handleSelectOption}
                  />
                ))}
              </div>

              {/* Help & Reveal Action Controls */}
              {!isAnswered && (
                <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between">
                  <div className="text-xs text-neutral-500">
                    {vanishedOptions.size > 0 ? (
                      <span className="text-red-700 font-medium">
                        Hãy chọn tiếp các đáp án còn lại!
                      </span>
                    ) : (
                      <span>Nhấp vào 1 trong các đáp án trên để trả lời.</span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleRevealAnswer}
                    className="inline-flex items-center gap-1.5 text-xs text-rose-700 hover:text-red-700 font-semibold py-1.5 px-3 rounded-lg hover:bg-rose-50 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Hiện đáp án & cơ chế</span>
                  </button>
                </div>
              )}

              {/* Correct Answer Explanation Box */}
              {isAnswered && (
                <ExplanationCard
                  question={currentQuestion}
                  selectedOption={selectedOption}
                  onNextQuestion={handleNextQuestion}
                  isLastQuestion={currentQuestionIndex === filteredQuestions.length - 1}
                />
              )}
            </div>
          </div>
        ) : (
          /* Quiz Completed Screen */
          <div className="bg-white rounded-3xl border-2 border-rose-200 shadow-2xl shadow-rose-900/10 p-8 md:p-12 text-center max-w-xl mx-auto my-auto animate-fade-in relative overflow-hidden">
            <div className="w-20 h-20 bg-rose-100 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
              <Award className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-2">
              Hoàn Thành Bài Trắc Nghiệm!
            </h2>
            <p className="text-sm text-neutral-600 mb-6">
              Bạn đã hoàn thành các câu hỏi thuộc chuyên đề{' '}
              <strong className="text-red-700">{selectedCategory}</strong>
            </p>

            {/* Scorecard KPI */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-rose-50/60 border border-rose-100 mb-8 text-center">
              <div>
                <div className="text-xs text-neutral-500 font-medium">Tổng Điểm</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-red-700">
                  {score}
                </div>
              </div>
              <div className="border-x border-rose-200">
                <div className="text-xs text-neutral-500 font-medium">Số Câu Hỏi</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-neutral-800">
                  {filteredQuestions.length}
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 font-medium">Chuỗi Kỷ Lục</div>
                <div className="text-xl sm:text-2xl font-black font-mono text-amber-600">
                  {maxStreak}x
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRestartQuiz}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Luyện tập lại</span>
              </button>

              <button
                type="button"
                onClick={() => setIsReferenceOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-rose-200 hover:bg-rose-50 text-rose-900 font-semibold text-sm transition-all"
              >
                <BookOpen className="w-4 h-4 text-red-600" />
                <span>Đọc cẩm nang thần kinh</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Educational quick pill at bottom */}
      <footer className="mt-auto py-4 border-t border-rose-100 bg-white/70 text-center text-xs text-neutral-500 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Hệ thống câu hỏi Sinh lý thần kinh cấp cao & Tâm lý học thực nghiệm</span>
          <span className="font-mono text-rose-700">Tông màu: Đỏ & Trắng · Hiệu ứng: Tan biến câu sai</span>
        </div>
      </footer>

      {/* Reference Handbook Modal */}
      <ReferenceModal
        isOpen={isReferenceOpen}
        onClose={() => setIsReferenceOpen(false)}
      />

      {/* Add Custom Question Modal */}
      <AddQuestionModal
        isOpen={isAddQuestionOpen}
        onClose={() => setIsAddQuestionOpen(false)}
        onAddQuestion={handleAddQuestion}
      />
    </div>
  );
}
