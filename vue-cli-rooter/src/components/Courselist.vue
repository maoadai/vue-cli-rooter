<template>
  <div>
    <div>
      <!-- 条件渲染 -->
      <p v-if="courses.length == 0">没有任何商品</p>
      <!-- 列表渲染 -->
      <div
        v-for="c in courses"
        :key="c.name"
        :class="{active:(selectedCourse===c.name)}"
        @click="onclick(c)"
      >
        {{c.name}}-{{c.price | currency('$')}}
        <!-- <nav>
          <router-link :to="`/about/${c.name}`">{{c.name}}-{{c.price | currency('$')}}</router-link>
        </nav> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courselist",
  data() {
    return {
      //该状态与外部无关属于组件内部的，所以放在组件内部，作为数据
      selectedCourse: ""
    };
  },
  props: {
    //新增课程时需要对courses赋值，因此将courses作为属性传递
    courses: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  filters: {
    currency(value, symbol) {
      //使用过程中，不传参数的话，就默认传递管道符号前面的参数
      return symbol + value;
    }
  },methods: {
    onclick(c) {
      this.selectedCourse = c.name;
      this.$router.push({
        name:'detail',
        params:{name:c.name}
      })
    }
  },
};
</script>

<style scoped>
.active {
  background-color: aquamarine;
}
</style>