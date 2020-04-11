<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to yout vue.js App" @click="onClick"/>
    <HelloWorld msg="Welcome to yout vue.js App" ref="hw2">
      <template>
        abc
      </template>
      <template v-slot:component>
        content..............
      </template>
    </HelloWorld>
    <helloword2/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import helloword2 from './components/helloword2.vue'

export default {
  name: 'app',
  provide(){
    //隔代传参，类似于data
    return {
      bar:"barrrrrrrrrrrrrrr",
      app:this
    }
  },
  components: {
    HelloWorld,
    helloword2
  },
  mounted(){
    this.$refs.hw2.xx="balbalababaa"
  },
  methods: {
    onClick() {
      console.log("click me");

      
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
