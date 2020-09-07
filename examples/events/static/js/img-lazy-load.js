// 图片懒加载
!function(){
    window.imgLoadMap = (function() {
        const mapList = {}
        return function(src) {
            if (mapList[src]) {
                mapList[src] = (+ new Date()) - mapList[src]
            } else {
                mapList[src] = + new Date();
            }
            const averageTime = Object.values(mapList).reduce((total, numb) => {
                return total + numb;
            }) / Object.keys(mapList).length;
            console.log(mapList, averageTime + 'ms');
        }
    })();
    function LazyLoad(ele, imgList) {
        this.ele = ele;
        this.imgInit(ele, imgList);
        this.lazy((src) =>{
            imgLoadMap(src);
        });
    }

    LazyLoad.prototype.imgInit = function(ele, imgList) {
        const winW = window.innerWidth;
        let imgHTML = imgList.map((item) => {
            const wrapperWidth = (winW- 40);
            const wrapperHeight = wrapperWidth / item.width * item.height;
            return `
                <div>最近，我参加了一个朋友组织的聚会，其中一个朋友的朋友是暖场王，以诙谐的语言和人生的阅历迅速晋级为全场TOP 1的主场嘉宾，这样的黄金单身汉如果放在相亲市场应该很抢手吧，主要的是他很懂车，名下包括但不限于奔驰AMG GT、牧马人等车型，听说我是一名汽车编辑，还是个女的，便神采奕奕地问我，你最近在关注什么车？</div>
                <div data-src=${item.url} 
                     class="img-wrapper" 
                     style="width:${wrapperWidth}px; height: ${wrapperHeight}px; background:#f1f1f1">
                </div>
                <div>“卫士的空气悬架可以降低方便进入，也可以升高提升通过性，最大的升降行程是185mm，接近角38°，大G 31°，牧马人35°，后面的离去角是40°，大G和牧马人都只有29°；大G和牧马人的离地间隙分别是241mm和251mm，卫士291mm，有30mm的最大离地间隙，我想你知道这些数据都意味着什么。”从这场对话的开端，我都是不卑不亢的态度，一连串的数字对比下来，朋友的朋友反而有些窘迫了。
                </div>
            `
        })
        $(ele).html(imgHTML.join(''));
    }
    
    LazyLoad.prototype.lazy = function(callback) {
        const winH = window.innerHeight;
        $(this.ele).find('.img-wrapper').each(function (item, p) {
            const self = $(this);
            const imgSrc = self.attr('data-src');
            const divTop = this.getBoundingClientRect().top;
           if ((divTop - winH ) < winH && !self.attr('data-loaded')) {
                const imgDom = `
                    <img src=${imgSrc} onload='(${[callback]})("${imgSrc}")' />  
                `
                self.html(imgDom);
                callback(imgSrc);
                self.attr('data-loaded', '1');
           }
        })
    }
    window.lazyLoadImg = function (ele, imgList) {
        const load = new LazyLoad(ele, imgList);
        window.addEventListener('scroll', function(){
            load.lazy((src) => {
                imgLoadMap(src)
            });  
        });  
    }
}();

 