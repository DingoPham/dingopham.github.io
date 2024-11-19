<template>
    <div>
        <button class='scroll-to-top'
                :style="styleTop"
                @click="toTop"
                :disabled="!isVisible"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
        >
         <i class="fas fa-caret-up tx-c c-black"></i>
        </button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false, // Hiển thị nút scroll-to-top
      isHover: false,   // Trạng thái hover
    };
  },
  computed: {
    styleTop() {
      // Tính toán style dựa trên `isVisible` và `isHover`
      return {
        backgroundColor: this.isHover ? "#ffffff" : this.isVisible ? "#00000060" : "#1d1d1d",
        cursor: this.isVisible ? "pointer" : "not-allowed",
        opacity: this.isVisible ? "1" : "0.5",  
      };
    },
  },
  methods: {
    toTop() {
      // Cuộn về đầu trang
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      // Lắng nghe sự kiện scroll và cập nhật `isVisible`
      const scrollPosition = window.pageYOffset;
      this.isVisible = scrollPosition > 0;
    },
  },
  mounted() {
    // Thêm sự kiện khi component được mount
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Xóa sự kiện khi component bị hủy
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>