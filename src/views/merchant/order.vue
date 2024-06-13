<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
import { useorderStore } from '../../stores/order.js'
import { showConfirmDialog } from 'vant';
const useOrder = useorderStore()
const infoStore = userInfoStore()
const router = useRouter()
const route = useRoute()
const data = reactive([
  {
    id: 0,
    merchantName: '上海迪士尼',
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
const type = route.query.type
const merchant = data[useOrder.merchant].merchantName
const list = useOrder.list.filter(el => {
  return el.value > 0
})
console.log(list)
function orders(){
  if(!infoStore.login){
    showConfirmDialog({
      title: '提示',
      message: '您还没有登录，暂时无法下单',
      confirmButtonText: '去登录',
      confirmButtonColor: '#ee0a24'
    }).then(() => {
      infoStore.SET_route(route.name)
      router.replace({
        name: 'login'
      })
    }).catch(() => {
    });
  } else {
    router.push({
      name: 'orderSuccess'
    })
  }
}
const guide = ref({
  name: '',
  read: false
})
if(type === 'g') {
  guide.value.name = '崔奕',
  guide.value.read = true
}

</script>
<template>
  <div class="project">
    <div class="name"> {{ merchant }}</div>
    <div class="pros" v-for="item in list" :key="item.projectId">
      <img src="../../assets/jpg/dsn.jpg" alt="" />
      <div class="info">
        <div class="pros-name">{{ item.projectName}}</div>
        <div class="newamt">￥{{ item.amount }} / 位</div>
      </div>
      <div>
        <div class="shu">
           x <span>{{ item.value }} </span>
        </div>
        <div class="zongji"><span class="red">{{ item.value * item.amount }}</span>元</div>
      </div>
    </div>
  </div>
  <div class="person dy">
    <div class="from-item">
      <label for="mobile" class="from-label">
        导游
      </label>
      <input id="mobile" class="from-input" type="text" max="11" placeholder="请输入导游姓名" v-model="guide.name" :readonly="guide.read"/>
    </div>
  </div>
  <div class="person" v-if="infoStore.login">
    <div class="name">下单人：游客三</div>
    <div class="mobile">联系方式：135****2350</div>
  </div>
  <div class="footer-box"></div>
  <div class="footer">
    <div class="footer-left">
      <div class="summary">
          <div class="amt">总计：<span class="red">{{ useOrder.amount }}</span>元</div>
      </div>
    </div>
    <div class="footer-btn">
      <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" @click="orders" round block>确定下单</van-button>
    </div>
  </div>  
</template>
<style scoped lang="scss">
.person {
  margin: 12px;
  padding: 12px 10px;
  background-color: #ffffff;
  border-radius: 5px;
  &.dy {
    padding: 6px 10px;
  }
  .name {
    font-size: 16px;
    font-weight: 600;
    color: #666666;
  }
  .mobile {
    margin-top: 8px;
    font-size: 14px;
    color: #999999;
  }
}
.project {
  margin: 12px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 5px;
  .name {
    color: #666666;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 15px;
    border-bottom: 1px solid #f1f1f1;
  }
  .pros {
    display: flex;
    align-items: flex-start;
    padding: 15px 0;
    border-bottom: 1px solid #f0f0f0;
    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    img {
      display: block;
      width: 100px;
      height: 70px;
      border-radius: 6px;
      margin-right: 15px;
    }
  }
  .info {
    flex-grow: 1;
    .pros-name {
      font-size: 14px;
      color: #666666;
    }
  }
}
.newamt {
  margin-top: 20px;
  font-size: 14px;
  color: #ee0a24;
}
.yh {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #f1f1f1;
    border-bottom: 1px solid #f1f1f1;
    padding: 12px 0;
    font-size: 14px;
    color: #666666;
    .label {
        width: 100px;
    }
    .value {
        flex-grow: 1;
        text-align: left;
    }
    .van-icon {
        font-size: 16px;
    }
}
.order {
  padding-top: 20px;
  background-color: #f5f5f5;
}
.couponlist {
  padding: 0 12px;
  min-height: 200px;
  max-height: 500px;
  overflow: auto;
}
.coupon {
  background-color: #ffffff;
  margin-bottom: 10px;
  padding: 0 12px;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  .content {
    padding: 15px 0;
    display: flex;
    .right {
      color: #ee0a24;
      font-size: 14px;
      .amount {
        margin-bottom: 6px;
      }
      .num {
        font-size: 30px;
        font-weight: 600;
        margin-right: 4px;
      }
    }
    .body {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .body-text {
        flex-grow: 1;
        text-align: center;
        font-size: 14px;
        color: #666666;
        .coupon-name {
            font-weight: 600;
            margin-bottom: 8px;
        }
        .coupon-time {
            font-size: 12px;
        }
      }
    }
  }
  .description {
    border-top: 1px solid #f1f1f1;
    font-size: 12px;
    color: #666666;
    padding: 8px 12px;
  }
}
.confirm {
  border-top: 1px solid #f1f1f1;
  padding: 12px 20px;
  background-color: #ffffff;
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
    width: 180px;
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
    color: #666666;
    .wei {
        margin-bottom: 6px;
    }
    .red {
      color: #ee0a24;
      font-weight: 600;
      font-size: 20px;
      margin: 0 5px;
    }
  }
}
.shu {
  font-size: 14px;
  color: #666666;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  span {
    margin-left: 5px;
    color: #333333;
    font-weight: 600;
    font-size: 16px;
  }
}
.zongji {
  font-size: 14px;
  color: #666666;
  .red {
      color: #ee0a24;
      font-weight: 600;
      font-size: 20px;
      margin-right: 6px;
    }
}
.from-item {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  font-size: 14px;
  .from-label {
    flex-shrink: 0;
    width: 100px;
    color: #666666;
  }
  .from-input {
    flex-grow: 1;
    height: 100%;
    line-height: 1;
    color: #333333;
    &[readonly] {
      color: #999999
    }
    &::placeholder {
      color: #999999;
    }
  }
}

</style>