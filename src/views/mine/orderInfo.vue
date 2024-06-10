<script setup>
</script>
<template>
<div class="header">
    <van-icon name="passed" />
    <span style="margin-left: 10px;">订单已完成</span>
</div>
<div class="body">
    <div class="name">上海迪士尼</div>
    <div class="content">
        <img src="../../assets/jpg/dsn.jpg" alt="" />
        <div class="info">
            <div class="name">激流勇进</div>
            <div class="desc">票数：3张</div> 
        </div>
        <div class="amt">
            ￥340.00
        </div>
    </div> 
    <div class="yh">
        <div class="label">优惠券</div>
        <div class="amt c">减￥40</div>
    </div>
    <div class="yh">
        <div class="label">实际支付</div>
        <div class="amt">￥300</div>
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
</style>