// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createWebpackAliases } = require('./webpack.helpers')

// Export aliases
module.exports = createWebpackAliases({
	'@assets': 'assets',
	'@src': 'src',
	'@components': 'src/components',
	'@utils': 'src/utils',
	'@store': 'src/store',
})
