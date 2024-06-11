<script setup>
import { reactive, ref } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
console.log('page')
const router = useRouter()
const value1 = ref(0);
const value2 = ref('a');
const checkDate = ref('date')
const canlendarShow = ref(false)
const customDate = ref('')
function onConfirm(value){
  canlendarShow.value = false
  const state = value[0].getMonth() + 1 + '月'+value[0].getDate() + '日' 
  const end = value[1].getMonth() + 1 + '月'+value[1].getDate() + '日' 
  customDate.value = state + '-' + end
}
const dateChange = (value) =>{
  console.log(value)
  if(value === 'custom'){
    canlendarShow.value = true
  }
}
const dateList = ref([
  { text: '今日', value: 'date' },
  { text: '本周', value: 'week' },
  { text: '本月', value: 'month' },
  { text: `自定义时间${customDate.value}`, value: 'custom' },
])
const option1 = [
  { text: '全部商家', value: 0 },
  { text: '上海迪士尼', value: 1 },
  { text: '上海欢乐谷', value: 2 },
];
const option2 = [
  { text: '全部项目', value: 'a' },
  { text: '项目二', value: 'b' },
  { text: '项目三', value: 'c' },
];
function toinfo(){
    router.push({
        name: 'orderinfo',
    })
}
</script>
<template>
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
<!-- 日期区间 -->
<van-calendar v-model:show="canlendarShow" type="range" @confirm="onConfirm" 
color="#ee0a24" allow-same-day position="top"
/>
<div class="list">
    <div class="item">
        <div class="header">
            <div class="header-left">
                <div class="name">上海迪士尼</div>
                <van-icon name="arrow" />
            </div>
            <div class="status">已完成</div>
        </div>
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="name">激流勇进</div>
                <div class="desc">票数：3张</div> 
                <div class="desc">下单时间: 2024-04-30 11:50</div>
                <div class="desc">入园时间: 2024-04-30 12:00</div>
            </div>
            <div class="amt">
                ￥300
            </div>
        </div>  
    </div>
    <div class="item">
        <div class="header">
            <div class="header-left">
                <div class="name">上海迪士尼</div>
                <van-icon name="arrow" />
            </div>
            <div class="status">已完成</div>
        </div>
        <div class="body">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="name">激流勇进</div>
                <div class="desc">票数：3张</div> 
                <div class="desc">下单时间: 2024-04-30 11:50</div>
                <div class="desc">入园时间: 2024-04-30 12:00</div>
            </div>
            <div class="amt">
                ￥300
            </div>
        </div>  
    </div>
    <div class="item">
        <div class="header">
            <div class="header-left">
                <div class="name">上海迪士尼</div>
                <van-icon name="arrow" />
            </div>
            <div class="status">已完成</div>
        </div>
        <div class="body">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="name">激流勇进</div>
                <div class="desc">票数：3张</div> 
                <div class="desc">下单时间: 2024-04-30 11:50</div>
                <div class="desc">完成时间: 2024-04-30 12:00</div>
            </div>
            <div class="amt">
                ￥300.00
            </div>
        </div>  
    </div>
</div>
</template>
<style lang="scss" scoped>
.list {
    margin: 12px;
}
.item {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    .header-left {
        flex-grow: 1;
        display: flex;
        font-size: 16px;
        color: #333;
        font-weight: 600;
        .name {
            margin-right: 6px;
        }
    }
    .status {
        font-size: 14px;
        color: #666;
    }
  }
  .body {
    display: flex;
    align-items: center;
  }
  img {
    flex-shrink: 0;
    width: 80px;
    height: 70px;
    margin-right: 12px;
    border-radius: 6px;
    display: block;
  }
  .info {
    flex-grow: 1;
    font-size: 12px;
    color: #333333;
    .name {
        font-size: 14px;
        margin-bottom: 5px;
    }
    .desc {
        color: #999999;
        margin-bottom: 5px;
    }
  }
  .amt {
    color: #333333;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>