<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function next(){
  router.replace({
    name: 'merchantInfo'
  })
}
function tohome(){
  router.replace({
    name: 'home'
  })
}
</script>
<template>
  <div class="icon">
    <van-icon name="passed" />
    <div>
        <div><span>下单成功！</span></div>
        <div class="tips">请前往入口核查进入</div>
    </div>
  </div>
  <div class="func">
    <van-button block round color="linear-gradient(to right, #ff6034, #ee0a24)" @click="next">继续下单</van-button>
    <van-button block round plain color="#ee0a24" @click="tohome">返回首页</van-button>
  </div>
</template>
<style lang="scss" scoped>
.icon {
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #666666;
    font-weight: 600;
}
.tips {
    margin-top: 8px;
    font-size: 14px;
    font-weight: normal;
    color: #666666;
}
.van-icon {
    color: #07c160;
    font-size: 55px;
    margin-right: 14px;
}
.func {
    margin-top: 40px;
    padding:0 70px;
    .van-button {
        margin-bottom: 15px;
    }
}
</style>