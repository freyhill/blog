/**
 * 构造函数
 * 
 * @param {String} ele 
 * @param {Array} imgList 
 */
function LazyLoad(ele, imgList) {
    this.ele = ele;
    this.imgList = imgList;
    this.imgInitRender(ele, imgList);
    this.lazyLoad();
}
/**
 * 图片渲染初始化
 * 
 * @param {String} ele 
 * @param {Array} imgList 
 */
LazyLoad.prototype.imgInitRender = function(ele, imgList) {
    const winW = window.innerWidth;
    let imgHTML = imgList.map((item) => {
        const wrapperWidth = (winW- 40);
        const wrapperHeight = wrapperWidth / item.width * item.height;
        return `
            <div>大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一樽还酹江月。</div>
            <div data-src=${item.url} 
                    class="img-wrapper" 
                    style="width:${wrapperWidth}px; height: ${wrapperHeight}px; background:#f1f1f1">
            </div>
            <div>明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。
            </div>
        `
    })
    $(ele).html(imgHTML.join(''));
}
/**
 * 单个图片渲染
 * 
 * @param {Object} self 
 * @param {String} imgSrc 
 */
LazyLoad.prototype.domAdd = function(self, imgSrc) {
    const imgDom = `
        <img 
            style="opacity:0; transition:0.7s"
            src=${imgSrc} 
            onload='imgLoaded("${imgSrc}")'
            onerror='imgLoadError("${imgSrc}")'
        />  
    `;
    self.html(imgDom);
    self.attr('data-loaded', '1');
}
/**
 * 延迟加载主方法
 */
LazyLoad.prototype.lazyLoad = function() {
    const winH = window.innerHeight;
    const current = this;
    $(this.ele).find('.img-wrapper').each(function (item, p) {
        const self = $(this);
        const imgSrc = self.attr('data-src');
        const divTop = this.getBoundingClientRect().top;
        if ((divTop - winH ) < winH && !self.attr('data-loaded')) {
            current.domAdd(self, imgSrc);
        }
    })
}
/**
 * 对外方法
 * 
 * @param {String} ele 
 * @param {Array} imgList 
 */
const lazyLoadImg = function (ele, imgList) {
    const load = new LazyLoad(ele, imgList);
    // 图片加载失败处理
    window.imgLoadError = function(src) {
        $(load.ele).find(".img-wrapper").map((index,item) => {
            if ($(item).attr('data-src') === src) {
                $(item).attr('data-loaded', 0).addClass('load-error');
                $(item).html(`加载失败，请点击重试！`);
            }
        });
        $(".load-error").unbind("click").bind("click", function(){
            load.domAdd($(this), $(this).attr("data-src"));
            $(this).removeClass("load-error");
        });
    }
    
    // 图片加载完成回调
    window.imgLoaded = function(src) {
        $(load.ele).find("img").map((index, item) => {
            if ($(item).attr('src') === src) {
                $(item).css("opacity", 1).parent().attr("data-loaded", 1).removeClass("load-error");
            }
        })
    }
    // 滚动监听
    window.addEventListener('scroll', function(){
        load.lazyLoad(); 
    });  
}

export default lazyLoadImg;