// eslint-disable-next-line @typescript-eslint/no-var-requires
const { inDev } = require('./webpack.helpers')

module.exports = [
	{
		// Add support for native node modules
		test: /\.node$/,
		use: 'node-loader',
	},
	{
		// Webpack asset relocator loader
		test: /\.(m?js|node)$/,
		parser: { amd: false },
		use: {
			loader: '@timfish/webpack-asset-relocator-loader'/*'@marshallofsound/webpack-asset-relocator-loader'*/,
			options: {
				outputAssetBase: 'native_modules',
			},
		},
	},
	{
		// Typescript loader
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			},
		},
	},
	{
		// CSS Loader
		test: /\.css$/,
		use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
	},
	{
		// Less loader
		test: /\.less$/,
		use: [
			{ loader: 'style-loader' },
			{ loader: 'css-loader' },
			{ loader: 'less-loader' },
		],
		// Sass loader
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			{ loader: 'style-loader' },
			// Translates CSS into CommonJS
			{ loader: 'css-loader' },
			// Compiles Sass to CSS
			{ loader: 'sass-loader' },
		],
	},
	{
		// Images Loader
		test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					publicPath: 'assets/images',
					outputPath: inDev()
						? 'assets/images'
						: './main_window/assets/images',
				},
			},
		],
	},
	{
		// Font & SVG loader
		test: /\.(woff(2)?|ttf|otf|eot)$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					publicPath: 'assets/fonts',
					outputPath: inDev()
						? 'assets/fonts'
						: './main_window/assets/fonts',
				},
			},
		],
	},
]
