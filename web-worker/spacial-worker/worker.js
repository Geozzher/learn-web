onmessage = function (e) {
    let data = e.data
    // 10亿次就会表现出差距
    while (data < 1000000000) {
        data++
    }
    // 不能操作DOM页面，也不能使用window对象的默认方法和属性
    console.log(this);
    this.postMessage(data)

    // 自动终止线程
    this.close()

    // subworker
}