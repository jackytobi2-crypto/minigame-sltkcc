import React, { useState } from 'react';
import { X, Brain, Activity, Sparkles, BookOpen } from 'lucide-react';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceModal: React.FC<ReferenceModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'child_dev' | 'temperament' | 'action_potential' | 'eeg' | 'inhibition'>('child_dev');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl border border-rose-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-red-600 to-rose-700 text-white">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">
                Cẩm Nang Sinh Lý Thần Kinh & Tâm Lý Học Lứa Tuổi
              </h3>
              <p className="text-xs text-rose-100">
                Lý thuyết trọng tâm: Giai đoạn 6–11 tuổi, hệ thống tín hiệu 2 & quy luật Pavlov
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-rose-100 bg-rose-50/50 p-2 gap-2 overflow-x-auto text-xs font-medium">
          <button
            type="button"
            onClick={() => setActiveTab('child_dev')}
            className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'child_dev'
                ? 'bg-red-600 text-white shadow-sm font-bold'
                : 'text-neutral-600 hover:text-red-700 hover:bg-rose-100/60'
            }`}
          >
            ★ Trẻ 6–11 Tuổi (Bài học)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('temperament')}
            className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'temperament'
                ? 'bg-red-600 text-white shadow-sm font-bold'
                : 'text-neutral-600 hover:text-red-700 hover:bg-rose-100/60'
            }`}
          >
            4 Kiểu Thần Kinh Pavlov
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('action_potential')}
            className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'action_potential'
                ? 'bg-red-600 text-white shadow-sm font-bold'
                : 'text-neutral-600 hover:text-red-700 hover:bg-rose-100/60'
            }`}
          >
            Điện Thế Hoạt Động (AP)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('eeg')}
            className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'eeg'
                ? 'bg-red-600 text-white shadow-sm font-bold'
                : 'text-neutral-600 hover:text-red-700 hover:bg-rose-100/60'
            }`}
          >
            Sóng Não EEG
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('inhibition')}
            className={`px-3 py-2 rounded-lg whitespace-nowrap transition-all ${
              activeTab === 'inhibition'
                ? 'bg-red-600 text-white shadow-sm font-bold'
                : 'text-neutral-600 hover:text-red-700 hover:bg-rose-100/60'
            }`}
          >
            Các Dạng Ức Chế Vỏ Não
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-neutral-800">
          {activeTab === 'child_dev' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                <h4 className="font-bold text-red-800 text-sm mb-1">
                  1. Giai đoạn tuổi thơ thứ hai (6–11 tuổi / Tiểu học)
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Đặc tính cơ bản của các quá trình thần kinh (hưng phấn & ức chế) đạt mức <strong>gần tương đương người lớn</strong>. Khả năng tự chủ, chú ý có chủ định và ức chế có điều kiện phát triển mạnh mẽ dưới tác động của hoạt động học tập.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-rose-200 bg-white shadow-xs">
                  <div className="font-bold text-red-800 text-xs mb-1">
                    Đường liên hệ thần kinh tạm thời
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Số lượng liên kết trên vỏ não <strong>tăng lên rất nhiều</strong> ở tuổi 6–7. Giúp trẻ sử dụng ngôn ngữ linh hoạt, xây dựng câu chuẩn ngữ pháp và thích ứng hoàn cảnh.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-white shadow-xs">
                  <div className="font-bold text-red-800 text-xs mb-1">
                    Hệ thống tín hiệu thứ hai & Tư duy
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    <strong>Phát triển đáng kể</strong>. Tư duy bằng lời nói bắt đầu có ảnh hưởng mạnh hơn và dần chiếm ưu thế trong các hoạt động nhận thức.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-white shadow-xs">
                  <div className="font-bold text-red-800 text-xs mb-1">
                    Sự xuất hiện của Ngôn ngữ thầm
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Ngôn ngữ thầm (ngôn ngữ bên trong) <strong>bắt đầu xuất hiện</strong> trong giai đoạn 6–7 tuổi, là công cụ đắc lực cho tư duy thầm kín và tự kiểm soát hành vi.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-white shadow-xs">
                  <div className="font-bold text-red-800 text-xs mb-1">
                    Khái quát hóa theo công dụng & hành động
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Trẻ khái quát đồ vật dựa trên <strong>khả năng hành động và công dụng</strong> (ví dụ: nhận biết tai dùng để nghe, mắt dùng để nhìn, bút dùng để viết).
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-200 bg-amber-50/50 text-xs text-amber-900">
                <strong>Hiện tượng gia tốc sinh trưởng:</strong> Sự thay đổi chế độ dinh dưỡng đầy đủ và cải thiện điều kiện sống góp phần làm tăng tốc độ sinh trưởng và phát triển của trẻ em ngày nay.
              </div>
            </div>
          )}

          {activeTab === 'temperament' && (
            <div className="space-y-4">
              <p className="text-neutral-600 text-xs sm:text-sm">
                I.P. Pavlov phân loại kiểu thần kinh dựa trên 3 tiêu chí: <strong className="text-red-700">Cường độ</strong> (Mạnh/Yếu), <strong className="text-red-700">Tính cân bằng</strong> (Cân bằng/Không cân bằng) và <strong className="text-red-700">Độ linh hoạt</strong> (Linh hoạt/Trầm).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/30">
                  <div className="font-bold text-red-800 mb-1 flex items-center justify-between">
                    <span>1. Hoạt Bát (Sanguine)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-red-700 font-mono">Mạnh - Cân bằng - Linh hoạt</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Hưng phấn và ức chế đều mạnh, chuyển giao nhanh. Dễ thích ứng, năng động, nhiệt huyết, giao tiếp tốt nhưng dễ nản nếu công việc đơn điệu.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/30">
                  <div className="font-bold text-red-800 mb-1 flex items-center justify-between">
                    <span>2. Điềm Tĩnh (Phlegmatic)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-red-700 font-mono">Mạnh - Cân bằng - Trầm</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Hai quá trình đều mạnh và cân bằng nhưng tính ỳ cao, chuyển giao chậm. Điềm tĩnh, kiên trì, kỷ luật, tự chủ cao, ít bị kích động.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/30">
                  <div className="font-bold text-red-800 mb-1 flex items-center justify-between">
                    <span>3. Nóng Nảy (Choleric)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-red-700 font-mono">Mạnh - Không cân bằng</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Hưng phấn chiếm ưu thế vượt trội so với ức chế. Phản ứng dữ dội, nhiệt tình cao nhưng dễ nóng giận, bốc đồng, tính khí thất thường.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-rose-200 bg-rose-50/30">
                  <div className="font-bold text-red-800 mb-1 flex items-center justify-between">
                    <span>4. Ưu Tư (Melancholic)</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-rose-100 text-red-700 font-mono">Kiểu Yếu</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Cả hưng phấn và ức chế đều yếu, vỏ não nhanh chuyển sang ức chế vượt hạn khi bị quá tải. Nhạy cảm, sâu sắc, chu đáo nhưng dễ tổn thương, tự ti.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'action_potential' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-neutral-900 text-rose-400 font-mono text-xs overflow-x-auto border border-neutral-800">
                <div className="flex justify-between items-center pb-2 border-b border-neutral-800 text-neutral-300">
                  <span>BIỂU ĐỒ ĐIỆN THẾ HOẠT ĐỘNG (ACTION POTENTIAL)</span>
                  <span className="text-emerald-400">Na+/K+ Kinetics</span>
                </div>
                <div className="py-4 text-center leading-loose">
                  <div className="text-rose-300 font-bold text-sm">+40 mV ──────── đỉnh khử cực (Đóng kênh Na+, Mở kênh K+)</div>
                  <div className="text-neutral-400"> 0 mV ──────── Đảo cực màng</div>
                  <div className="text-amber-400">-55 mV ──────── Ngưỡng kích thích (Threshold - Quy luật Tất hoặc Không)</div>
                  <div className="text-neutral-400">-70 mV ──────── Điện thế nghỉ màng (Kênh rò K+ & bơm Na+/K+)</div>
                  <div className="text-blue-400">-85 mV ──────── Quá phân cực (K+ tiếp tục thoát ra)</div>
                </div>
              </div>
              <ul className="text-xs text-neutral-700 space-y-2 list-disc pl-5">
                <li><strong>Giai đoạn nghỉ (-70mV):</strong> Bơm Na+/K+-ATPase bơm 3 Na+ ra và 2 K+ vào, màng trong mang điện âm.</li>
                <li><strong>Khử cực (-55mV đến +40mV):</strong> Kênh Na+ mở hàng loạt, Na+ ùa vào nội bào theo gradien điện hóa.</li>
                <li><strong>Tái cực & Quá phân cực:</strong> Kênh Na+ bất hoạt, kênh K+ mở chậm đưa K+ ra ngoài để tái lập điện thế âm.</li>
              </ul>
            </div>
          )}

          {activeTab === 'eeg' && (
            <div className="space-y-3">
              <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/20 flex items-start gap-3">
                <Activity className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-900">Sóng Alpha (8 - 13 Hz)</div>
                  <p className="text-xs text-neutral-600">
                    Xuất hiện rõ nhất ở vùng chẩm khi nhắm mắt, tĩnh tâm, thư giãn. Bị ức chế (Alpha blocking) ngay khi mở mắt hoặc tư duy giải toán.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/20 flex items-start gap-3">
                <Activity className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-900">Sóng Beta (14 - 30 Hz)</div>
                  <p className="text-xs text-neutral-600">
                    Tần số nhanh, biên độ thấp. Đặc trưng cho trạng thái tỉnh táo tích cực, tư duy logic, tập trung giải quyết vấn đề và cảnh giác.
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-rose-200 bg-rose-50/20 flex items-start gap-3">
                <Activity className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-red-900">Sóng Theta (4 - 7 Hz) & Delta (0.5 - 3.5 Hz)</div>
                  <p className="text-xs text-neutral-600">
                    Theta xuất hiện lúc mơ màng, sáng tạo vô thức, ngủ nông. Delta xuất hiện trong giấc ngủ sâu NREM giai đoạn sóng chậm, phục hồi chuyển hóa não.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inhibition' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl border border-rose-200 bg-white">
                <div className="font-bold text-red-800 text-sm mb-1">1. Ức chế không điều kiện (Ức chế ngoài)</div>
                <p className="text-xs text-neutral-600">
                  Mang tính bẩm sinh, không cần học tập. Xảy ra khi có một kích thích lạ xuất hiện (tiếng động mạnh đột ngột), làm đình trệ phản xạ đang diễn ra theo quy luật cảm ứng âm tính.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-rose-200 bg-white">
                <div className="font-bold text-red-800 text-sm mb-1">2. Ức chế có điều kiện (Ức chế trong)</div>
                <p className="text-xs text-neutral-600">
                  Đòi hỏi quá trình rèn luyện trên vỏ não. Bao gồm: <em>Ức chế dập tắt</em> (khi tín hiệu mất giá trị củng cố), <em>Ức chế phân biệt</em> (phân biệt tín hiệu tương tự nhưng không được củng cố), <em>Ức chế muộn</em> và <em>Ức chế điều kiện</em>.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-rose-200 bg-white">
                <div className="font-bold text-red-800 text-sm mb-1">3. Ức chế vượt hạn (Ức chế bảo vệ)</div>
                <p className="text-xs text-neutral-600">
                  Xuất hiện khi cường độ kích thích vượt quá giới hạn chức năng tối đa của tế bào vỏ não, ngăn chặn sự kiệt quệ và hoại tử nơ-ron.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-rose-100 bg-neutral-50 flex items-center justify-between">
          <div className="text-xs text-neutral-500 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-red-600" />
            <span>Nguồn tài liệu: Giáo trình Sinh lý thần kinh cấp cao & Tâm lý học đại cương</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded-lg transition-colors"
          >
            Đóng cẩm nang
          </button>
        </div>
      </div>
    </div>
  );
};
