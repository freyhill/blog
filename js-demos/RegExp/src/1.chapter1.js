// {m,n}表示连续出现最少 m 次，最多 n 次
const reg = /ab{2,3}c/gi; 
console.log(reg.test('abbc'));

let rgMatch = "abc abbc abbc abcc".match(reg);
console.log(rgMatch) // ["abbc", "abbc"]

// [abc] 表示该字符是可以字符 "a"、"b"、"c" 中的任何一个
const reg2 = /a[123]b/g;  
const str = "a0b a1b a2b a3b c21";
console.log(str.match(reg2)); // ["a1b", "a2b", "a3b"]

// 增大范围 1-9代表 1到9的任意一个
const reg3 = /[1-9a-cA-C]/g  
const str2 = '9BDBMD';
console.log(str2.match(reg3));

// 排除字符组 ^
const reg4 = /[^abc]/;
console.log(reg4.test('abc')) // false
console.log(reg4.test('def')) // true

/*********************************************** 简写 元字符******************************************************/
// \d 表示 [0-9] 表示一位数字 digit 数字的意思
const regd = /\d/g;
console.log(regd.test('ab')) //false

// \D 表示 [^0-9] 表示除数字以外的任意字符
const regD = /\D/g;
console.log(regD.test('123d')) // true 包含了一个非数字的字符
console.log(regD.test('123')) // false 没有包含非数字的字符

// \w 表示[0-9a-zA-Z_] 表示数字，大小写字母及下划线 word 快速记忆
const regw = /\w/;
console.log(regw.test('_leinov520(+*')) // true 包含了字母数字下划线其中的任意一种
console.log(regw.test('+-(*&')) // false 数字大小写字母及下划线中的任意一种

// \W 表示[^0-9a-zA-Z_] 表示非单词字母
const regW = /\W/;
console.log(regW.test('_leinov520(+*')) // true 包含了非单词字字符中的任意一种
console.log(regW.test('8')+'----') // false 在单词字符范围内且不包含非单词范围内的字符

// \s 表示[\t\v\n\r\f]空格符号 space
const regs = /\s/ 
console.log(regW.test('i like english')) // true
console.log(regW.test('i\nlike\tenglish')) // true
console.log('i\nlike\tenglish')
console.log(regW.test('ilikeenglish')) // false

// \S 表示[^\t\v\n\r\f] 非空格符号 
const regS = /\S/ 
console.log(regS.test(' \n \t')) // false  全是空格符
console.log(regS.test(' \n 1')) // true  包含非空格符

// 可以使用 [\d\D]、[\w\W]、[\s\S] 和 [^] 中任何的一个来匹配任意字符


/*********************************************** 量词 *****************************************************/

/**
 * {m,n} 出现m到n次
 * {m,} 至少出现m次
 * {m} 固定出现m次
 * ？ 表示有或者没有都可以 等同于{0,1} 0或者1次
 * + 表示 至少1次 等同于{1,} 1到无限次
 * * 等价于{0,} 表示可以出现任意次
 */

 let regc1 = /^1[357]\d{9}$/ // 1开头后面跟上一个是3或者5或者7的任意数再后面跟9位任意数字
 console.log('15605029531'.match(regc1)); // ["15605029531"··

 let regc2 = /a{1,2}b{3}c{2,}d?e+m*/ // 包含一个或者两个a 固定的3个b 至少2个c 有d没d都行 至少一个e 有或者有多个m都行
 console.log('abbbccdeeeemmdds'.match(regc2)); // ["abbbccdeeeemm"

 // 贪婪匹配 尽量多的匹配 xx
let regc3 = /\d{1,5}/g // 1到5个数字
console.log('123abc12345acb12345sfdf1'.match(regc3)); // ["123", "12345", "12345", "1"]
 // 惰性匹配 尽量少的匹配 xx?
 let regc4 = /\d{2,5}?/g // 1到5个数字
 console.log('123abc12345acb123456sfdf1'.match(regc4)); // ["12", "12", "34", "12", "34", "56"]

 /*************************** 多选分之 ************************************* */
 console.log(`******* 多选分之 *************** `)
 /**
  * | 管道符 分割表示其中任何之一
  * 而且管道分割
  */
  let rego1 = /good|nice/g;
  console.log('good job nice'.match(rego1)); // [ 'good', 'nice' ]

  let rego2 = /good|goodbye/g;
  console.log('goodbye'.match(rego2)); // [ 'good' ]
  let rego3 = /goodbye|good/g;
  console.log('goodbye'.match(rego3)); // [ 'goodbye' ]

  /****************************** 练习 ****************************************** */
  // 1. 匹配进制颜色值
  // #f2defe

  const regColor = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
  const isColor = '#f3f3f3 #ef7890 #fued09';
  console.log(isColor.match(regColor)); // [ '#f3f3f3', '#ef7890' ]
 
  // 2. 匹配时间
  // 23:59 02:07

  const regTime = /^(([01]?[0-9])|[2][0-3]):[0-5]?[0-9]$/g
  const isTime = '23:56';
  console.log(isTime.match(regTime)); // [ '23:56' ]

  // 3. 匹配日期
  // 2020-12-18

  const regDate = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/g;
  const isDate= '2020-12-18';
  console.log(isDate.match(regDate)); // [ '2020-12-18' ]

  // 4. 匹配windows操作系统文件路径
  // xxxxxx

  // 5. 匹配id
  // <div id="container" class="main"></div> 提取 id="container"
 const regId = /id="[^"]*"/   // [^"]代表着非"
 const div = '<div id="container" class="main"></div>';
 console.log(div.match(regId)[0])
