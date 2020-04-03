//1,创建vue实例
const vue = require('vue')

const app = new vue({
    template:`<div>hello world</div>`
})

//2.获取服务端渲染实例
const {createRenderer} = require('vue-server-renderer')
const renderer = createRenderer();

//3.渲染器渲染vue实例
renderer.renderToString(app).then(html=>{
    console.log(html);
    
}).catch(err=>{
    console.log(err);
})