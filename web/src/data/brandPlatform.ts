/** Nền tảng thương hiệu WINGROUP — chữ theo PDF nội bộ */

export const brandPlatform = {
  slogan: "Trao đúng từ Tâm – Gieo mùa xứng tầm.",
  sloganMeaning: {
    traoDung:
      "“Trao đúng” không chỉ là trao một sản phẩm, mà là trao đúng giải pháp, đúng nhu cầu và đúng giá trị.",
    gieoMua:
      "“Gieo mùa xứng tầm” là cam kết cùng người làm nông hướng đến những mùa vụ hiệu quả hơn, bền vững hơn và xứng đáng với công sức đã bỏ ra.",
  },
  vision:
    "Trở thành thương hiệu phân phối và cung cấp giải pháp nông nghiệp được tin chọn nhờ sự tử tế, am hiểu thực tiễn và khả năng tạo ra giá trị thiết thực cho người làm nông.",
  mission:
    "Mang những giải pháp nông nghiệp phù hợp đến đúng người, đúng nhu cầu và đúng thời điểm; góp phần nâng cao hiệu quả mùa vụ và giá trị kinh tế cho người làm nông.",
  philosophy: "Lấy điều đúng làm nguyên tắc – Lấy giá trị người trồng làm thước đo.",
  philosophyIntro:
    "WINGROUP tin rằng phía sau mỗi sản phẩm là một mùa vụ, một khoản đầu tư, công sức lao động và kỳ vọng của người làm nông. Vì vậy, kinh doanh có Tâm phải được thể hiện bằng những lựa chọn đúng và có trách nhiệm.",
  philosophyPillars: [
    {
      title: "Không bán thứ không cần thiết",
      text: "Mỗi giới thiệu sản phẩm phải xuất phát từ nhu cầu thực của người trồng.",
    },
    {
      title: "Không nói quá giá trị sản phẩm",
      text: "Thông tin trung thực, không phóng đại, không ngôn ngữ “thần dược”.",
    },
    {
      title: "Không đổi niềm tin lấy lợi ích ngắn hạn",
      text: "Giữ chữ Tâm và trách nhiệm lâu dài hơn một đơn hàng.",
    },
  ],
  valueChain:
    "Khởi nguồn từ Tâm → Dẫn đường bằng Trí → Trọn vẹn Trách nhiệm → Đồng hành cùng người trồng → Hướng đến Thịnh vượng bền lâu.",
  values: [
    {
      key: "tam",
      title: "TÂM",
      lead: "Tử tế là điểm khởi đầu",
      text: "Đặt đạo đức trong kinh doanh lên trước lợi ích ngắn hạn. Mỗi sản phẩm được giới thiệu và mỗi giải pháp được tư vấn phải xuất phát từ giá trị thực sự dành cho người sử dụng.",
      tone: "bg-[#dcfce7] text-[#166534] ring-[#86efac]",
      accent: "text-[#166534]",
    },
    {
      key: "tri",
      title: "TRÍ",
      lead: "Tri thức dẫn đường",
      text: "Đề cao sự am hiểu về cây trồng, mùa vụ, sản phẩm và thực tiễn canh tác. Có kiến thức để hiểu đúng; hiểu đúng để trao đúng.",
      tone: "bg-[#ccfbf1] text-[#0f766e] ring-[#5eead4]",
      accent: "text-[#0f766e]",
    },
    {
      key: "trach",
      title: "TRÁCH",
      lead: "Trách nhiệm với điều mình trao",
      text: "Chịu trách nhiệm với sản phẩm mình phân phối, thông tin mình truyền tải và giải pháp mình tư vấn. Bán được sản phẩm không phải là điểm kết thúc của trách nhiệm.",
      tone: "bg-[#ffedd5] text-[#9a3412] ring-[#fdba74]",
      accent: "text-[#9a3412]",
    },
    {
      key: "dong",
      title: "ĐỒNG",
      lead: "Sát cánh cùng mùa vụ",
      text: "Xây dựng mối quan hệ với đại lý, nhà vườn và người làm nông trên tinh thần cùng chia sẻ, cùng giải quyết vấn đề và cùng hướng đến kết quả tốt hơn.",
      tone: "bg-[#e0f2fe] text-[#075985] ring-[#7dd3fc]",
      accent: "text-[#075985]",
    },
    {
      key: "thinh",
      title: "THỊNH",
      lead: "Cùng tạo sự thịnh vượng",
      text: "Sự phát triển của WINGROUP chỉ có ý nghĩa khi đi cùng sự phát triển của khách hàng và người làm nông; hướng đến mùa vụ hiệu quả hơn, thu nhập tốt hơn và giá trị nông nghiệp được nâng lên.",
      tone: "bg-[#fef9c3] text-[#854d0e] ring-[#fde047]",
      accent: "text-[#854d0e]",
    },
  ],
  manifesto: [
    "Chúng tôi tin rằng người làm nông xứng đáng nhận được nhiều hơn một sản phẩm.",
    "Họ xứng đáng nhận được một lựa chọn đúng, một lời tư vấn có trách nhiệm và một người đồng hành đáng tin cậy.",
    "Bởi phía sau mỗi quyết định trên đồng ruộng là thời gian, công sức và cả một mùa vụ đang được đặt cược.",
    "Vì vậy, WINGROUP lựa chọn bắt đầu từ chữ Tâm, hành động bằng hiểu biết và lấy giá trị thực tế làm câu trả lời.",
  ],
} as const;

export type BrandValue = (typeof brandPlatform.values)[number];
