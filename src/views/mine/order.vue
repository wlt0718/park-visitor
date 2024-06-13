<script setup>
import { reactive, ref } from 'vue'
import { userInfoStore } from '../../stores/user.js'
import { useRouter } from 'vue-router'
console.log('page')
const router = useRouter()
const value1 = ref(0);
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
function toinfo(){
    router.push({
        name: 'orderinfo',
    })
}
</script>
<template>
<van-sticky>
<van-dropdown-menu active-color="#ee0a24">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="checkDate" :options="dateList" @change="dateChange" />
</van-dropdown-menu>
</van-sticky>
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
        <div class="guide">
            导游：崔一
        </div>
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">迪士尼游艇</div>
                    <div class="jiage">￥300</div>
                </div>
                <div class="info-num">价格：￥100 / 位</div>
                <div class="desc">数量：x 3</div> 
            </div>
        </div> 
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">天地双雄</div>
                    <div class="jiage">￥500</div>
                </div>
                <div class="info-num">价格：50 / 位</div>
                <div class="desc">数量：x 10</div> 
            </div>
        </div>
        <div class="all">
            <div class="jiage">合计<span class="amount">￥800</span></div>
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
        <div class="guide">
        </div>
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">恐龙乐园</div>
                    <div class="jiage">￥180</div>
                </div>
                <div class="info-num">价格：￥60 / 位</div>
                <div class="desc">数量：x 3</div> 
            </div>
        </div> 
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">迪士尼摩天轮</div>
                    <div class="jiage">￥160</div>
                </div>
                <div class="info-num">价格：80 / 位</div>
                <div class="desc">数量：x 2</div> 
            </div>
        </div>
        <div class="all">
            <div class="jiage">合计<span class="amount">￥800</span></div>
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
        <div class="guide">
            导游：崔一
        </div>
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">迪士尼游艇</div>
                    <div class="jiage">￥300</div>
                </div>
                <div class="info-num">价格：￥100 / 位</div>
                <div class="desc">数量：x 3</div> 
            </div>
        </div> 
        <div class="body" @click="toinfo">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div class="info">
                <div class="info-head">
                    <div class="name">天地双雄</div>
                    <div class="jiage">￥500</div>
                </div>
                <div class="info-num">价格：50 / 位</div>
                <div class="desc">数量：x 10</div> 
            </div>
        </div>
        <div class="all">
            <div class="jiage">合计<span class="amount">￥800</span></div>
        </div>  
    </div>
</div>
</template>
<style lang="scss" scoped>
.list {
    margin: 12px;
}
.item {
  padding: 12px;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 7px;

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
  .guide {
    font-size: 14px;
    color: #333333;
    margin-bottom: 7px;
    padding-bottom: 7px;
    border-bottom: 1px solid #f0f0f0;
  }
  .body {
    padding: 0 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    &:last-child {
        margin-bottom: 0;
    }
  }
  img {
    flex-shrink: 0;
    width: 80px;
    height: 60px;
    margin-right: 12px;
    border-radius: 6px;
    display: block;
  }
  .info {
    flex-grow: 1;
    font-size: 12px;
    color: #666666;
    .info-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        font-size: 14px;
        font-weight: 600;
        color: #333333;
        margin-bottom: 8px;
    }
    .info-num {
        margin-bottom: 6px;
    }
  }
  .all {
    font-size: 14px;
    color: #666666;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .amount {
        font-size: 16px;
        color: #333333;
        margin-left: 5px;
        font-weight: 600;
    }
  }
}
</style>