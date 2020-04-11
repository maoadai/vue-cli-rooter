<template>
  <div>
      <!-- $attrs访问props -->
      <p v-on="$listeners">{{$attrs.msg}}</p>
      <p>{{xx}}</p>
      <button @click="sayhi">say hi</button>
      <!-- provider/inject传参 -->
      <p>{{bar}}</p>
      <!-- 插槽 -->
      <slot></slot>
      <div>
        <slot name="component"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    inject:['bar'],
    data(){
      return {
        xx:"xxx"
      }
    },
    methods: {
      sayhi() {
        //派发事件,派发者和监听者是同一个
        this.$parent.$emit('foo','something from brother')
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>