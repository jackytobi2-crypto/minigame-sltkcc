export type OptionId = 'A' | 'B' | 'C' | 'D';

export interface QuizOption {
  id: OptionId;
  text: string;
}

export interface Question {
  id: string;
  category: string;
  question: string;
  options: QuizOption[];
  correctAnswer: OptionId;
  explanation: {
    coreConcept: string;
    mechanism: string;
    clinicalPsychology: string;
  };
  difficulty: 'Cơ bản' | 'Nâng cao' | 'Chuyên sâu';
}

export const CATEGORIES = [
  'Tất cả',
  'Giai đoạn tuổi thơ & Phát triển',
  'Đường liên hệ thần kinh tạm thời',
  'Hệ thống tín hiệu thứ 2 & Ngôn ngữ',
  'Tư duy & Khái quát hóa nhận thức',
  'Sinh trưởng & Yếu tố ảnh hưởng',
] as const;

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 'cau-1',
    category: 'Giai đoạn tuổi thơ & Phát triển',
    question: 'Câu 1. Giai đoạn tuổi thơ thứ hai được xác định vào khoảng độ tuổi nào?',
    options: [
      { id: 'A', text: 'Từ 0–3 tuổi' },
      { id: 'B', text: 'Từ 3–5 tuổi' },
      { id: 'C', text: 'Từ 6–11 tuổi' },
      { id: 'D', text: 'Từ 12–15 tuổi' },
    ],
    correctAnswer: 'C',
    explanation: {
      coreConcept: 'Phân kỳ lứa tuổi trong Sinh lý học thần kinh và Tâm lý học lứa tuổi',
      mechanism: 'Giai đoạn tuổi thơ thứ hai tương ứng với lứa tuổi học sinh tiểu học (6–11 tuổi). Giai đoạn này tiếp nối sau tuổi thơ thứ nhất (3–6 tuổi) và trước lứa tuổi thiếu niên / dậy thì (12–15 tuổi).',
      clinicalPsychology: 'Đây là giai đoạn bước ngoặt khi hoạt động chủ đạo chuyển từ chơi (ở tuổi mẫu giáo) sang học tập (ở trường tiểu học), thúc đẩy cấu trúc thần kinh và tâm lý phát triển nhảy vọt.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-2',
    category: 'Giai đoạn tuổi thơ & Phát triển',
    question: 'Câu 2. Đặc điểm nào sau đây thể hiện sự phát triển hoạt động thần kinh cấp cao ở trẻ từ 6–11 tuổi?',
    options: [
      { id: 'A', text: 'Khả năng tập trung và ức chế còn hoàn toàn chưa phát triển.' },
      { id: 'B', text: 'Các đặc tính cơ bản của quá trình thần kinh gần giống với người lớn.' },
      { id: 'C', text: 'Trẻ không có khả năng phân biệt các mối tương quan cảm ứng.' },
      { id: 'D', text: 'Hoạt động thần kinh không chịu ảnh hưởng của quá trình học tập.' },
    ],
    correctAnswer: 'B',
    explanation: {
      coreConcept: 'Đặc điểm sinh lý thần kinh cấp cao ở tuổi học sinh tiểu học',
      mechanism: 'Ở lứa tuổi 6–11, vỏ bán cầu đại não phát triển hoàn thiện hơn về mặt cấu trúc và chức năng; quá trình myelin hóa sợi thần kinh gần như hoàn tất; sự cân bằng giữa hưng phấn và ức chế đạt mức tương đương người lớn.',
      clinicalPsychology: 'Trẻ bắt đầu hình thành khả năng tự kiềm chế, tập trung chú ý có chủ định trong thời gian dài hơn và có thể tuân thủ tốt các nội quy học đường.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-3',
    category: 'Đường liên hệ thần kinh tạm thời',
    question: 'Câu 3. Ở trẻ 6–7 tuổi, số lượng các đường liên hệ thần kinh tạm thời trên vỏ não có đặc điểm gì?',
    options: [
      { id: 'A', text: 'Giảm mạnh.' },
      { id: 'B', text: 'Không thay đổi.' },
      { id: 'C', text: 'Tăng lên nhiều.' },
      { id: 'D', text: 'Hoàn toàn biến mất.' },
    ],
    correctAnswer: 'C',
    explanation: {
      coreConcept: 'Tính mềm dẻo của vỏ não và sự tạo lập liên kết thần kinh mới',
      mechanism: 'Khi bước vào tuổi đi học (6–7 tuổi), môi trường giáo dục cung cấp một lượng lớn tri thức, kỹ năng và kích thích mới. Điều này kích hoạt mạnh mẽ các synap thần kinh, làm số lượng đường liên hệ tạm thời trên vỏ não tăng vọt.',
      clinicalPsychology: 'Số lượng liên kết tạm thời tăng lên chính là cơ sở giải phẫu - sinh lý học cho khả năng tiếp thu tri thức, hình thành kỹ năng đọc, viết, tính toán và các thói quen hành vi mới.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-4',
    category: 'Đường liên hệ thần kinh tạm thời',
    question: 'Câu 4. Sự gia tăng các đường liên hệ thần kinh tạm thời ở trẻ 6–7 tuổi giúp trẻ phát triển khả năng nào?',
    options: [
      { id: 'A', text: 'Sử dụng ngôn ngữ và xây dựng câu phù hợp với hoàn cảnh.' },
      { id: 'B', text: 'Chỉ ghi nhớ hình ảnh mà không hiểu ý nghĩa.' },
      { id: 'C', text: 'Giảm khả năng giao tiếp với mọi người.' },
      { id: 'D', text: 'Không cần học tập vẫn có thể sử dụng ngôn ngữ thành thạo.' },
    ],
    correctAnswer: 'A',
    explanation: {
      coreConcept: 'Mối liên hệ giữa liên kết vỏ não và năng lực ngôn ngữ',
      mechanism: 'Các đường liên hệ thần kinh tạm thời kết nối giữa trung khu thính giác, thị giác, vận động ngôn ngữ (Broca) và hiểu ngôn ngữ (Wernicke), tạo mạng lưới điều phối phức tạp.',
      clinicalPsychology: 'Giúp trẻ không chỉ lặp lại từ ngữ đơn thuần mà có thể diễn đạt linh hoạt, đặt câu ngữ pháp chuẩn xác và ứng biến lời nói phù hợp với từng hoàn cảnh giao tiếp xã hội.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-5',
    category: 'Hệ thống tín hiệu thứ 2 & Ngôn ngữ',
    question: 'Câu 5. Ở trẻ 6–7 tuổi, hệ thống tín hiệu thứ hai có đặc điểm nào sau đây?',
    options: [
      { id: 'A', text: 'Chưa bắt đầu phát triển.' },
      { id: 'B', text: 'Phát triển đáng kể.' },
      { id: 'C', text: 'Ngừng phát triển hoàn toàn.' },
      { id: 'D', text: 'Bị thay thế hoàn toàn bởi hệ thống tín hiệu thứ nhất.' },
    ],
    correctAnswer: 'B',
    explanation: {
      coreConcept: 'Sự hoàn thiện hệ thống tín hiệu thứ hai theo I.P. Pavlov',
      mechanism: 'Hệ thống tín hiệu thứ hai là hệ thống tín hiệu bằng ngôn ngữ (tiếng nói và chữ viết - tín hiệu của tín hiệu). Ở độ tuổi 6–7, hệ thống này có bước nhảy vọt vượt bậc nhờ học chữ và giao tiếp có chủ đích.',
      clinicalPsychology: 'Sự phát triển đáng kể của hệ thống tín hiệu thứ hai giúp trẻ giải phóng khỏi sự phụ thuộc vào kích thích trực quan cụ thể, mở ra khả năng tư duy khái niệm trừu tượng.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-6',
    category: 'Tư duy & Khái quát hóa nhận thức',
    question: 'Câu 6. Ở trẻ 6–7 tuổi, quá trình tư duy bằng lời nói có sự thay đổi như thế nào?',
    options: [
      { id: 'A', text: 'Không có ảnh hưởng đến hoạt động nhận thức.' },
      { id: 'B', text: 'Giảm dần vai trò trong quá trình nhận thức.' },
      { id: 'C', text: 'Bắt đầu có ảnh hưởng mạnh hơn.' },
      { id: 'D', text: 'Hoàn toàn thay thế mọi hình thức tư duy khác.' },
    ],
    correctAnswer: 'C',
    explanation: {
      coreConcept: 'Chuyển biến từ tư duy trực quan hình tượng sang tư duy ngôn ngữ',
      mechanism: 'Vỏ não vùng trán và các liên kết thùy phát triển giúp lời nói đóng vai trò điều chỉnh hành vi và định hướng quá trình phân tích - tổng hợp trong não bộ.',
      clinicalPsychology: 'Tư duy bằng lời nói bắt đầu chiếm vị thế chi phối, giúp trẻ lập kế hoạch hành động, suy luận logic và giải quyết các nhiệm vụ nhận thức phức tạp hơn.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-7',
    category: 'Hệ thống tín hiệu thứ 2 & Ngôn ngữ',
    question: 'Câu 7. Ngôn ngữ thầm ở trẻ có đặc điểm nào sau đây?',
    options: [
      { id: 'A', text: 'Là hình thức ngôn ngữ chỉ được sử dụng khi giao tiếp với người khác.' },
      { id: 'B', text: 'Là biểu hiện ngôn ngữ bắt đầu xuất hiện trong giai đoạn này.' },
      { id: 'C', text: 'Là khả năng nghe và bắt chước âm thanh của người lớn.' },
      { id: 'D', text: 'Là hình thức ngôn ngữ chỉ xuất hiện ở người trưởng thành.' },
    ],
    correctAnswer: 'B',
    explanation: {
      coreConcept: 'Sự xuất hiện của Ngôn ngữ thầm / Ngôn ngữ bên trong (Inner Speech)',
      mechanism: 'Quá trình ức chế vận động cơ quan phát âm phát triển, cho phép xung thần kinh ngôn ngữ diễn ra trong vỏ não mà không cần co bóp dây thanh quản và cơ môi miệng.',
      clinicalPsychology: 'Theo L.S. Vygotsky, ngôn ngữ thầm (ngôn ngữ bên trong) phát triển từ ngôn ngữ vị kỷ (nói thành tiếng một mình) để trở thành công cụ đắc lực cho tư duy thầm kín, tự suy nghĩ và tự điều chỉnh hành vi.'
    },
    difficulty: 'Nâng cao'
  },
  {
    id: 'cau-8',
    category: 'Tư duy & Khái quát hóa nhận thức',
    question: 'Câu 8. Ở giai đoạn 6–7 tuổi, trẻ thường khái quát đồ vật dựa trên yếu tố nào?',
    options: [
      { id: 'A', text: 'Màu sắc của đồ vật.' },
      { id: 'B', text: 'Kích thước của đồ vật.' },
      { id: 'C', text: 'Khả năng hành động và công dụng của đồ vật.' },
      { id: 'D', text: 'Vị trí của đồ vật trong không gian.' },
    ],
    correctAnswer: 'C',
    explanation: {
      coreConcept: 'Đặc điểm khái quát hóa và phân loại ở lứa tuổi đầu tiểu học',
      mechanism: 'Não bộ của trẻ ở tuổi 6–7 đã vượt qua giai đoạn chỉ dựa vào thuộc tính hình thức bên ngoài (như màu sắc hay kích thước) để gắn kết tri thức với chức năng hoạt động thực tiễn.',
      clinicalPsychology: 'Trẻ nhận diện và gom nhóm đồ vật dựa trên mục đích sử dụng, công năng và khả năng thao tác thực tế với đồ vật đó.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-9',
    category: 'Tư duy & Khái quát hóa nhận thức',
    question: 'Câu 9. Ví dụ nào sau đây thể hiện cách khái quát đồ vật dựa trên khả năng hành động và công dụng?',
    options: [
      { id: 'A', text: 'Trẻ phân biệt hai chiếc cốc dựa vào màu sắc.' },
      { id: 'B', text: 'Trẻ nhận biết cái tai dùng để nghe, mắt dùng để nhìn.' },
      { id: 'C', text: 'Trẻ phân biệt đồ vật dựa vào kích thước lớn nhỏ.' },
      { id: 'D', text: 'Trẻ nhận biết đồ vật dựa vào vị trí đặt chúng.' },
    ],
    correctAnswer: 'B',
    explanation: {
      coreConcept: 'Minh họa cụ thể về khái quát hóa công dụng chức năng',
      mechanism: 'Tư duy của trẻ gắn liền khái niệm về cơ quan/đồ vật với chức năng sinh lý và hành động thực hiện: "tai để nghe", "mắt để nhìn", "bút để viết", "ghế để ngồi".',
      clinicalPsychology: 'Đây là minh chứng rõ rệt cho sự chuyển giao từ nhận thức cảm tính thuần túy sang nhận thức lý tính bước đầu ở trẻ tiểu học.'
    },
    difficulty: 'Cơ bản'
  },
  {
    id: 'cau-10',
    category: 'Sinh trưởng & Yếu tố ảnh hưởng',
    question: 'Câu 10. Theo nội dung bài học, nguyên nhân nào có thể góp phần làm tăng tốc độ sinh trưởng và phát triển của trẻ?',
    options: [
      { id: 'A', text: 'Sự thay đổi chế độ dinh dưỡng và điều kiện sống.' },
      { id: 'B', text: 'Việc hạn chế các hoạt động học tập.' },
      { id: 'C', text: 'Sự giảm sút các hoạt động thần kinh cấp cao.' },
      { id: 'D', text: 'Việc hạn chế giao tiếp và sử dụng ngôn ngữ.' },
    ],
    correctAnswer: 'A',
    explanation: {
      coreConcept: 'Hiện tượng gia tốc sinh trưởng và phát triển (Acceleration)',
      mechanism: 'Chế độ dinh dưỡng đầy đủ vi chất, protein kết hợp với điều kiện vệ sinh, chăm sóc y tế và môi trường kích thích phát triển tinh thần làm tăng tiết hormone tăng trưởng (GH) và đẩy nhanh tốc độ trưởng thành của hệ thần kinh.',
      clinicalPsychology: 'Điều kiện sống tối ưu giúp trẻ phát triển vượt bậc cả về thể lực lẫn chức năng tâm sinh lý so với các thế hệ trước.'
    },
    difficulty: 'Cơ bản'
  }
];
