//该文件用于创建vuex中，最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 
vuex用于大型项目。
actions, mutations, state 类似spring-mvc。
业务、逻辑、数据要分离，用于复杂逻辑是比较合适的。
复杂逻辑需要分层、复用。
*/

// 在actions写ajax请求和业务逻辑，并且可以通过dispatch到另一个action
const actions = {
    //不定义这2个action了，直接调用mutations
    /* add(context, val) {
        context.commit('ADD', val)
    },
    dec(context, val) {
        context.commit('DEC', val)
    }, */
    addOdd(context, val) {
        // 从context拿到state中的值
        if (context.state.sum % 2) {
            context.commit('ADD', val)
            // 不要在actions直接操纵state.sum
            // context.state.sum += val
        }
    },
    addWait(context, val) {
        setTimeout(() => {
            context.commit('ADD', val)
        }, 500);
    }
}
const mutations = {
    ADD(state, val) {
        // console.log('mutations中的ADD', a, b)
        state.sum += val
    },
    DEC(state, val) {
        state.sum -= val
    }
}
const state = {
    sum: 0,
    school: '尚硅谷',
    subject: '前端'
}

const getters = {
    tenSum(state) {
        return state.sum * 10
    },
    // 通过方法访问时，写法有点不同。需要返回一个函数，这里为了简便写了一个函数表达式
    multiplySum: function(state) {
        return val => state.sum * val
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})