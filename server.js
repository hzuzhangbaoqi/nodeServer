const http=require('http');
const url=require('url');
const fs=require('fs');
const server =http.createServer();
const path=require('path');

server.on('request',(req,res)=>{
    let pathStr = url.parse(req.url).pathname;
    if(pathStr=="/index"){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                console.log(err)
                return ;
            }
            res.end(data);
        })
    }
    if(pathStr=="/login"){
        fs.readFile('./login.html',(err,data)=>{
            if(err){
                console.log(err)
                return ;
            }
            res.end(data);
        })

    }
    if(pathStr=="/static/css/index.css"){
        fs.readFile('./static/css/index.css',(err,data)=>{
            if(err){
                console.log(err)
                return ;
            }
            res.end(data);
        })
    }
    if(pathStr=="/static/css/index.js"){
        fs.readFile('./static/css/index.js',(err,data)=>{
            if(err){
                console.log(err)
                return ;
            }
            res.end(data);
        })
    }
})

server.listen(8888,'172.17.103.32',()=>{
    console.log('服务器开启成功');
})