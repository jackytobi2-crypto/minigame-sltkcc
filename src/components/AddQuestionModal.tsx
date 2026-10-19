import React, { useState } from 'react';
import { X, Plus, AlertCircle } from 'lucide-react';
import { OptionId, Question } from '../data/quizData';

interface AddQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddQuestion: (newQuestion: Question) => void;
}

export const AddQuestionModal: React.FC<AddQuestionModalProps> = ({
  isOpen,
  onClose,
  onAddQuestion,
}) => {
  const [questionText, setQuestionText] = useState('');
  const [optA, setOptA] = useState('');
  const [optB, setOptB] = useState('');
  const [optC, setOptC] = useState('');
  const [optD, setOptD] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState<OptionId>('A');
  const [category, setCategory] = useState('Sinh lý thần kinh cấp cao');
  const [mechanism, setMechanism] = useState('');
  const [clinicalPsychology, setClinicalPsychology] = useState('');
  const [coreConcept, setCoreConcept] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) {
      setError('Vui lòng nhập nội dung câu hỏi.');
      return;
    }
    if (!optA.trim() || !optB.trim() || !optC.trim() || !optD.trim()) {
      setError('Vui lòng điền đủ 4 phương án A, B, C, D.');
      return;
    }

    const newQ: Question = {
      id: `custom_${Date.now()}`,
      category,
      question: questionText.trim(),
      options: [
        { id: 'A', text: optA.trim() },
        { id: 'B', text: optB.trim() },
        { id: 'C', text: optC.trim() },
        { id: 'D', text: optD.trim() },
      ],
      correctAnswer,
      explanation: {
        coreConcept: coreConcept.trim() || 'Học thuyết Sinh lý Thần kinh & Tâm lý học',
        mechanism: mechanism.trim() || 'Cơ chế giải phẫu sinh lý thần kinh liên quan trực tiếp đến hưng phấn và ức chế vỏ não.',
        clinicalPsychology: clinicalPsychology.trim() || 'Ứng dụng trong nghiên cứu tâm lý học hành vi và điều hòa cảm xúc.',
      },
      difficulty: 'Nâng cao',
    };

    onAddQuestion(newQ);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] bg-white rounded-2xl shadow-2xl border border-rose-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-red-600 to-rose-700 text-white">
          <div className="flex items-center gap-2">
            <Plus className="w-5 h-5" />
            <h3 className="font-bold text-lg">Thêm Câu Hỏi Trắc Nghiệm Mới</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-sm">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Chủ đề phân loại
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs"
            >
              <option value="Giai đoạn tuổi thơ & Phát triển">Giai đoạn tuổi thơ & Phát triển</option>
              <option value="Đường liên hệ thần kinh tạm thời">Đường liên hệ thần kinh tạm thời</option>
              <option value="Hệ thống tín hiệu thứ 2 & Ngôn ngữ">Hệ thống tín hiệu thứ 2 & Ngôn ngữ</option>
              <option value="Tư duy & Khái quát hóa nhận thức">Tư duy & Khái quát hóa nhận thức</option>
              <option value="Sinh trưởng & Yếu tố ảnh hưởng">Sinh trưởng & Yếu tố ảnh hưởng</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-700 mb-1">
              Nội dung câu hỏi *
            </label>
            <textarea
              rows={2}
              value={questionText}
              onChange={(e) => {
                setQuestionText(e.target.value);
                setError('');
              }}
              placeholder="Nhập câu hỏi trắc nghiệm (ví dụ: Bản chất của phản xạ có điều kiện...)"
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs leading-relaxed"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-neutral-700">
              4 Phương án A, B, C, D & Chọn đáp án đúng *
            </label>

            {[
              { id: 'A' as OptionId, val: optA, setVal: setOptA },
              { id: 'B' as OptionId, val: optB, setVal: setOptB },
              { id: 'C' as OptionId, val: optC, setVal: setOptC },
              { id: 'D' as OptionId, val: optD, setVal: setOptD },
            ].map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCorrectAnswer(item.id)}
                  title="Bấm để chọn làm đáp án đúng"
                  className={`w-8 h-8 rounded font-mono font-bold text-xs shrink-0 flex items-center justify-center transition-colors ${
                    correctAnswer === item.id
                      ? 'bg-emerald-600 text-white shadow'
                      : 'bg-rose-100 text-rose-900 border border-rose-200 hover:bg-rose-200'
                  }`}
                >
                  {item.id}
                </button>
                <input
                  type="text"
                  value={item.val}
                  onChange={(e) => {
                    item.setVal(e.target.value);
                    setError('');
                  }}
                  placeholder={`Nội dung phương án ${item.id}...`}
                  className="flex-1 px-3 py-1.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs"
                />
                <span className="text-[11px] text-neutral-400 whitespace-nowrap">
                  {correctAnswer === item.id ? '★ Đáp án đúng' : ''}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-200 space-y-3">
            <div className="text-xs font-bold text-rose-900">
              Giải thích sinh lý học (Hiển thị sau khi trả lời)
            </div>
            <div>
              <input
                type="text"
                value={coreConcept}
                onChange={(e) => setCoreConcept(e.target.value)}
                placeholder="Học thuyết cốt lõi (ví dụ: Quy luật cảm ứng Pavlov, Khớp Synapse...)"
                className="w-full px-3 py-1.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs"
              />
            </div>
            <div>
              <textarea
                rows={2}
                value={mechanism}
                onChange={(e) => setMechanism(e.target.value)}
                placeholder="Cơ chế sinh lý thần kinh chi tiết..."
                className="w-full px-3 py-1.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs"
              />
            </div>
            <div>
              <textarea
                rows={2}
                value={clinicalPsychology}
                onChange={(e) => setClinicalPsychology(e.target.value)}
                placeholder="Ứng dụng tâm lý học & nhận thức..."
                className="w-full px-3 py-1.5 rounded-lg border border-neutral-300 focus:outline-none focus:border-red-500 text-xs"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-neutral-600 hover:text-neutral-900 text-xs font-medium"
            >
              Hủy bỏ
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg shadow-sm"
            >
              Lưu câu hỏi vào đề thi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
