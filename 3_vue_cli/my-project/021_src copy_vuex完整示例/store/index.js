//该文件用于创建vuex中，最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'
import personOptions from './person'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        count: countOptions,
        person: personOptions
    }
})