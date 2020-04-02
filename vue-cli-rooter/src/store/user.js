export default {
    namespaced:true,
    state: {
        islogin: false,
        username:''
      },
      mutations: {
        login(state) {
          state.islogin = true;
        },
        logout(state) {
          state.islogin = false;
        },
        setUsername(state,username){
            state.username = username;
        }
      },
      getters:{
          welcome:state=>{
              return state.username + '欢迎回来'
          }
      },
      actions: {
        //参数1是vue传递的上下文context{commit，dispatch，state}
        login({ commit }, username) {
           //延迟1s执行登录
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              if (username === 'admin') {
                commit('login')
                commit('setUsername',username);
                resolve()
              } else {
                reject()
              }
            }, 1000);
          })
        }
    
      },
}