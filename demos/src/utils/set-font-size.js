// set doc root font-size
!function(win, doc) {
    var root = doc.documentElement,
        dpi = win.devicePixelRatio || 1;
    !function setFont() {
        var rootSize = root.clientWidth / 3.75;
        root.style.fontSize = rootSize + 'px';
        !function setBodyFont() {
            doc.body ? doc.body.style.fontSize = '16px': doc.addEventListener("DOMContentLoaded", setBodyFont)
        }();
        win.addEventListener('resize',setFont);
    }()
}(window, document);