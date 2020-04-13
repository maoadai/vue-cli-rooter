<template>
    <div>
        <!-- 1,label标签 -->
        <label v-if="label">{{label}}</label>
        <!-- 2,插槽 -->
        <slot></slot>
        <!-- 3,错误提示 -->
        <p v-if = 'error'>{{error}}</p>
    </div>
</template>

<script>

    import Schema from 'async-validator'

    export default {
        inject:['form'],
        props:{
            label:{
                type:String,
                default:''
            },
            prop:String, //校验的字段名称
        },
        data(){
            return {
                error:''
            }
        },
        mounted(){
            this.$on('validate',()=>{
                this.validate();
            });
        },
        methods: {
            validate() {
                //1,获取校验规则和值
                const rules = this.form.rules[this.prop];
                const value = this.form.model[this.prop]

                //2.获取校验器,Schema的参数，key是校验的字段名，value是校验的规则
                const validator = new Schema({[this.prop]:rules})

                //3.执行校验,参数1是校验目标
                return new Promise((resolve,reject)=>{
                    validator.validate({[this.prop]:value},(errors)=>{
                    if(errors){
                        //校验失败
                        this.error = errors[0].message
                        reject()
                    }else{
                        //校验通过
                        this.error = '';
                        resolve();
                    }
                })
                })
                
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>