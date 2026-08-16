import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated,
         onBeforeUnmount, onUnmounted} from 'vue'

// vue3 没有 beforeCreate created。setup相当于创建前了。

export default function() {
    // 挂载前
    onBeforeMount(() => {
        console.log('挂载前')
    })
    // 挂载完毕
    onMounted(() => {
        console.log('挂载完毕')
    })
    // 更新前
    onBeforeUpdate(() => {
        console.log('更新前')
    })
    // 更新完毕
    onUpdated(() => {
        console.log('更新完毕')
    })
    // 卸载前，卸载通过v-if可以触发
    onBeforeUnmount(() => {
        console.log('卸载前')
    })
    // 卸载完毕
    onUnmounted(() => {
        console.log('卸载完毕')
    })
}