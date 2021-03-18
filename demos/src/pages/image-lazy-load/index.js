 import imgLazyLoad from './lazyload';
 // 图片模拟数据
 const imagesList = [
    {
        width: 343,
        height: 429,
        url: 'https://pic3.zhimg.com/v2-f8578f963ed7c0f555abd9ad50563a03_b.jpg'
    },
    {
        width: 343,
        height: 429,
        url: 'https://pic4.zhimg.com/v2-321922bcbecf161af8a7622808d436dc_r.jpg'
    },
    {
        width: 343,
        height: 429,  
        url: 'https://pic1.zhimg.com/80/v2-409720114bc2fe530617c1a5c8744a75_720w.jpg'
    },{
        width: 343,
        height: 429,
        url:'https://pic2.zhimg.com/80/v2-6761d97aba5df0b28ea82c90e35323f8_720w.jpg'
    },
    {
        width: 343,
        height: 429,
        url:'https://pic2.zhimg.com/80/v2-3f5f4bb9e79db8bd94d3506e2e80290f_720w.jpg'
    },
    {
        width: 343,
        height: 429,
        url:'https://pic4.zhimg.com/80/v2-dd404c3bc9841d742228a853c148fa3c_720w.jpg'
        },
        {  width: 1440,
        height: 1800,
            url: 'https://pic4.zhimg.com/80/v2-eb5cf3324bf89252457ba9b089c2a75e_1440w.jpg'
        }
    ];
    imgLazyLoad('#img-list', imagesList)