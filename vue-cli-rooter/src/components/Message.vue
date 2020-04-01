<template>
  <div class="message-box" v-if="show">
    <strong>
      <slot name="title"></slot>
    </strong>
    <slot></slot>
    <span class="message-box-close" @click="toggle">X</span>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.$bus.$on("message-close", () => {
      //this.$emit('update:show',false)
      this.toggle();
    });
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.message-box {
  padding: 10px 20px;
}

.message-box-close {
  float: right;
}

.success {
  background: #4fc08d;
  border: 1px solid #42b983;
}

.warning {
  background: #f66;
  border: 1px solid #d63200;
}
</style>