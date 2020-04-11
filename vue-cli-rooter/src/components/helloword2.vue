<template>
    <div>
        <button>say hi 2</button>
    </div>
</template>

<script>
    export default {
    mounted(){
      //监听事件
      this.$parent.$on('foo',msg=>{
        console.log(msg);
      })
    },
    }
</script>

<style lang="scss" scoped>

</style>