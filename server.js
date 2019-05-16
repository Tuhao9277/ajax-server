//导入文字颜色处理工具
require("colors");

//导入http模块
const http = require("http");
const route = require("./router.js");

const server = http.createServer((request, response)=>{
	response.setHeader("Access-Control-Allow-Origin", "*");
	 console.log(request.method);
	/**
	console.log("hello!!!!!");
	
	response.setHeader("Content-Type","text/html; charset=utf8");

	response.write("<html>")
	response.write("我是服务器！！");
	response.write("</html>")
	response.end();
	*/
	route(request, response);
})

server.listen(9090, ()=>{
	console.log("Server started at http://localhost:9090".green)
});

// const WebSocket = require('ws');
// const socketServer = new WebSocket.Server({ port: 9001 });
// const clients = new Set();
// socketServer.on('connection', (client) => {
//     client.id = clients.length;
//     clients.add(client);
//     // console.log(client);
    
//     client.on('message', (chunck) => {
//         clients.forEach((cli,index)=>{
//             cli.send(chunck);
//         })
//         console.log('received: %s', chunck);
//     });
    
//     client.on("error",()=>{
//         clients.delete(client);
//     })

//     client.on("close", () => {
//         clients.delete(client);
//     })
// });