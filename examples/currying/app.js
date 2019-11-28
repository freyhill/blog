/*
 * @FileName: My file
 * @Author: Leinov
 * @Date: 2019-11-28 10:14:44
 * @LastEditTime: 2019-11-28 13:12:29
 * @Description: description your file
 * @FilePath: \Blog\examples\currying\app.js
 */
new Vue({
    el:'#app',
    
    data:{
       theme:[
        'Tomato',
        'Orange',
        'DodgerBlue',
        'MediumSeaGreen',
        'Gray',
        'SlateBlue',
        'Violet',
        'LightGray'
       ],
        // theme: [
        //     '#fefffe',
        //     '#fefefe',
        //     '#fefcfe',
        //     '#fefbfe',
        //     '#fefdfe',
        //     '#fefefe',
        //     '#fefefc',
        //     '#fefeff'
        // ],
        getThemeUseNum: () => {},
        num1:0,
        num2:0,
        time1:0,
        time2:0
    },
    computed: {
        list () {
            const arr = new Array();
            for (var i = 1; i < 500; i++) {
                const colorRandom = Math.floor(Math.random() * this.theme.length);
                arr.push({
                    id: i,
                    theme: this.theme[colorRandom]
                })
            }
            return arr;
        }
    },
    methods: {
        // 获取主题背景使用数量
        usedNum (theme, type) {
            if (type === 1) {
                console.time('CURRYING')  
                this.num1 = this.getThemeUseNum(theme);
                console.timeEnd('CURRYING')  
                
            } else {
                console.time('NO CURRYING THEME');
                this.num2 = this.noCurrying(theme);
                console.timeEnd('NO CURRYING THEME'); 
            }
        },
        // 柯里化处理
        currying (list) {
            let obj = {};
            const themeList = this.list.map((item) => item.theme);
            themeList.forEach((item) => {
                if (!obj[item]) {
                    obj[item] = 1;
                } else {
                    obj[item] = obj[item] + 1;
                }
            });
            console.log(obj);
            return (themeId) => {
                if (themeId in obj) {
                    return obj[themeId];
                } else {
                    return 0;
                }
            }
       },
       // 非柯里化处理
       noCurrying(theme) {
        const themeList = this.list.filter((item) => item.theme === theme);
        return themeList.length;
       }
    },
    mounted() {
       this.getThemeUseNum = this.currying(this.list);
    },
})