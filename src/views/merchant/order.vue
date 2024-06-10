<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { userInfoStore } from '../../stores/user.js'
import { showConfirmDialog } from 'vant';
const infoStore = userInfoStore()
const router = useRouter()
const route = useRoute()
const value = ref(1)
const popupShow = ref(false)
const checked = ref('1')
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

</script>
<template>
  <div class="project">
    <div class="name">上海迪士尼</div>
    <div class="pros">
      <img src="../../assets/jpg/dsn.jpg" alt="" />
      <div class="info">
        <div class="pros-name">飞跃地平线</div>
        <div class="newamt">￥30 / 位</div>
      </div>
      <van-stepper v-model="value" />
    </div>
    <div class="yh">
        <div class="label">活动信息</div>
        <input type="text" placeholder="点击选择优惠" class="value" readonly 
          @click="popupShow = true"
        />
        <van-icon name="arrow" />
    </div>
  </div>
  <div class="person" v-if="infoStore.login">
    <div class="name">下单人：游客三</div>
    <div class="mobile">联系方式：135****2350</div>
  </div>
  <div class="footer">
    <div class="all">
      <span class="all-text">合计</span>
      <span class="all-num">￥110.00</span>
      <span class="oldamt"> 120.00</span>
    </div>
    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round
      size="small"
      @click="orders"
    >
      确定下单
    </van-button>
  </div>
  <van-popup v-model:show="popupShow" position="bottom" round>
    <div class="order">
      <div class="couponlist">
        <van-radio-group v-model="checked">
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="1"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="2"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="3"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="4"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="7"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
          <div class="coupon">
            <div class="content">
              <div class="right">
                <div class="amount">
                  <span class="num">10</span>
                  <span>元</span>
                </div>
                <div>无门槛</div>
              </div>
              <div class="body">
                <div class="body-text">
                  <div class="coupon-name">满100立减10元</div>
                  <div class="coupon-time">有效期：2024.01.01 - 2024.12.31</div>
                </div>
                <van-radio name="8"></van-radio>
              </div>
            </div>
            <div class="description">
              描述信息------xxxxx
            </div>
          </div>
        </van-radio-group>
      </div>
      <div class="confirm">
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" block round
          size="small"
        >
          确定
        </van-button>
      </div>
    </div>
  </van-popup>
</template>
<style scoped lang="scss">
.person {
  margin: 12px;
  padding: 12px 10px;
  background-color: #ffffff;
  border-radius: 5px;
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
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #f1f1f1;
  }
  .pros {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
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
  margin-top: 8px;
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
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 12px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.all {
  .all-text {
    font-size: 14px;
    color: #666666;
  }
  .all-num {
    color: #ee0a24;
    font-weight: 600;
    font-size: 20px;
  }
  .oldamt {
    color: #999999;
    text-decoration: line-through;
    font-size: 16px;
  }
}
</style>