import { defineStore } from "pinia";
import axios from 'axios';
import { nanoid } from 'nanoid';
import { reactive } from "vue";

// export const useTalkStore = defineStore('talk', {
//     actions: {
//         async getOneTalk() {
//             let result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1');
//             let imgUrl = result.data[0].url;

//             let obj = {id: nanoid(), title: imgUrl};
//             this.talkList.push(obj);
//         }
//     },
//     // 真正存储数据的地方
//     state() {
//         return {
//             talkList: [
//                 {id:'0001', title:'篮球'},
//                 {id:'0002', title:'足球'},
//                 {id:'0003', title:'乒乓球'},
//                 {id:'0004', title:'羽毛球'}
//             ]
//         }
//     }
// })


// 组合式写法
export const useTalkStore = defineStore('talk', () => {
    const talkList = reactive(
        [
            {id:'0001', title:'篮球'},
            {id:'0002', title:'足球'},
            {id:'0003', title:'乒乓球'},
            {id:'0004', title:'羽毛球'}
        ]
    )

    async function getOneTalk() {
        let result = await axios.get('https://api.thecatapi.com/v1/images/search?limit=1');
        let imgUrl = result.data[0].url;

        let obj = {id: nanoid(), title: imgUrl};
        talkList.push(obj);
    }

    return {
        talkList, getOneTalk
    }
})