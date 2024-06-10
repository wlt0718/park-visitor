import { defineStore } from "pinia";
export const userPlayListStore = defineStore('userPlayListStore', {
    state: () => {
        return {
            data: [
                {
                    id: 1,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 20,
                    amount: 60,
                    proportion: 5,
                    income: 60,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                {
                    id: 2,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 10,
                    amount: 60,
                    proportion: 5,
                    income: 30,
                    time: '2024年04月29日 11:30:30',
                    status: 1,
                    failText: ''
                },
                {
                    id: 3,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 2,
                    failText: ''
                },
                {
                    id: 4,
                    name: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                {
                    id: 5,
                    name: '上海方特世界',
                    project: '方特世界游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 1,
                    failText: ''
                },
                {
                    id: 6,
                    name: '上海方特世界',
                    project: '方特世界游艇',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 1,
                    failText: ''
                },
                {
                    id: 7,
                    name: '上海方特世界',
                    project: '方特世界飞船',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                {
                    id: 8,
                    name: '上海方特世界',
                    project: '方特世界飞船',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                {
                    id: 9,
                    name: '上海环球港',
                    project: '环球港口',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    status: 0,
                    failText: ''
                },
                
            ],
            dataList: [
                {
                    listId: '1000001',
                    merchantId: 1,
                    merchantName: '上海欢乐谷',
                    project: '游艇',
                    projectId: 'pro1',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000002',
                    merchantId: 1,
                    merchantName: '上海欢乐谷',
                    project: '赛车',
                    projectId: 'pro2',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000003',
                    merchantId: 1,
                    merchantName: '上海欢乐谷',
                    project: '欢乐谷游艇',
                    projectId: 'pro3',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000004',
                    merchantId: 2,
                    merchantName: '上海方特世界',
                    project: '飞跃地平线',
                    projectId: 'pro1',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000005',
                    merchantId: 2,
                    merchantName: '上海方特世界',
                    project: '飞跃地平线',
                    projectId: 'pro1',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000006',
                    merchantId: 2,
                    merchantName: '上海方特世界',
                    project: '七个小矮人',
                    projectId: 'pro2',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000007',
                    merchantId: 2,
                    merchantName: '上海方特世界',
                    project: '七个小矮人',
                    projectId: 'pro2',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000008',
                    merchantId: 3,
                    merchantName: '上海环球港',
                    project: '天空奇遇',
                    projectId: 'pro1',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000009',
                    merchantId: 3,
                    merchantName: '上海环球港',
                    project: '天空奇遇',
                    projectId: 'pro1',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000010',
                    merchantId: 3,
                    merchantName: '上海环球港',
                    project: '探险岛',
                    projectId: 'pro2',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
                {
                    listId: '1000011',
                    merchantId: 3,
                    merchantName: '上海环球港',
                    project: '探险岛',
                    projectId: 'pro2',
                    num: 40,
                    amount: 60,
                    proportion: 5,
                    income: 120,
                    time: '2024年04月29日 11:30:30',
                    playStatus: 0,  // 游玩列表是否审核 0审核中 1审核通过 2审核失败
                    playFailText: '',
                    settlement: 0,  // 结算状态，0未结算，1结算成功，2结算失败
                    settlementFailText: '',  // 结算失败原因
                },
            ]

        }
    },
    actions: {
        Set_data_add(value){
            this.data.push(value)
        },
        Set_dataList_add(value){
            this.data.push(value)
        },
        Set_dataList_playStatus(index,value){
            this.data[index].playStatus = value
        },
        Set_dataList_settlement(index,value){
            this.data[index].settlement = value
        }
    }
    
})
