/**
 * @file 模拟双异步的问题
 * @date：2021-03-15
 */

// 完成的回调
let finishFlag = (() =>{
    let finishMap = {
        browser: false,
        request: false,
    }
    
    return (type, data) => {
        if (type) {
            if (data) {
                finishMap[type] = data;
            } else {
                finishMap[type] = true;
            }
        }
        return finishMap;
    }
})();

// native 加载webview
function loadWebView(time) {
    setTimeout(() => {
        
        const flag= finishFlag('browser');
        if (flag.request) {
            document.body.innerText = `数据先加载成功,webview加载成功可以开始`
        }
    },time * 1000)
}

// native 加载数据
function requestData(time) {
    setTimeout(() => {
        const flag = finishFlag('request');
        if (flag.browser) {
            document.body.innerText = `webview先加载成功,数据也成功,可以开始`
        }
    },time * 1000)
}

function init() {
    loadWebView(1);
    requestData(2)
}
init();