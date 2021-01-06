// 正则表达式括号的使用
const {log: lg} = console;
/**********分组********* */
{
    var reg1 = 'abcababc'.match(/(abc)+/gi);
    lg(reg1); // [ 'abc', 'abc' ]
}

/*********分支结构***/
{
    var reg2 = /^I love (jay|may)$/gi
    lg(reg2.test('I love jay')); // true

}
/**********分组引用 分组后好提取*/
{
    var reg3 =/(\d{4})-(\d{2})-(\d{2})/
    var reg4 =/\d{4}-\d{2}-\d{2}/
    lg('2020-12-31'.match(reg3)); 
    lg(reg3.exec('2020-12-31')); 
    /** reg3用括号分组了就可以单独提取出年月日
     * [
        '2020-12-32',
        '2020',
        '12',
        '32',
        index: 0,
        input: '2020-12-32',
        groups: undefined
    ] */
    lg('2020-12-31'.match(reg4)); // [ '2020-12-32', index: 0, input: '2020-12-32', groups: undefined ]
}



// 替换
{
    var date = '2020-12-23'
    var reg5 = /(\d{4})-(\d{2})-(\d{2})/

    var newDate = date.replace(reg5, '$2/$3/$1')
    lg(newDate);
}

// 上面等同于
{
    var newDate2 = date.replace(reg5, function (match, $1,$2,$3) {
        lg(match,$1,$2,$3);
        return `${$2}/${$3}/${$2}`
    })
    lg(newDate2);
}

// 也等同于
{
    var newDate3 = date.replace(reg5, function () {
        lg( RegExp.$1,RegExp.$2,RegExp.$3);
        return  `${RegExp.$1}/${RegExp.$2}/${RegExp.$3}`
    })
    lg(newDate3);
}


/********** 反向引用 ********** */

{
    var reg6 = /\d{4}(-|\/|\.)\d{2}\1\d{2}/
    // 里面的 \1 表示的饮用之前那个分组 (-|\/|\.) 不管他匹配到什么 \1都匹配那个同样的具体字符
    // 同理 \2 \3 代表第二个第三个分组
    var date1 = '2021-02-04';
    var date2 = '2021.02.04';
    var date3 = '2021/02/04';
    var date4 = '2021-02/04';
    lg(reg6.test(date1)); // true
    lg(reg6.test(date2)); // true
    lg(reg6.test(date3)); // true
    lg(reg6.test(date4)); // false
}

{
    // 嵌套括号处理：以左括号为准

}