# 配置scoket服务
 npm i -D nodemon
 npm i socket.io

 # 启动nodemon
 nodemon ./index.js 也可以配置package.json的script脚本

# 配置socket.io的端口号以及跨域问题

 # 启动socket服务会在本地绑定的端口托管一个socket.io.js文件
 需要将该文件作为脚本引入http://localhost:3005/socket.io/socket.io.js
 会暴露一个io对象给浏览器端调用

 # 浏览器将通过io('http://localhost:3005')返回一个socket对象就可以进行通信

 