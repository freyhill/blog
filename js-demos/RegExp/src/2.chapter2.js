// 匹配位置的一正则表达式
  
  
/********************* ^开头 $结尾 ********************************** */
 var reg1 = 'hello'.replace(/^|$/g, '#');
 console.log(reg1); // #hello#
 // 多行匹配模式(即有修饰符 m)时
 var reg2 = 'I\nlove\njavascript'.replace(/^|$/gm, '#');
 console.log(reg2);
 /**
  *  #I#
  *  #love#
  *  #javascript#
  */

/********************* \b \B ********************************** */
  // \b \B是单词边界 具体就是\w \W之间的位置
  var reg3 = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
  console.log(reg3); // #Lesson_01#.#mp4#
  // \B刚好跟\b相反 具体说来就是 \w 与 \w、 \W 与 \W、^ 与 \W，\W 与 $ 之间的位置。
  var reg4 = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
  console.log(reg4);


  /*********************(?=p) 和 (?!p)********************************** */

// (?=p) p是一个子模式，即p前面的位置，或者说，该位置后面的字符要匹配p
var reg4 = 'goods res'.replace(/(?=s)/g, '-');
console.log(reg4);
var reg5 = '赵磊 李磊 王磊'.replace(/(?=磊)/g, '大'); // 赵大磊 李大磊 王大磊
console.log(reg5);