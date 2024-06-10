<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const active = ref(0);
const popupShow = ref(false)
function xiadan(){
  router.push({
    name: 'merchantorder'
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
      <van-tag>米奇</van-tag>
      <van-tag>年轻人</van-tag>
      <van-tag>标签三</van-tag>
    </div>
    <div class="activity">
      <div>活动一：XXXXXXXXXX</div>
      <div>活动二：XXXXXXXXXX</div>
      <div>活动三：XXXXXXXXXX</div>
    </div>
  </div> 
  <van-tabs v-model:active="active"
    title-active-color="#ee0a24"
    color="#ee0a24"
    sticky
    shrink
  >
    <van-tab title="游玩项目">
      <div class="project-list">
        <div class="item" v-for="item in 10" :key="item">
          <img src="../../assets/jpg/dsn.jpg" alt="" />
          <div class="info">
            <div class="name">激情冲浪</div>
            <div class="score">
              <van-icon name="star" />
              <span class="num">4.9</span>
              <span class="month">月玩人次 1000+</span>
            </div>
            <div class="tag">
              <van-tag type="danger" >刺激</van-tag>
              <van-tag type="danger" >年轻人</van-tag>
              <van-tag type="danger" >夏天</van-tag>
            </div>
            <div>
              <span class="newamt">￥30.00</span>
            </div>
          </div>
          <div class="place">
            <van-button color="linear-gradient(to right, #ff5a30, #ff5a30)" size="mini"
              @click="xiadan"
            >
              立即下单
            </van-button>
          </div>
        </div>
      </div>
    </van-tab>
    <van-tab title="简介">
      <div class="synopsis">
        这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介这是简介简介简介
      </div>
    </van-tab>
    <van-tab title="评价">
      <div class="synopsis">
        暂无评价
      </div>
    </van-tab>
  </van-tabs>
  <van-popup v-model:show="popupShow" position="bottom" round>
    <div class="order">
      person
    </div>
  </van-popup>
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
    border-radius: 5px;
    margin-bottom: 15px;
    display: flex;
    img {
      flex-shrink: 0;
      border-radius: 5px;
      width: 120px;
      margin-right: 12px;
      display: block;
    }
    .info {
      flex-grow: 1;
      padding: 8px 0;
      .name {
        font-size: 14px;
        color: #666666;
        font-weight: 600;
        margin-bottom: 5px;
      }
      .score {
        font-size: 12px;
        color: #ff6034;
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
      display: flex;
      align-items: center;
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
  font-size: 14px;
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
</style>