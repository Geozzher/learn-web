let myworker = new Worker('worker.js')

myworker.postMessage(111)
myworker.onmessage = function (e) {
    let data = e.data
    console.log('worker msg :', data);
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
myworker.terminate()