/*
 * @FileName: 节流
 * @Author: Leinov
 * @Date: 2019-11-28 10:06:42
 * @LastEditTime: 2019-11-28 10:07:20
 * @Description: 节流
 * @FilePath: \Blog\examples\throttle\index.js
 */

function throttle(fn, interval = 300) {
    let canRun = true;
    return function (...args) {
        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            fn.call(this, ...args);
            canRun = true;
        }, interval);
    };
}
document.addEventListener('mousemove', throttle(handleMove, 500), true);
function handleMove(e){
    console.log(e);
}
