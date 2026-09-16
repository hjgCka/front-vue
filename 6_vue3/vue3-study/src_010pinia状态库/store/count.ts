import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    actions: {
        increment(val: number) {
            this.sum += val
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6
        }
    },
    getters: {
        bigSum(state): number {
            return state.sum * 10
        },
        smallerSum: state => state.sum * 0.1,
        upperSum(state) {
            // 想用this就不能用箭头函数，最好不要用this，避免vscode提示报错，但实际运行并没有错误
            return state.sum + 'AAA'
        }
    }
})