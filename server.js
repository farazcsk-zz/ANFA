// https://github.com/christianalfoni/webpack-express-boilerplate see this if you want to actually deploy...

const path = require('path')
const express = require('express')
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const port = process.env.PORT || 8080
const app = express()

const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
	publicPath: config.output.publicPath,
	contentBase: 'src',
	stats: {
	  colors: true,
	  hash: false,
	  timings: true,
	  chunks: false,
	  chunkModules: false,
	  modules: false
	}
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res) {
	res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
	res.end();
});

app.listen(port)
console.log("server started on port " + port)