import font1 from './DINPro-Bold.ttf';
import font2 from './SourceHanSerifCN-Bold-2.otf'


let fontIns = new FontFace('siyuan', `url(${font2})`, {});
fontIns.load().then((loadedface) => {
    document.fonts.add(loadedface);
    var title = document.getElementById('siuyan-font-test');
    title.setAttribute("style", `font-family: siyuan`)
})

let font2Ins = new FontFace('DINPro', `url(${font1})`, {});
font2Ins.load().then((loadedface) => {
    document.fonts.add(loadedface);
    var title = document.getElementById('number-font-test');
    title.setAttribute("style", `font-family: DINPro`)
})
