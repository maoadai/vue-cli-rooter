<template>
    <div>
        <button @click="login()" v-if="!islogin">登录</button>
        <button @click="logout()" v-else>注销</button>
    </div>
</template>

<script>
    export default {
        methods: {
            login() {
                window.islogin = true;
                this.$router.push(this.$route.query.redirect);
            },
            logout(){
                window.islogin = false;
            }
        },
        computed: {
            islogin() {
                return window.islogin 
            }
        },
    }
</script>

<style lang="scss" scoped>


</style>