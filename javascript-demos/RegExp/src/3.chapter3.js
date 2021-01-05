// 正则表达式括号的使用

/**********分组********* */
var reg1 = 'abcababc'.match(/(abc)+/gi);
console.log(reg1); // [ 'abc', 'abc' ]

/*********分支结构***/
var reg2 = /^I love (jay|may)$/gi
console.log(reg2.test('I love jay')); // true

/**********分组引用 分组后好提取*/
var reg3 =/(\d{4})-(\d{2})-(\d{2})/
var reg4 =/\d{4}-\d{2}-\d{2}/
console.log('2020-12-31'.match(reg3)); 
console.log(reg3.exec('2020-12-31')); 
/** reg3用括号分组了就可以单独提取出年月日
 * [
  '2020-12-32',
  '2020',
  '12',
  '32',
  index: 0,
  input: '2020-12-32',
  groups: undefined
]
 */
console.log('2020-12-31'.match(reg4)); // [ '2020-12-32', index: 0, input: '2020-12-32', groups: undefined ]

// 替换
var date = '2020-12-23'
var reg5 = /(\d{4})-(\d{2})-(\d{2})/

var newDate = date.replace(reg5, '$2/$3/$1')
console.log(newDate);

// 上面等同于
var newDate2 = date.replace(reg5, function (match, $1,$2,$3) {
    console.log(match,$1,$2,$3);
    return `${$2}/${$3}/${$2}`
})
console.log(newDate2);

// 也等同于
var newDate3 = date.replace(reg5, function () {
    console.log( RegExp.$1,RegExp.$2,RegExp.$3);
    return  `${RegExp.$1}/${RegExp.$2}/${RegExp.$3}`
})
console.log(newDate3);


/********** 反向引用 ********** */