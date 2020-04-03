//nodejs代码
const express = require('express')

//获取express实例
const server = express();

//编写路由处理不同url的请求
server.get('/',(req,res)=>{
    res.send('<strong>hello word</strong>');
})

//监听端口
server.listen('80',()=>{
    console.log('server running!');
})


