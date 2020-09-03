
// alibaba
// !function(e, t) {
//     var n = t.documentElement,
//     d = e.devicePixelRatio || 1;
//     function i() {
//         var e = n.clientWidth / 3.75;
//         n.style.fontSize = e + "px"
//     }
//     if (function e() {
//         t.body ? t.body.style.fontSize = "16px": t.addEventListener("DOMContentLoaded", e)
//     } (), i(), e.addEventListener("resize", i), e.addEventListener("pageshow",
//     function(e) {
//         e.persisted && i()
//     }), 2 <= d) {
//         var o = t.createElement("body"),
//         a = t.createElement("div");
//         a.style.border = ".5px solid transparent",
//         o.appendChild(a),
//         n.appendChild(o),
//         1 === a.offsetHeight && n.classList.add("hairlines")
//         //n.removeChild(o)
//     }
// } (window, document)


!function(win, doc) {
    var root = doc.documentElement,
        dpi = win.devicePixelRatio || 1,
        timer = null;
    !function setFont() {
        var rootSize = root.clientWidth / 3.75;
        root.style.fontSize = rootSize + 'px';
        !function setBodyFont() {
            doc.body ? doc.body.style.fontSize = '16px': doc.addEventListener("DOMContentLoaded", setBodyFont)
        }();
        win.addEventListener('resize',setFont);
    }()
}(window, document)




// tencent
// (function(base, min, max, scaling) {
//     var cacheWidth = 0;
//     var timer;
//     var docEl = document.documentElement;
//     var recalc = function() {
//         var clientWidth = docEl.clientWidth;
//         if (!clientWidth) return;
//         clientWidth = Math.max(Math.min(clientWidth, max), min);
//         if (cacheWidth !== clientWidth) {
//             clearInterval(timer);
//             cacheWidth = clientWidth;
//             docEl.style.fontSize = scaling * (clientWidth / base) + 'px';
//         }
//     }
//     recalc();
//     setTimeout(recalc, 300);
//     if (!window.addEventListener) return;
//     var resizeWithTimer = function() {
//         timer = setInterval(recalc, 10);
//     }
//     if ('onorientationchange' in window) window.addEventListener('orientationchange', resizeWithTimer);
//     if ('onresize' in window) window.addEventListener('resize', resizeWithTimer);
// })(375, 300, 768, 100);
