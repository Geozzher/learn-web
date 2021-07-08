function Pagination(container, total, current) {
    this.total = total;
    this.current = current;
    this.html = html;
    this.val = val;
    this.el = document.querySelector('.pagination'); //TODO: 创建分页组件根节点
    if (!this.el) return;
    this.val()
    this.el.innerHTML = this.html();
    container.appendChild(this.el);
    
    if (this.total <= 1) {
        this.el.className = 'hide'; //TODO: 判断是否需要隐藏当前元素
    }

    function html() {
        if (this.total <= 1) return '';
        // 小于5页
        let li = ''
        if (this.total <= 5) {
            for (let i = 1; i <= total; i++) {
                if (this.current == i) {
                    li += `<li class="current">${i}</li>`
                } else {
                    li += `<li>${i}</li>`
                }
            }
        } else if (this.total > 5) {
            // 判断是否显示首页末页
            // 只显示末页
            if (this.current <= 3) {
                for (let i = 1; i <= 5; i++) {
                    if (this.current === i) {
                        li += `<li class="current">${i}</li>`
                    } else {
                        li += `<li>${i}</li>`
                    }
                }
                li += `<li>末页</li>`
            } else if (this.total - this.current < 3) {
                // 只显示首页
                li += `<li>首页</li>`
                for (let i = this.total - 4; i <= this.total; i++) {
                    if (this.current === i) {
                        li += `<li class="current">${i}</li>`
                    } else {
                        li += `<li>${i}</li>`
                    }
                }
            } else {
                // 首末页都要显示
                li += `<li>首页</li>`
                for (let i = this.current - 2; i <= this.current + 2; i++) {
                    if (this.current === i) {
                        li += `<li class="current">${i}</li>`
                    } else {
                        li += `<li>${i}</li>`
                    }
                }
                li += `<li>末页</li>`
            }
        }
        return li
    }

    function val(current) {
        if (arguments.length === 0) return this.current;
        if (current < 1 || current > this.total || current === this.current) return;
        this.current = current;
        this.el.innerHTML = this.html();
    };
}

const testContainer = document.getElementById('test')
const total = 7
const current = 1

new Pagination(testContainer, total, current)