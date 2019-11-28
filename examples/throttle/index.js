// function throttle (fn, delay = 300) {
//     let prev = Date.now();
//     console.log(prev);
//     return (...args) => {
//       let now = Date.now();
//       if (now - prev >= delay) {
//         fn.call(this, ...args);
//       }
//     };
//   }
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
let x = throttle(this.handleMove,300 );
document.addEventListener('mousemove', x, true);

function handleMove(e){
    console.log(e);
}