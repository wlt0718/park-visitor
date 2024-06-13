import { defineStore } from "pinia";
export const useorderStore = defineStore('useorderStore', {
    state: () => {
        return {
            list: [],
            merchant: ''
        }
    },
    actions: {
        SET_merchant(value){
          this.merchant = value
        },
        SET_list(data){
          this.list = data
        },
        SET_list_showMinus(index,value){
          this.list[index].showMinus = value
        },
        SET_list_showInput(index,value){
          this.list[index].showInput = value
        },
    },
    getters: {
      geshu: (state) => {
        if(state.list.length === 0){
          return ''
        } else {
          let ge = 0
          for(let i = 0; i < state.list.length; i++){
            if(state.list[i].value) {
              ge = ge + 1
            }
          }
          return ge
        }
      },
      amount: (state) => {
        if(state.list.length === 0){
          return ''
        } else {
          let amont = 0
          for(let i = 0; i < state.list.length; i++){
            if(state.list[i].value) {
              amont = amont + state.list[i].value * state.list[i].amount
            }
          }
          return amont
        }
      }
    }
    
})
