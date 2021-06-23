const socket = io('http://127.0.0.1:3009')
const username = prompt('请输入你的名字')
if (!username) {
    location.reload()
}
socket.on('welcome', () => {
    renderDOM(`欢迎  ${username}  加入聊天室`)
    // 加入信息发送到服务端
    socket.emit('join_client', username)
})

// 接收新加入的用户
socket.on('joint_server', (username) => {
    renderDOM(`${username}加入了聊天室`)
})
// 接受其他用户的断开信息
socket.on('leave_server', username => {
    renderDOM(`${username}离开了聊天室`)
})

// 接受其他用户的断开信息
socket.on('show_msg', (username, msg) => {
    renderDOM(`${username} : ${msg}`)
})
function renderDOM(msg) {
    const container = document.querySelector('.msg-box')
    container.innerHTML = container.innerHTML + `<div>${msg}</div>`
}

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()
    const inputEle = document.querySelector('input')
    const value = document.querySelector('input').value.trim()
    if (value !== '') {
        renderDOM(`${username} : ${value}`)
        inputEle.value = ''
        socket.emit('send_msg', value)
    }
})
