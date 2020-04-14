<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  componentName:'KForm',
  provide() {
    return {
      //将表单实例直接传递给后代
      form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: Object
  },
  created () {
     this.fields = [];
     this.$on('testAddField',item=>{
       this.fields.push(item)
     })
  },
  methods: {
    validate(cb) {
      //   全局校验
      // 遍历所有的FormItem。执行他们的validate方法
      // tasks是promise数组
      // const tasks = this.$children
      //   .filter(item => item.prop)
      //   .map(item => item.validate());
      const tasks = this.fields
        .map(item => item.validate());
      
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false));
    }
  }
};
</script>

<style  scoped>
</style>