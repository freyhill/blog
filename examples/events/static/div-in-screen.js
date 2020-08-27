/**
 * 判断是否在屏幕内
 * 
 * @param {String} ele 
 * @returns {Function}
 */
const isCommentAreaShow = function(ele) {
    let startTime = null;
    let time = null;
    const winH = window.innerHeight;

    ele = document.getElementById(ele);
    let eleTop = ele.getBoundingClientRect().top;
    let eleH =  ele.getBoundingClientRect().height;

    if (eleTop < winH && eleTop > -eleH) {
        if (!startTime) {
            startTime = + new Date();
        }
    }
    return function(callback, endTime) {
        let eleTop = ele.getBoundingClientRect().top;
        let eleH =  ele.getBoundingClientRect().height;
        if (eleTop < winH && eleTop > -eleH && !endTime) {
            if (!startTime) {
                startTime = + new Date();
            }
            console.log('出现在屏幕');
        } else {
            console.log('未在屏幕内');
            if (startTime) {
                endTime = endTime ? endTime : + new Date() 
                time = endTime - startTime;
                if (callback && typeof callback === 'function' && time > 0) {
                    callback(time); // 发送日志
                }
            }
            startTime = null;
            endTime = null;
        }
    }
}

let area = isCommentAreaShow('comment')
window.onscroll = function() {
    area((time) => {
        // 发送日志
        console.log(` 展示的时间为:${ Math.floor(time / 1000)}`)
    });
}

document.getElementById('goto-native').addEventListener('click', function() {
    const endTime = + new Date();
    area((time) => {
        // 发送日志
        console.log(`进入native 展示的时间为:${ Math.floor(time / 1000)}`)
    }, endTime)
})