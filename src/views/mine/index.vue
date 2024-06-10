<script setup>
import { userInfoStore } from '../../stores/user.js'
import { useRoute, useRouter } from 'vue-router'
const infoStore = userInfoStore()
const router = useRouter()
const route = useRoute()
function login(){
    console.log(route)
    infoStore.SET_route(route.name)
    router.replace({
        name: 'login'
    })
}
function reviseMyInfo(){
    router.push({
        name: 'revise'
    })
}
function toMyorder(){
    router.push({
        name: 'myorder'
    })
}
</script>
<template>
<div class="header"  v-if="infoStore.login">
    <div class="userinfo">
        <div class="name">
            <span>{{ infoStore.name }}</span>
        </div>
    </div>
    <div class="change">
        <span @click="reviseMyInfo">修改信息</span>
    </div>
</div>
<div class="nologin" v-else>
    <div>暂未登录</div>
    <div>
        <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" round block
          @click="login" size="small"
        >
        立即登录
        </van-button>
    </div>
</div>
<div class="nav-list">
    <div class="nav-item" @click="toMyorder">
        <van-icon name="wap-home-o" class="left-icon" />
        <span>我的订单</span>
        <van-icon name="arrow" class="right-icon" />
    </div>
</div>
</template>
<style lang="scss" scoped>
.header {
    background-color: #fff;
    width: 100%;
    padding: 24px 20px;
    padding-right: 12px;
    line-height: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .userinfo {
        .name {
            font-size: 20px;
            display: flex;
            align-items: center;
            .label {
                margin-left: 15px;
                padding: 4px 10px 3px;
                border-radius: 3px;
                background-color: #881391;
                font-size: 12px;
                color: #fff;
            }
        }
        .team {
            font-size: 12px;
            color: #666666;
            & :first-child {
                margin-right: 6px;
            }
        }
    }
    .change {
        color: #ee0a24;
        font-size: 14px;
    }
}
.nologin {
    padding: 24px 20px;
    padding-right: 12px;
    background-color: #fff;
    display: flex;
    align-items: center;
    div {
        margin-right: 20px;
    }
}
.nav-list {
    width: 100%;
    margin-top: 18px;
    padding: 0 12px;
    background-color: #fff;
}
.nav-item {
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f5f6f7;
    &:last-child {
        border-color: transparent;
    }
    .left-icon {
        font-size: 24px;
        color: #ee0a24;
    }
    span {
        margin-left: 15px;
        flex-grow: 1;
        font-size: 16px;
        color: #333333;
    }
    .right-icon {
        font-size: 20px;
        color: #666666;
    }
}
</style>