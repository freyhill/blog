
/**
 * @desc 新增图文带货需求 商品卡片dom结构 2020-12-10
 * 
 * @param {Object} goodsData  商品数据
 * @param {String} id 匹配到的商品id
 */
export const goodsRender = function(goodsData ,id) {
    console.log(goodsData ,id);
    if (goodsData[id]) {
      let {
        goods_sign, 
        goods_name, 
        goods_pic, 
        goods_source, 
        goods_price, 
        goods_sales,
        goods_url
      } = goodsData[id];
      if (!goods_url || !goods_sign) {
        return '';
      }
      return `
        <div class="article-goods-card" data-goods_id="${goods_sign}">
          <div class='goods-pic'>
            <div class="img-wrap" data-src="${goods_pic}"></div>
          </div>
  
          <div class='goods-info'>
            <div class='name-wrapper'>
              <div class='name'>${goods_name}</div>
            </div>
            <div class='source'> 
              <span>${goods_source}</span>  <span>已售${goods_sales}件</span>
            </div>
            <div class='price'>
              <span>￥${goods_price}</span> <span class='goto-buy-button'> 去购买 <img src='/static/hybrid/img/main/goods_goto_buy_icon.png' /> </span>
            </div>
          </div>
        </div>
      `
    }
    return '';
  }
  /**
   * @desc 去掉两个连续商品中的换行符
   */
  export const formGoodsBr = function(docData) {
    let brMath = docData.content.match(/<\/yd-tag-component>(\s?<br>\s?)*/gi);
    if (brMath && brMath.length > 0) {
      for(let i = 0, len = brMath.length; i < len; i++) {
        docData.content = docData.content.replace(brMath[i], '</yd-tag-component>')
      }
    }
    return docData;
  }
  /**
   * @desc 图文带货 匹配正文返回的 yd-tag-component标签 并替换为上面的商品卡片
   * 
   * @param {Object} goodsData  商品数据
   * @param {String} docData 正文字符串
   */
  export const  formatGoods = function(doc) {
    let {content, goodsList } = doc
    doc = formGoodsBr(doc);
    let ydTagComponentMatch = content.match(/<\s*(yd-tag-component)[^>]*>(.*?)<\s*\/\s*(yd-tag-component)>/ig)
    console.log('ydTagComponentMatch', ydTagComponentMatch);
    if (ydTagComponentMatch && ydTagComponentMatch.length > 0) {
        for(let i = 0; i < ydTagComponentMatch.length; i++) {
            const tagItem = ydTagComponentMatch[i];
            const optionsReg = /options=[\'\"]?([^\'\"]*)[\'\"]?/ig; 
            const options = tagItem.match(optionsReg);
            const goodsIdReg = /goodsId\:[\d\D]*\s?[^\"\']/gi;
            if (options && options.length > 0) {
                const goodsIdObj = options[0].match(goodsIdReg);
                if(goodsIdObj && goodsIdObj.length > 0) {
                  const goodsId = goodsIdObj[0].split(":")[1].trim();
                  console.log('----', ydTagComponentMatch[i])
                  doc.content = doc.content.replace(ydTagComponentMatch[i], goodsRender(goodsList, goodsId))
                }
            }
        }
    }
    console.log('d---s--s---s-soc', doc);
    return doc;
  }
 // 懒加载
  export const  lazyLoadImg = function() {
    var scrollTop = $(document.body).scrollTop() || $(window).scrollTop(),
        screenH = $(window).height();
    $('#root').find('.img-wrap').each(function () {
      var self = $(this);
      console.log();
      //当图片进入下一屏, 如果不是gif, 并且没有加载, 就开始加载图片
      if (scrollTop - self.offset().top + screenH * 2 > 0) {
        if (!self.attr('data-loaded')) {
            var imgDom = '<img src="' + self[0].dataset.src + '"'
              + ' onerror="yidian.HB_imgErrorHandle(\'' + self[0].dataset.src + '\')"'
              + '/>';
            self.html(imgDom);
            self.attr('data-loaded', '1');
        }
      }
    })
  }
  
  export const formatImg = function name(doc) {
    const imgArr = doc.content.match(/\<img.*?src=\".*?\".*?\>/ig) || [];
    console.log('imgArr', imgArr);
    let imgDomArr = []
    imgArr.forEach(function (item) {
        let imgSrc = ((item.match(/src=(\S*)/) || [])[1] || '').replace(/"/g, '');
        imgDomArr.push(
            `<div class="img-wrap" data-src="${imgSrc}"></div>`
        ) 
        doc.content = doc.content.replace(item, imgDomArr.join(''));
    });
  }