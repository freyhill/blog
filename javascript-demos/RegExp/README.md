# 正则表达式

## 正则表达式的创建

方法一：
```
const r1 = /abc/
```
方法二
``` 
const r2 = new RegExp('abc');
````

## 正则表达式的两种方法

#### 1. 匹配：
验证字符串是否符合匹配规则

语法
```
正则表达式.test(需要检测的字符串)
```
返回一个布尔值：true / false
实例
```
const r1 = /abcd/.test('1234') // false 
```
#### 2. 捕获：
从字符串里获取符合正则规则的那一部分片段

语法
```
正则.exec(你想要捕获的字符串)

```
返回：
1. 字符串里面没有符合规则的片段 -> null
2. 字符串里有符合规则的片段
   *  2.1：基础捕获
        * 返回一个数组，0是捕获出来的片段
        * 不管有多少个片段都是第一个片段

未捕获上的情况
```
const r2 = /leiov/
const hasLeinov = r2.exec('i am leinov, i am 18');

output:
null
```
捕获上的情况
```
const r2 = /leinov/
const hasLeinov = r2.exec('i am leinov, i am 18');

output:

["leinov", index: 5, input: "i am leinov, i am 18", groups: undefined]
```
捕获上后返回一个数组，数组第一项表示捕获的字符串,第二index是开始的下标。