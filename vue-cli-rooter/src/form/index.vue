<template>
  <div>
      <!-- 设置数据模型和校验规则 -->
    <KForm :model="model" :rules="rules" ref="loginForm">
      <KFormItem label="用户名" prop='username'>
        <Kinput v-model="model.username" placeholder="请输入用户名"></Kinput>
      </KFormItem>
      <KFormItem label="密码" prop='password'>
        <Kinput v-model="model.password" type="password" placeholder="请输入密码"></Kinput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登录</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import Kinput from "./Kinput.vue";
import KFormItem from "./KFormItem.vue";
import KForm from "./KForm.vue";
import Notice from '@/components/Notice.vue';

export default {
  components: {
    Kinput,
    KFormItem,
    KForm
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },methods: {
      onLogin() {
        //全局校验方法
        this.$refs.loginForm.validate(isvalid=>{
            if(isvalid){
                console.log("submit login!");
                
            }else{
                // alert("检验失败")
                this.$create(Notice,{
                    title:'校验失败',
                    message:"检验信息，校验错误"
                }).show()
            }
        })
      }
  },
};
</script>

<style lang="scss" scoped>
</style>