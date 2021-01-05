/* eslint-env node */

/**************************
 * 处理图片问题 https://blog.csdn.net/ma_jiang/article/details/83445450
 ***************************/

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const createHtml =require("./config/create-html");// html配置
const getEntry = require("./config/get-entry");
const entry = getEntry("./src/pages");
const htmlArr = createHtml("./src/pages");

//主配置
module.exports = (env, argv) => ({
	entry: entry,
	output: {
		path: path.join(__dirname, "build"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							{"plugins": ["@babel/plugin-proposal-class-properties"]} //这句很重要 不然箭头函数出错
						], 
					}
				},
			},
			// {
			// 	test: /\.css$/,
			// 	use: ["style-loader", "css-loader"],
			// 	exclude: /node_modules/,
			// },
			{
				test: /\.(scss|css)$/, //css打包 路径在plugins里
				use: [
					argv.mode == "development" ? { loader: "style-loader"} :MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false, sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } }
				],
				exclude: /node_modules/,
			},
			{
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192',
                options:{
					name:'images/[name].[ext]'
                }
            },
		 
		],
	},
	devServer: {
		port: 3100,
		// open: true,
	},
	resolve:{
		alias:{
			src:path.resolve(__dirname,"src/"),
			component:path.resolve(__dirname,"src/component/"),
			store:path.resolve(__dirname,"src/store/"),
		}
	},
	plugins: [
		...htmlArr, // html插件数组
		new MiniCssExtractPlugin({ //分离css插件
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	optimization: {
		
		minimizer: [//压缩js
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: { //压缩css
			// chunks: 'all',
			cacheGroups: {
				commons: {
					test: /(react|react-dom)/,
					name: "vendors",
					chunks: "all",
				  },
				// styles: {
				// 	name: "styles",
				// 	test: /\.css$/,
				// 	chunks: "all",
				// 	enforce: true
				// }
			}
		}
	}
});
