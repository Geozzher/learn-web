let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
canvas.width = 600;     //重新设置标签的属性宽高
canvas.height = 400;
canvas.style.border = "1px solid #000"
context.strokeStyle = '#ff0000'  // 设置画笔颜色
context.lineWidth = 4;
context.beginPath()
context.moveTo(10, 10)
context.lineTo(400, 400)
context.closePath()
context.rect(30, 30, 30, 30)
context.stroke()
context.fill()
// 快速创建矩形
context.rect(30, 30, 30, 30)  //  只是规划了路径,并没有填充和描边

// 创建描边矩形 
context.strokeRect(70, 70, 30, 30) // 规划路径后,立刻对路径进行stoke绘制

// 创建填充矩形
context.fillStyle = '#e3e3e3'
context.fillRect(110, 110, 30, 30)

