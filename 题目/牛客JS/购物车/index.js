function add(items) {
    var tbody = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0]
    // 获取初始数据
    let count = tbody.children.length
    let price = parseFloat(tfoot.innerText.match(/\d+.\d+/)[0])
    console.log(count);
    console.log(price);
    // 新增行
    let tr = ''
    for (let i = 0; i < items.length; i++) {
        count += 1
        price += items[i].price
        tr += `<tr><td>${items[i].name}</td><td>${items[i].price.toFixed(2)}</td><td><a href="javascript:void(0);">删除</a></td></tr>`
    }
    tbody.innerHTML += tr
    tfoot.innerHTML = `<tr><th>总计</th><td colspan="2">${price.toFixed(2)}(${count}件商品)</td></tr>`
}

function bind() {
    var tbody = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0]
    tbody.addEventListener('click', function (e) {
        let num = tbody.children.length
        console.log(tbody);
        // 过滤点击的是否是a标签
        if (e.target.tagName === "A") {
            // 获取数据
            let price = parseFloat(e.target.parentElement.parentElement.innerHTML.match(/\d+.\d+/)[0])
            let total = tfoot.innerHTML.match(/\d+.\d+/)[0]
            e.target.parentElement.parentElement.remove()
            tfoot.innerHTML = `<tr><th>总计</th><td colspan="2">${(total - price).toFixed(2)}(${num - 1}件商品)</td></tr>`
        }
    })
}

bind()

function node2fragment(el) {
    var fragment = document.createDocumentFragment(), child
    while (child = el.firstChild) {
        fragment.appendChild(child)
    }
    return fragment
}