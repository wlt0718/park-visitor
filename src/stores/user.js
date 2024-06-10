import { defineStore } from "pinia";
export const userInfoStore = defineStore('userInfoStore', {
    state: () => {
        return {
            mobile: '',     // 游客联系方式
            name: '',       // 游客姓名
            login: false,   // 是否登录
            route: '',
        }
    },
    actions: {
        SET_mobile(mobile){
            this.mobile = mobile
        },
        SET_login(login){
            this.login = login
        },
        SET_name(name){
            this.name = name
        },
        SET_route(route){
            this.route = route
        },
    }
    
})
