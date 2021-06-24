onconnect = function (e) {
    // 这里边不执行console.log
    let port = e.ports[0]
    port.onmessage = function (e) {
        let data = e.data
        while (data < 1110) {
            data++
        }
        port.postMessage(data)
    }
}