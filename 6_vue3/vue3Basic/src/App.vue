<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->

  <!-- 与vue2不同，不用包裹在一个最外层的div元素中 -->
  <h1>Vue3  Basic</h1>

  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="printTest($event)">TEST</button>

    <p>Has published books:</p>
    <span>{{ publishedBooksMsg }}</span>
  </div>

  <div>
    <!-- v-for -->
    <ul>
      <template v-for="value in myObj" :key="value">
        <li >{{ value }}</li>
        <li>1</li>
      </template>
    </ul>
  </div>

   <div>
    <!-- 表单绑定 -->
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me"/>
   </div>
   

    <div>
      <p>
        Ask a yes/no question:
        <input v-model="question" :disabled="loading" />
      </p>
      <p>{{ answer }}</p>
      <img :src="imgSrc"/>
    </div>

    <div>
      <ButtonCounter></ButtonCounter>
    </div>

    <div>
      <BlogPost title="My journey with Vue"/>
      <BlogPost title="Blogging with Vue"/>
      <BlogPost title="Why Vue is so fun"/>

      <BlogPost v-for="post in posts" :key="post.id" :title="post.title"/>
    </div>

    <div>
      <FancyButton>
        {{ firstName }}
      </FancyButton>
    </div>

    <div>
      <BaseLayout>
        <template v-slot:header>
          <h1>Page title</h1>
        </template>

        <template #default>
            <p>A paragraph for the main content</p>
            <p>And other one.</p>
        </template>

        <template #footer>
            <p>some contact info</p>
        </template>
      </BaseLayout>
    </div>

    <!-- 作用域插槽 -->
     <div>
        <MyComponent v-slot="slotProps">
            <p>{{ slotProps.text }}</p>
            <p>{{ slotProps.count }}</p>
        </MyComponent>

        <MyComponent v-slot="{text, count}">
            <p>{{ text }}</p>
            <p>{{ count }}</p>
        </MyComponent>

        <MyComponent>
            <template #header="headerProps">
              <!-- 这是一个对象，可访问属性message -->
              {{ headerProps }}
            </template>
        </MyComponent>

        <!-- 这个组件用法有点不同，父组件为某个具名插槽提供了一份模板，
         但是子组件内部有很多相同名称的具名插槽。 -->
        <FancyList>
            <template #item="{body, username, likes}">
              <div class="item">
                <p>{{ body }}</p>
                <p>by {{ username }} | {{ likes }} likes</p>
              </div>
            </template>
        </FancyList>
     </div>

     <div>
        <MouseComponent></MouseComponent>
     </div>
</template>

<script setup lang="ts">
// 通过 <script setup>避免繁琐地暴露状态和方法，这是在单文件组件中的用法
// 如果不使用单文件组件，可以使用setup()方法
import {ref, computed, reactive, watch, onMounted} from 'vue'
import ButtonCounter from './components/ButtonCounter.vue'
import BlogPost from './components/BlogPost.vue'
import FancyButton from './components/FancyButton.vue'
import BaseLayout from './components/BaseLayout.vue'
import MyComponent from './components/MyComponent.vue'
import FancyList from './components/FancyList.vue'
import MouseComponent from './components/MouseComponent.vue'

onMounted(() => {
  console.log('component is mounted')
})

const count = ref(0)

function increment() {
  count.value++
}

// 计算属性
const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 如果使用reactive不用加上.value
const publishedBooksMsg = computed(() => {
  return author.books.length > 0? 'Yes' : 'No'
})

const firstName = ref('John')
const lastName = ref('Doe')
// 可写计算属性
const fullName = computed({
  get() {
    return firstName.value + ' ' + lastName.value
  },
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法。
    // 不加默认值ts会报错，因为分割可能出现的元素不足2，即不可将undefined赋值给string
    [firstName.value = '', lastName.value = ''] = newValue.split(' ')
  }
})

// v-for
const myObj = ref({
  title: 'How to do',
  author: 'Jack',
  publishAt: Date.now()
})

// 事件处理
function printTest(event: Event) {
  const targetElement = event.target as Element;
  // ?. 可选链操作符
  console.log(targetElement?.tagName)
}

const message = ref('hello')

const imgSrc = ref('')
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    loading.value = true
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      let data = await res.json();
      answer.value = data.answer

      imgSrc.value = data.image
    } catch(error) {
      answer.value = 'Error! Could not reach the API. ' + error
    } finally {
      loading.value = false
    }
  }
})

const posts = ref([
  {id:1, title:"My journey with Vue"},
  {id:2, title:"Blogging with Vue"},
  {id:3, title:"Why Vue is so fun"}
])
</script>

<style scoped>

</style>
