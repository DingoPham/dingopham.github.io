<template>
    <div ref="contentRef" class="a-c">
      <slot></slot>
    </div>
</template>
  
<script>
  export default {
    name: "AnimatedContent",
    mounted() {
      // Tạo IntersectionObserver
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      });
  
      // Observe phần tử được tham chiếu
      if (this.$refs.contentRef) {
        this.observer.observe(this.$refs.contentRef);
      }
    },
    beforeDestroy() {
      // Hủy bỏ observer khi component bị hủy
      if (this.$refs.contentRef) {
        this.observer.unobserve(this.$refs.contentRef);
      }
      if (this.observer) {
        this.observer.disconnect();
      }
    },
  };
</script>