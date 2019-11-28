// 防抖的目的是提高性能，减少不必要的函数执行
// 使用场景：表单输入请求后端，提交按钮多次连续点击
// getEventListeners(document.querySelector('button')); 可以获取元素绑定的事件列表
const button = document.getElementById('button');
const input  = document.getElementById('input');
button.addEventListener('click', debounce(clickMe, 1000));
button.removeEventListener('click', debounce(clickMe, 1000));

input.addEventListener('input', debounce(getInput, 500))

// 防抖函数
function debounce(fn, wait = 300) {
    let timer = null; // 设定一个timer作为
    return (...args) => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            console.log(3333);
            fn.call(this, ...args)
        }, wait);
    }
  }

function clickMe (e) {
    console.log('clike me', e);
}
// send to server 
function getInput(e) {
    const inputValue = input.value;
    console.log(inputValue);
    // request(inputValue)
}
