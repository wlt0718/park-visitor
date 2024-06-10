<script>
export default {
  name: 'PageHisBody',
}
</script>
<template>
  <div class="page-item">
    <div class="page-item-left">
      <slot></slot>
    </div>
    <div class="page-item-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<style>
.page-item {
  margin: 0 12px;
  padding: 12px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}
.page-item+.page-item {
  margin-top: 12px;
} 
.page-item-left {
  flex-grow: 1;
}
.page-item-right {
  flex-shrink: 0;
}
</style>