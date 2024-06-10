<script setup>
</script>
<template>
<router-view></router-view>
<van-tabbar route fixed
  active-color="#ee0a24"
  inactive-color="#dd6e7b"
  :safe-area-inset-bottom="true"
  :placeholder="true"
>
  <van-tabbar-item icon="home-o" replace to="/home">游玩</van-tabbar-item>
  <van-tabbar-item icon="search" replace to="/mine">我的</van-tabbar-item>
</van-tabbar>
</template>
<style lang="scss" scoped>
.van-tabbar-item--active {
  font-weight: 600;
}
</style>