//nodejs代码
const express = require('express')
const vue = require('vue')
const { createRenderer } = require('vue-server-renderer')
const renderer = createRenderer();

//获取express实例
const server = express();

//编写路由处理不同url的请求
server.get('/', (req, res) => {
    //res.send('<strong>hello word</strong>');
    //1,创建vue实例

    const app = new vue({
        template: `<div>{{msg}}</div>`,
        data(){
            return{
                msg:'vue ssr'
            }
        }
    })

    //2.获取服务端渲染实例
    
    

    //3.渲染器渲染vue实例
    renderer.renderToString(app).then(html => {
        //console.log(html);
        res.send(html)
    }).catch(err => {
        //console.log(err);
        res.send('internal error')
    })
})

//监听端口
server.listen('80', () => {
    console.log('server running!');
})


