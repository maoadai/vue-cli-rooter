<template>
    <div>
        <!-- 双向数据绑定：@input :value -->
        <input :value="value" @input="onInput" v-bind="$attrs"> 
    </div>
</template>

<script>
    
    import emitter from '@/mixins/emitter.js';
    
    export default {
        componentName:'Kinput',
        inheritAttrs:false,
        mixins:[emitter],
        props:{
            value:{
                type:String,
                default:''
            }
        },
        methods: {
            onInput(e) {
                this.$emit('input',e.target.value)

                //实施校验，通知父组件
                // this.$parent.$emit('validate')
                this.dispatch('KFormItem','validate')
            }
        },

        
    }
</script>

<style lang="scss" scoped>

</style>