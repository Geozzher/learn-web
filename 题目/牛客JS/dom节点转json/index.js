function dom2json() {
    const A = document.querySelector('#jsContainer')
    return convert(A)

}

function convert(dom) {
    let obj = {}
    if (dom.nodeType === 3) {
        if (!dom.textContent.trim()) return
        obj.content = dom.nodeValue.trim()
        obj.tag = 'text'
    } else {
        obj.tag = dom.tagName.toLowerCase()
        obj.attributes = {}
        obj.children = []
        Array.from(dom.attributes).map((attr) => {
            obj.attributes[attr.name] = attr.value
        })
        dom.childNodes.forEach(item => {
            if (!convert(item)) return
            obj.children.push(convert(item))
        })
    }
    return obj
}

console.log(dom2json());

// function () {
//     var el = document.getElementById('jsContainer');
//     (el || {}).innerHTML = '<em class="a1" data-class="a2"></em>';
//     var data = dom2json();
//     var result = isSame(data, { tag: 'div', attributes: { id: 'jsContainer' }, children: [{ tag: 'em', attributes: { class: 'a1', 'data-class': 'a2' }, children: [] }] });
//     console.log(result); return result;
//     function isSame(o1, o2) {
//         var type1 = ({}).toString.call(o1); var type2 = ({}).toString.call(o2);
//         if (type1 !== type2) return;
//         if (type1 === '[object Array]')
//             return o1.join('T_T') === o2.join('T_T');
//         if (type1 === '[object String]') return o1 === o2;
//         var key1 = Object.keys(o1).sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
//         var key2 = Object.keys(o2).sort((a, b) => a > b ? 1 : a === b ? 0 : -1);
//         if (key1.length !== key2.length)
//             return false;
//         return key1.every(key => isSame(o1[key], o2[key]));
//     }
// }