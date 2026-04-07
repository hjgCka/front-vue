import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
    namespaced: true,
    actions : {
        // 这里第二个参数，可以是对象，也可以是单个值
        addWangPerson(context, payload) {
            if (payload.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', payload)
            } else {
                alert('必须姓王')
            }
        },
        addRandomPerson({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(
                response => {
                    // console.log(response)
                    //自动完成了json转换为字符串，但是数据都在data下
                    const personName = response.data[0].name
                    const personObj = {id:nanoid(), name: personName}
                    commit('ADD_PERSON', personObj)
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, payload) {
            state.personList.unshift(payload)
        }
    },
    state: {
        personList: [
            {id:'001', name: 'Jack'}
        ]
    },
    getters: {
        personLength(state) {
            return state.personList.length
        }
    }
}