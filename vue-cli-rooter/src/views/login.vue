<template>
    <div>
        <button @click="login()" v-if="!islogin">登录</button>
        <button @click="logout()" v-else>注销</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        methods: {
            login() {
                //window.islogin = true;
                //提交mutition修改状态
                //this.$store.commit('login')
                //action来提交
                // this.$store.dispatch('login','admin').then(()=>{
                //     this.$router.push(this.$route.query.redirect);
                // }).catch(()=>{
                //     alert('用户名或密码错误');
                // })

                this['user/login']('admin').then(()=>{
                    this.$router.push(this.$route.query.redirect);
                }).catch(()=>{
                    alert('用户名或密码错误');
                })
                
            },
            logout(){
                //window.islogin = false;
                this.$store.commit('logout')
            },
            ...mapActions(['user/login','user/logout'])
        },
        computed: {
            // islogin() {
            //     return this.$store.state.user.islogin
            // }
            ...mapState('user',['islogin'])
        },
    }
</script>

<style lang="scss" scoped>


</style>