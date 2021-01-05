/**
 * @file 页面html配置
 * @use: 动态配置html页面，获取src下每个文件下的pageinfo.json内容,解析到HtmlWebpackPlugin中
 */

const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const getPath = require("./get-path");
let htmlArr = [];
function createHtml(page_path){
	getPath(page_path).map((item)=>{
		console.log(`./src/pages/${item}/index.html`);
		htmlArr.push(new HtmlWebpackPlugin({
			chunks:[`${item}/${item}`,`vendors`], //引入的js
			template: `./src/pages/${item}/index.html`,
			filename : item == "index" ? "index.html" : `${item}/index.html`, //html位置
			minify:{//压缩html
				collapseWhitespace: true,
				preserveLineBreaks: true
			},
		}));
	});
	return htmlArr;
}
module.exports = createHtml;
