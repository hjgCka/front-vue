<template>
    <div class="talk">
        <button @click="getTalk">获取土味情话</button>
        <ul v-for="item in talkList">
            <li :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { useTalkStore } from '@/store/loveTalk'
    import { storeToRefs } from 'pinia'

    const talkStore = useTalkStore()
    const { talkList } = storeToRefs(talkStore)

    talkStore.$subscribe((mutate, state) => {
        console.log('数据发生了变化', mutate, state)
        localStorage.setItem('talkList', JSON.stringify(talkStore.talkList))
    })

    function getTalk() {
        talkStore.getOneTalk()
    }
</script>

<style scoped>
    .talk {
        background-color: orange;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px;
    }
</style>