!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=38)}({38:function(e,t,n){"use strict";n.r(t);t=n(39),t=n(40);new Vue({el:"#app",data:{theme:["Tomato","Orange","DodgerBlue","MediumSeaGreen","Gray","SlateBlue","Violet","LightGray"],getThemeUseNum:function(){},num1:0,num2:0,time1:0,time2:0,currentTheme:"#fff",code1:"\n        // 柯里化处理\n        function currying (list) {\n            let obj = {};\n            const themeList = this.list.map((item) => item.theme);\n            themeList.forEach((item) => {\n                if (!obj[item]) {\n                    obj[item] = 1;\n                } else {\n                    obj[item] = obj[item] + 1;\n                }\n            });\n            return (theme) => {\n                if (theme in obj) {\n                    return obj[theme];\n                } else {\n                    return 0;\n                }\n            }\n        }",code2:"\n        // 非柯里化处理\n        function noCurrying(theme) {\n            const themeList = this.list.filter((item) => item.theme === theme);\n            return themeList.length;\n        }"},computed:{list:function(){for(var e=new Array,t=1;t<10001;t++){var n=Math.floor(Math.random()*this.theme.length);e.push({id:t,theme:this.theme[n]})}return e},pageLength:function(){return this.list.length}},methods:{usedNum:function(e){this.currentTheme=e;var t=performance.now();this.num1=this.getThemeUseNum(e);var n=performance.now();this.time1=n-t;t=performance.now();this.num2=this.noCurrying(e);e=performance.now();this.time2=e-t},currying:function(){var t={};return this.list.map(function(e){return e.theme}).forEach(function(e){t[e]?t[e]=t[e]+1:t[e]=1}),function(e){return e in t?t[e]:0}},noCurrying:function(t){return this.list.filter(function(e){return e.theme===t}).length}},mounted:function(){this.getThemeUseNum=this.currying(this.list)}})},39:function(e,t,n){},40:function(e,t,n){}});