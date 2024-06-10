<script>
export default {
  name: 'LoginToast',
  props: {
    show: {
        type: Boolean,
        default: false
    }
  },
  emits: ['buttonClick'],
  computed: {
    dialogShow(){
      return this.show
    }
  },
  methods: {
  }
}
</script>
<template>
<van-dialog v-model:show="dialogShow" title="标题" show-cancel-button>
</van-dialog>
</template>
<style>

</style>