<script>
export default {
  name: 'FooterButton',
  props: {
    /* 按钮文字 */
    buttonText: String,

    /* 按钮颜色 */
    color: {
      type: String,
      default: 'linear-gradient(to right, #ff6034, #ee0a24)'
    },
  },
  emits: ['buttonClick'],
  methods: {
  }
}
</script>
<template>
  <footer class="page-footer">
    <div class="footer-content">
      <van-button block round 
        size="normal"
        :color="color"
        @click="$emit('buttonClick')"
      >{{ buttonText }}</van-button>
    </div>
  </footer>
</template>
<style>
.page-footer {
  width: 100%;
  background-color: #FFF;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.footer-content {
  margin: 12px;
}
</style>