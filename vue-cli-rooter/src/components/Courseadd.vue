<template>
  <div>
    <div>
      <!-- 用户输入事件 -->
      <p>
        <input
          :value="value"
          v-focus
          @input="onInput"
          type="text"
          ref="inp"
          v-on:keydown.enter="addCourse"
        />
        {{value}}
        <!-- 新增按钮 -->
        <button type="button" v-on:click="addCourse">新增按钮</button>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
Vue.directive("focus", {
  inserted(el) {
    el.focus();
  }
});
export default {
  name: "Courseadd",
  props: ["value"], //需要额外接收父组件的value，不需要额外维护course
  methods: {
    addCourse() {
      //派发事件不需要传递参数
      this.$emit("add-course");
      // 不需要维护course
      // this.course = ''
    },
    onInput(e) {
      this.$emit("input", e.target.value); //复用性不够好
    }
  }
};
</script>

<style scoped>
</style>