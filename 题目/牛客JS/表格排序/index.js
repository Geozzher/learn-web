function sort(type, order) {

    const tbody = document.querySelector('#jsList')
    let idx = 0
    if (type === 'price') {
        idx = 1
    } else if (type === 'sales') {
        idx = 2
    }
    const asc = function (a, b) {
        return a.children[idx].innerHTML - b.children[idx].innerHTML
    }
    const desc = function (a, b) { return b.children[idx].innerHTML - a.children[idx].innerHTML }
    const arrTbody = Array.from(tbody.children)
    sortFun = order === 'asc' ? asc : desc
    arrTbody.sort(sortFun)
    arrTbody.forEach((itm) => {
        tbody.appendChild(itm)
    })
}

