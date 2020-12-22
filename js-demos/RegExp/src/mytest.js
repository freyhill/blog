let html = `<div id=1><yd-tag-component type="goods-card" options="goodsId:147136463161" ></yd-tag-component></div>`


let ydTagComponentMatch = html.match(/<\s*(yd-tag-component)[^>]*>(.*?)<\s*\/\s*(yd-tag-component)>/ig)

if (ydTagComponentMatch && ydTagComponentMatch.length > 0) {
    for(let i = 0; i < ydTagComponentMatch.length; i++) {
        const tagItem = ydTagComponentMatch[i];
        const optionsReg = /options=[\'\"]?([^\'\"]*)[\'\"]?/ig; 
        const options = tagItem.match(optionsReg);
        const goodsIdReg = /goodsId\:[\d\D]*\s?[^\"\']/gi;
        if (options && options.length > 0) {
            const goodsIdObj = options[0].match(goodsIdReg);
            let goodsId = goodsIdObj[0].split(":")[1].trim();
            console.log(goodsId)
        }
    }
}
