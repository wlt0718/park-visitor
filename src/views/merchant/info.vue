<script setup>
import { ref,reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useorderStore } from '../../stores/order.js'
const useOrder = useorderStore()
const router = useRouter()
const route = useRoute()
const active = ref(0);
const data = reactive([
  {
    id: 0,
    merchantName: '上海迪士尼',
    address: '上海市浦东新区川沙镇黄赵路310号',
    label: ['米奇', '年轻人', '标签三'],
    jianjie: '上海迪士尼乐园占地1.16平方公里，主题园区分为米奇大街、奇想花园、探险岛、宝藏湾、明日世界、梦幻世界、迪士尼·皮克斯玩具总动员。拥有迪士尼城堡、漫威英雄总部、巴斯光年星际营救等游乐项目',
    project: [
      {
        projectId: '1001',
        projectName: '迪士尼游艇',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '1002',
        projectName: '迪士尼摩天轮',
        amount: 80,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '1003',
        projectName: '天地双雄',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
      {
        projectId: '1004',
        projectName: '恐龙乐园',
        amount: 60,
        bili: 10,
        yongjin: 10,
      },
    ]
  },
  {
    id: 1,
    merchantName: '上海共青森林公园',
    address: '上海市杨浦区军工路2000号',
    label: ['轻松', '休闲'],
    jianjie: '上海共青国家森林公园是以森林为主要景观的特色公园，共种植200余种树木，总数达30多万株。公园分为南北两园，北园占地1631亩称为共青森林公园，南园占地239.6亩称为万竹园。南北园风格各异，北园着重森林景色，有丘陵湖泊草地，南园则小桥流水一派南国风光。除观景之外，游人也可在园内骑马，烧烤和垂钓。',
    project: [
      {
        projectId: '2001',
        projectName: '小鲤鱼历险记',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '2002',
        projectName: '4D空间',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '2003',
        projectName: '摩天轮',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
    ]
  },
  {
    id: 2,
    merchantName: '杭州西湖',
    address: '浙江省杭州市西湖区龙井路1号',
    label: ['风景', '年轻人', '自然'],
    jianjie: '西湖南、西、北三面环山，东邻城区，南部和钱塘江隔山相邻，湖中白堤、苏堤、杨公堤、赵公堤将湖面分割成若干水面，湖中有三岛，西湖群山以西湖为中心，由近及远可分为四个层次。 [7]西湖流域内年径流量为1400万立方米，蓄水量近1400万立方米。 [9]西湖是一座设备齐全、管理完善的灌溉济运水库，通过河渠和闸门，为杭州市区及周边农田提供了充足的水源。西湖还可以协助调节钱塘江的水位，防止城市内涝。',
    project: [
      {
        projectId: '3001',
        projectName: '苏堤春晓',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '3002',
        projectName: '云栖竹径',
        amount: 100,
        bili: 20,
        yongjin: 20,
      },
      {
        projectId: '3003',
        projectName: '灵隐禅踪',
        amount: 50,
        bili: 10,
        yongjin: 5,
      },
    ]
  },
  {
    id: 3,
    merchantName: '上海世纪公园',
    address: '上海市浦东新区锦绣路1001号',
    label: ['孩子', '欢乐', '活力'],
    jianjie: '世纪公园以大面积草坪、森林、湖泊为主体，体现了东西方园林艺术与自然的融洽，划分为7个区域：湖滨区、观景区、疏林草坪区、鸟类保护区、乡土田园区、异国园区以及迷你高尔夫球场区。',
    project: [
      {
        projectId: '4001',
        projectName: '海盗船',
        amount: 100,
        bili: 5,
        yongjin: 5,
      },
      {
        projectId: '4002',
        projectName: '旋转木马',
        amount: 100,
        bili: 20,
        yongjin: 20,
      }
    ]
  },
])
const merchantData = ref({
  merchantName: data[Number(route.query.merchant)].merchantName,
  address: data[Number(route.query.merchant)].address,
  jianjie: data[Number(route.query.merchant)].jianjie,
  project: data[Number(route.query.merchant)].project,
  label: data[Number(route.query.merchant)].label,
})
function createStepValue(){
  const arr = []
  for(let i = 0; i < merchantData.value.project.length; i++){
    const data = {
      value: 0,
      showMinus: false,
      showInput: false,
      projectId: merchantData.value.project[i].projectId,
      projectName: merchantData.value.project[i].projectName,
      amount: merchantData.value.project[i].amount,
    }
    arr.push(data)
  }
  useOrder.SET_list(arr)
}
const merchant = Number(route.query.merchant)
if (useOrder.list.length === 0 || merchant !== useOrder.merchant) {
  createStepValue()
  useOrder.SET_merchant(merchant)
}
function valueChange(value,detail){
  const index = useOrder.list.findIndex(el => {
    return el.projectId === detail.name
  })
  if(Number(value) > 0) {
    useOrder.SET_list_showMinus(index,true)
    useOrder.SET_list_showInput(index,true)
  } else {
    useOrder.SET_list_showMinus(index, false)
    useOrder.SET_list_showInput(index, false)
  }
}
function toOrder(){
  let amont = 0
  for(let i = 0; i < useOrder.list.length; i++){
    if(useOrder.list[i].value) {
      amont = amont + 1
    }
  }
  if(!amont) {
    return false
  }
  router.push({
    path: '/merchantorder',
    query: {
      type: route.query.type
    }
  })
}
</script>
<template>
  <div class="header">
    <img src="../../assets/jpg/dsn.jpg" alt="" />
  </div>
  <div class="main">
    <div class="name">上海迪士尼</div>
    <div class="score">
      <van-icon name="star" />
      <span class="num">4.9</span>
      <span class="month">月玩人次 10000+</span>
    </div>
    <div class="tag">
      <van-tag v-for="item in merchantData.label" :key="item"> {{ item }}</van-tag>
    </div>
    <!-- <div class="activity">
      <div>活动一：XXXXXXXXXX</div>
      <div>活动二：XXXXXXXXXX</div>
      <div>活动三：XXXXXXXXXX</div>
    </div> -->
  </div> 
  <van-tabs v-model:active="active"
    title-active-color="#ee0a24"
    color="#ee0a24"
    sticky
    shrink
  >
    <van-tab title="游玩项目">
      <div class="project-list">
        <div class="item" v-for="(item, index) in merchantData.project" :key="item.projectId">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">{{item.projectName}}</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div>
              <span class="newamt">￥{{ item.amount }} / 位</span>
            </div>
          </div>
          <div class="place">
            <van-stepper  theme="round" disable-input
              :min="0"
              v-model="useOrder.list[index].value"
              integer :show-plus="true" 
              @change="valueChange"
              :name="item.projectId"
              :show-minus="useOrder.list[index].showMinus" :show-input="useOrder.list[index].showInput"
            />
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="简介">
      <div class="synopsis">
        {{ merchantData.jianjie }}
      </div>
    </van-tab>
  </van-tabs>
<div class="footer-box"></div>
<div class="footer">
  <div class="footer-left">
    <div class="summary" v-show="useOrder.geshu">
        <div class="wei">已选：项目 <span class="red">{{ useOrder.geshu }}</span> 项</div>
        <div class="amt">共计：<span class="red">{{ useOrder.amount }}</span>元</div>
    </div>
  </div>
  <div class="footer-btn">
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="toOrder" round block>立即下单</van-button>
  </div>
</div>  
</template>
<style scoped lang="scss">
.header {
    img {
        display: block;
        width: 100%;
        height: 150px;
        opacity: 0.8;
        object-fit: cover;
    }
}
.main {
    margin: -30px 0 0;
    padding: 15px;
    padding-bottom: 1px;
    position: relative;
    background-color: rgba($color: #ffffff, $alpha: 1);
    border-radius: 20px 20px 0 0;
    font-size: 12px;
    .name {
        font-size: 16px;
        color: #333;
        font-weight: 600;
        margin-bottom: 6px;
    }
    .score {
      font-size: 12px;
      color: #ff6034;
      margin-bottom: 6px;
    }
    .van-icon {
      margin-right: 2px;
    }
    .month {
      margin: 0 8px;
      color: #999999;
    }
    .average {
      color: #999999;
    }
    .tag {
      .van-tag {
        margin-right: 8px;
        background-color: #fcd7ce;
        color: #ff5a30;
      }
    }
}
:deep(.van-tab--shrink) {
  margin-right: 20px;
}
.synopsis {
  padding: 12px;
  font-size: 12px;
  color: #666666;
  line-height: 1.2;
}
.project-list {
  margin: 12px;
  .item {
    // padding: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 15px;
    height: 90px;
    display: flex;
    img {
      flex-shrink: 0;
      border-radius: 6px;
      width: 110px;
      height: 90px;
      margin-right: 10px;
      display: block;
    }
    .info {
      flex-grow: 1;
      padding: 10px 0;
      .name {
        font-size: 14px;
        color: #666666;
        font-weight: 600;
        margin-bottom: 7px;
      }
      .score {
        font-size: 12px;
        color: #ff6034;
        margin-bottom: 20px;
      }
      .van-icon {
        margin-right: 2px;
      }
      .month {
        margin: 0 8px;
        color: #999999;
      }
    }
    .place {
      margin-right: 10px;
      padding-bottom: 12px;
      display: flex;
      align-items: flex-end;
    }
  }
}
.tag {
  margin: 5px 0;
  .van-tag {
    margin-right: 8px;
    background-color: #fcd7ce;
    color: #ff5a30;
  }
}
.newamt {
  font-size: 16px;
  font-weight: 600;
  color: #ee0a24;
}
.oldamt {
  margin-left: 4px;
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
}
.activity {
  div {
    color: #333333;
    line-height: 1.2;
  }
}
.order {
  padding: 12px;
  padding-top: 20px;
  min-height: 400px;
}

:deep(.van-stepper__plus.van-haptics-feedback) {
  background-color: #ec4054;
  width: 20px;
  height: 20px;
}
:deep(.van-stepper__minus.van-haptics-feedback) {
  border-color: #ec4054;
  height: 20px;
  width: 20px;
  &::before {
    color: #ec4054;
  }
}
:deep(.van-stepper__input) {
  height: 20px;
}
.footer-box {
  height: 70px;
}
.footer {
  width: 100%;
  height: 60px;
  padding: 0 12px;
  background-color: #ffffff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .footer-btn {
    flex-shrink: 0;
    width: 200px;
  }
  .footer-left {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  .checkall {
    font-size: 14px;
    margin-right: 15px;
  }
  .summary {
    font-size: 13px;
    color: #999999;
    .wei {
        margin-bottom: 6px;
    }
    .red {
        font-size: 14px;
        color: #ee0a24;
        margin: 0 3px;
    }
  }
}
</style>