export default {
    namespaced: true,
    actions : {
        //不定义这2个action了，直接调用mutations
        /* add(context, val) {
            context.commit('ADD', val)
        },
        dec(context, val) {
            context.commit('DEC', val)
        }, */
        addOdd(context, val) {
            console.log('add_action', this)
            if (context.state.sum % 2) {
                context.commit('ADD', val)
            }
        },
        addWait(context, val) {
            setTimeout(() => {
                context.commit('ADD', val)
            }, 500);
        }
    },
    mutations: {
        ADD(state, val) {
            console.log('add_mutation', this)
            state.sum += val
        },
        DEC(state, val) {
            state.sum -= val
        }
    },
    state: {
        sum: 0,
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        tenSum(state) {
            console.log('tensum访问', this)
            return state.sum * 10
        },
        multiplySum: function(state) {
            return val => state.sum * val
        }
    }
}