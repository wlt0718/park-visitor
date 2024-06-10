<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const tabActive = ref(0)

const searchValue = ref('')
const stickyIstop = ref(false)
function sticky(value){
  stickyIstop.value = value.isFixed
}

function toMerchantInfo(){
  router.push({
    name: 'merchantInfo'
  })
}
</script>
<template>
  <div class="index">
    <div class="header-box">
      <div class="header">
        <div class="text">爆款项目限时优惠</div>
        <div class="play">
          <div class="project">
            <img src="../../assets/jpg/dsn.jpg" alt="" />
            <div>上海迪士尼通票</div>
            <div>
              <span></span>
              <span class="newamt">￥100.55</span>
              <span class="oldamt">5000.00</span>
            </div>
          </div>
          <div class="project">
            <img src="../../assets/jpg/huangshan.jpg" alt="" />
            <div>黄山门票</div>
            <div>
              <span></span>
              <span class="newamt">￥99.00</span>
              <span class="oldamt">600.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-sticky @scroll="sticky">
      <div class="merchant-filter" :class="stickyIstop ? 'stickytop':''">
        <div class="search" v-show="stickyIstop">
          <van-search v-model="searchValue" placeholder="请输入游玩商家" />
        </div>
        <div class="tab">
          <span :class="tabActive === 0 ? 'active':''" @click="tabActive = 0">全部</span>
          <span :class="tabActive === 1 ? 'active':''" @click="tabActive = 1">好评优先</span>
          <span :class="tabActive === 2 ? 'active':''" @click="tabActive = 2">备用二</span>
          <span :class="tabActive === 3 ? 'active':''" @click="tabActive = 3">备用三</span>
        </div>
      </div>
    </van-sticky>
    <div class="merchant-list">
      <div class="merchant-item" @click="toMerchantInfo">
        <div class="item-content">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">上海迪士尼</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >米奇</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >标签三</van-tag>
            </div>
            <div class="item-pro">
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">加勒比海盗</div>
                <div>
                  <span class="newamt sp">￥40.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="merchant-item">
        <div class="item-content">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">上海迪士尼</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >米奇</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >标签三</van-tag>
            </div>
            <div class="item-pro">
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">加勒比海盗</div>
                <div>
                  <span class="newamt sp">￥40.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="merchant-item">
        <div class="item-content">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">上海迪士尼</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >米奇</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >标签三</van-tag>
            </div>
            <div class="item-pro">
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">加勒比海盗</div>
                <div>
                  <span class="newamt sp">￥40.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="merchant-item">
        <div class="item-content">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">上海迪士尼</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >米奇</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >标签三</van-tag>
            </div>
            <div class="item-pro">
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">加勒比海盗</div>
                <div>
                  <span class="newamt sp">￥40.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="merchant-item">
        <div class="item-content">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">上海迪士尼</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >米奇</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >标签三</van-tag>
            </div>
            <div class="item-pro">
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">加勒比海盗</div>
                <div>
                  <span class="newamt sp">￥40.50</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
              <div class="pros">
                <img src="" alt="" />
                <div class="names">飞跃地平线</div>
                <div>
                  <span class="newamt sp">￥25.50</span>
                  <span class="oldamt">30.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.index {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  overflow: auto;
}
.header-box {
  background-image: linear-gradient(180deg, #ffb39f 0%,#f5f5f5 50%);
  overflow: hidden;
}
.header {
  margin: 12px;
  padding: 12px;
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  border-radius: 6px;
  .text {
    font-size: 14px;
    color: #333333;
    margin-bottom: 10px;
  }
}
// 375 - 24 - 24
.play {
  display: flex;
  .project {
    width: 155px;
    margin-right: 17px;
    font-size: 14px;
    color: #666666;
    img {
      display: block;
      width: 100%;
      height: 80px;
      background-color: #ffb39f;
      border-radius: 6px;
      margin-bottom: 6px;
    }
    div {
      line-height: 1.3;

    }
  }
  .project:last-child {
    margin-right: 0;
  }
}
.newamt {
  font-size: 14px;
  color: #ee0a24;
  &.sp {
    font-size: 12px;
  }
}
.oldamt {
  margin-left: 4px;
  font-size: 12px;
  color: #999999;
  text-decoration: line-through;
}
.merchant-filter {
  font-size: 14px;
  background-color: #f5f5f5;
  padding-bottom: 10px;
  .tab {
    padding-left: 10px;
  }
  span {
    margin-right: 15px;
    color: #666666;
  }
  .active {
    font-weight: bold;
    color: #333333;
  }
}
.stickytop {
  background-color: #ffffff;
}
.merchant-list {
  margin: 0 12px;
}
.merchant-item {
  padding: 10px;
  box-sizing: content-box;
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 10px;
}
.item-content {
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  img {
    flex-shrink: 0;
    width: 100px;
    height: 70px;
    margin-right: 12px;
    border-radius: 6px;
    display: block;
  }
  .info {
    flex-grow: 1;
    font-size: 12px;
    .name {
      color: #333333;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 7px;
    }
    .score {
      font-size: 12px;
      color: #ff6034;
      margin-bottom: 7px;
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
    .item-pro {
      width: 216px;
      margin-top: 8px;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      .names {
        color: #666666;
        font-size: 12px;
        margin: 4px 0 3px;
      }
      img {
        width: 80px;
        height: 50px;
        display: block;
        border-radius: 5px;
        background-color: #d1c0bb;
      }
    }
  }
}
.name.elli {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>