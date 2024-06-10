<script setup>
import { reactive, ref } from 'vue'
import { showDialog } from 'vant';
import { useRoute, useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
const router = useRouter()
const route = useRoute()
const infoStore = userInfoStore()
console.log(router)
const userInfo = reactive({
  mobile: '',
  smsCode: ''
})
function login(){
  if(!userInfo.mobile || !userInfo.smsCode){
    showDialog({
      title: '提示',
      message: '请输入账号和密码'
    })
    return false
  } else {
    infoStore.SET_login(true)
    console.log(infoStore.route)
    infoStore.SET_mobile(userInfo.mobile)
    infoStore.SET_name('随便一个名字')
    if(infoStore.route){
      router.replace({
        name: infoStore.route
      })
    }else{
      router.replace({
        name: 'home'
      })
    }
   
  }
}

/*验证码 */
const smsText = ref('获取验证码')
const smsIsSend = ref(false)
const smsCount = ref(60)
let smsTimer = null
function getSms(){
  smsIsSend.value = true
  smsTimer = setInterval(()=>{
    smsCount.value -= 1
    if(smsCount.value <= 0){
      smsText.value = '重新发送'
      smsIsSend.value = true
      clearInterval(smsTimer)
    }
  }, 1000)
}

</script>
<template>
<div class="login">
  <div class="title">欢迎使用智慧游玩</div>
  <div class="from">
    <div class="from-item">
      <label for="mobile" class="from-label">
        <van-icon name="manager-o" />
      </label>
      <input id="mobile" class="from-input" type="number" max="11" placeholder="请输入手机号" v-model="userInfo.mobile" />
    </div>
    <div class="from-item">
      <label for="mobile" class="from-label">
        <van-icon name="edit" />
      </label>
      <input id="smsCode" class="from-input" type="tel" max="6" placeholder="请输入手机验证码" v-model="userInfo.smsCode"/>
      <div class="sms blue">
        <span v-if="!smsIsSend" @click="getSms">{{ smsText }}</span>
        <span v-else>{{ smsCount }}秒</span>
      </div>
    </div>
  </div>
  <p class="tips">
    未注册手机号验证通过后将自动注册
  </p>
  <div class="btn">
    <van-button block round size="normal" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="login">
      登录
    </van-button>
  </div>
</div>
</template>

<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  padding: 80px 20px 0;
  background-color: #ffffff;
  font-size: 14px;
}
.title {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 50px;
  color: #333333;
}
.tips {
  margin-top: 14px;
  line-height: 1;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  color: #999999;
}
.blue {
  color: #ee0a24;
}
.from-item {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  .from-label {
    flex-shrink: 0;
    width: 50px;
    .van-icon {
      font-size: 30px;
      color: #999999;
    }
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
    &::placeholder {
      color: #999999;
    }
  }
}
.btn {
  margin: 80px 50px 0;
}
</style>