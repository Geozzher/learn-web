const io = require("socket.io")(3009, { cors: true });
const users = {}
io.on('connection', socket => {
    console.log('欢迎加入聊天室');
    socket.emit('welcome')

    // 接收新用户的昵称名称
    socket.on('join_client', (username) => {
        console.log(socket.id);
        users[socket.id] = username
        // 广播该信息给所有连接socket服务的客户端知道
        socket.broadcast.emit('joint_server', username)
    })

    // 当链接断开时，广播离开
    socket.on('disconnect', () => {
        socket.broadcast.emit('leave_server', users[socket.id])
        // 删除记录
        delete users[socket.id]
    })

    // 接收发送信息，广播信息
    socket.on('send_msg', (msg) => {
        socket.broadcast.emit('show_msg', users[socket.id], msg)
    })
})



