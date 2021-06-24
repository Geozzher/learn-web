const myShareWorker = new SharedWorker('./worker.js')
myShareWorker.port.postMessage(111)
myShareWorker.port.onmessage = function (e) {
    let data = e.data
    console.log(data);
}

function btnClick() {
    let i = 1
    return function () {
        i++
        console.log(i);
    }
}
let ss = btnClick()
// 中止线程
