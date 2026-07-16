<template>
    <div class="car">
        <h2>一辆{{ car.brand }}车，售价{{ car.price }}</h2>
        <button @click="changePrice">修改汽车价格</button>

        <br>

        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeLastGame">改变最后一个游戏</button>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

let car = reactive({brand:'Benc', price: 100})
function changePrice() {
    car.price += 10
}

let games = reactive([
    {id:'123', name: '王者荣耀'},
    {id:'124', name: '元神'},
    {id:'125', name: '三国志'}
])
function changeLastGame() {
    if (games.length > 0) {
        const lastGame = games[games.length - 1]!;
        lastGame.name = '流星蝴蝶剑';
    }
}
</script>

<style scoped>
    .car {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0px 5px;
    }
</style>