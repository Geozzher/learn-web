function second(second) {
    //const dt = new Date(second)
    //return {
    //    day: dt.getDate(),
    //    hour: dt.getHours(),
    //    min: dt.getMinutes(),
    //    second: dt.getSeconds()  
    //}
    let day = Math.floor(second / 60 / 60 / 24)
    let hour = Math.floor(second / 60 / 60 - (day * 24))
    let min = Math.floor(second / 60 - (day * 24 * 60 + hour * 60))
    let seconds = second % 60
    return {
        day,
        hour,
        min,
        second: seconds
    }
}

function render(data) {
    const countDownContainer = document.querySelector('#jsCountdown')
    let spanList = ''

    // 对不足两位的补0
    Object.keys(data).forEach(itm => {
        let val = data[itm].toString()
        if ((val.length < 2)) {
            data[itm] = '0' + val
        }
    })
    if (data.day === '00') {
        spanList += `<span class="hide">${data.day}天</span>`
    } else {
        spanList += `<span>${data.day}天</span>`
    }
    spanList +=
        `<span>${data.hour}:</span>
        <span>${data.min}:</span>
        <span>${data.second}</span>`

    countDownContainer.innerHTML = spanList
}

let num = 90061
let handler = setInterval(function () {
    if(num <= 0) clearInterval(handler)
    render(second(num))
    num--
}, 1000)
// while (num >= 0) {

//     num--
// }
