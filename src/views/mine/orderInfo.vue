<script setup>
</script>
<template>
<div class="header">
    <van-icon name="passed" />
    <span style="margin-left: 10px;">订单已完成</span>
</div>
<div class="item">
        <div class="headera">
            <div class="header-left">
                <div class="name">上海迪士尼</div>
                <van-icon name="arrow" />
            </div>
            <div class="status">已完成</div>
        </div>
        <div class="guide">
            导游：崔一
        </div>
        <div class="bodys">
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
        <div class="bodys">
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
        <div class="yh">
            <div class="label">总计</div>
            <div class="amt">￥800</div>
        </div>
        <div class="yh">
            <div class="label">订单号</div>
            <div class="time">2024043011505915602132165</div>
        </div>
        <div class="yh">
            <div class="label">下单时间</div>
            <div class="time">2024-04-30 11:50:59</div>
        </div>
        <div class="yh">
            <div class="label">完成时间</div>
            <div class="time">2024-04-30 12:05:50</div>
        </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    margin: 20px 12px;
    font-size: 16px;
    color: #333333;
    font-weight: 600;
    display: flex;
    align-items: center;
    .van-icon {
        color: #333333;
        font-size: 26px;
    }
}
.body {
    margin: 0 12px 12px;
    padding: 12px;
    background-color: #ffffff;
    border-radius: 6px;
    margin-bottom: 10px;
    .name {
        font-size: 16px;
        color: #333333;
        margin-bottom: 12px;
    }
    .content {
      display: flex;
      align-items: center;
    }
    img {
      flex-shrink: 0;
      width: 90px;
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
          margin-bottom: 7px;
      }
      .desc {
          color: #999999;
      }
    }
    .amt {
      color: #333333;
      font-weight: 600;
      font-size: 16px;
    }
}
.yh {
    margin-top: 15px;
    font-size: 14px;
    color: #333333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .amt {
        font-weight: 600;
        font-size: 16px;
        &.c {
            font-weight: 500;
            color: #ee0a24;
        }
    }
}
.item {
  margin: 0 12px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 6px;
  .headera {
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
  .bodys {
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