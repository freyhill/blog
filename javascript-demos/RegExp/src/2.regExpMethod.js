// test方法 检测字符串是否符合正则规则
const r1 = /abcd/
const isAbcd = r1.test('1234');
const isAbcd2 = r1.test('1abcdd');
console.log(isAbcd, isAbcd2) // false true

// exec 捕获片段
const r2 = /leinov/
const hasLeinov = r2.exec('i am leinov, i am 18');
console.log(hasLeinov);
console.log(typeof hasLeinov)

let s = /^\d/.test("d35d3")
console.log(s);
let url = /^w*$m/.test('http://www.baidu.com')
console.log(url);