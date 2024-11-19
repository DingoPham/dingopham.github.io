// mixins/translationMixin.js
export default {
    data() {
      return {
        language: 'en', // Ngôn ngữ mặc định
        translations: {
          en: {
            aboutMe: "My name is Dingo, I'm so glad you came here and discovered the wonders of my website.",
            thisWebsite: "This is my Blog made with Vue.js, you can find more by joining me on my Artwork site below.",
            desire: "In the future, I will have more projects for myself or maybe with a group. But no matter what, I really want to make the most of what I have to achieve it.",
            mySkills: "My own assessment",
            otherThings: "- If you are interested, please join me via social networks below -",
            artworkSite: "- My artwork site -",
            abtMe: "ABOUT ME",
            thisWeb: "THIS WEBSITE",
            des: "DESIRE",
            mySki: "MY SKILLS",
            otherThi: "OTHER THINGS",
            footer: "If you have any questions, write to me via my gmail:"
          },
          vi: {
            aboutMe: "Tôi tên là Dingo, tôi rất vui vì bạn đã đến đây và khám phá những điều tuyệt vời trên trang web của tôi.",
            thisWebsite: "Đây là Blog của tôi được làm bằng Vue.js, bạn có thể tìm hiểu thêm bằng cách tham gia trang Artwork của tôi bên dưới.",
            desire: "Trong tương lai, tôi sẽ có nhiều dự án hơn cho riêng mình hoặc có thể với một nhóm. Nhưng dù gì đi nữa, tôi thực sự muốn tận dụng tối đa những gì tôi có để đạt được điều đó.",
            mySkills: "Đánh giá của riêng tôi",
            otherThings: "- Nếu bạn quan tâm, hãy tham gia với tôi qua các mạng xã hội bên dưới -",
            artworkSite: "- Trang Artwork của tôi -",
            abtMe: "THÔNG TIN CÁ NHÂN",
            thisWeb: "TRANG WEB NÀY",
            des: "MÔ TẢ",
            mySki: "CÁC KỸ NĂNG",
            otherThi: "NHỮNG ĐIỀU KHÁC",
            footer: "Nếu bạn có bất cứ câu hỏi gì, hãy nhắn lại qua gmail của tôi:"
          }
        }
      };
    },
    computed: {
      currentTranslations() {
        return this.translations[this.language]; // Lấy bản dịch hiện tại
      }
    },
    methods: {
      changeLanguage(lang) {
        this.language = lang; // Cập nhật ngôn ngữ
      },
      toggleLanguage() {
        this.language = this.language === 'en' ? 'vi' : 'en'; // Chuyển đổi ngôn ngữ
      }
    }
  };
  