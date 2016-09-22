import express from 'express';
import http from 'http';
import webpack from 'webpack';
import webpackConfig from './webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const webpackCompiler = webpack(webpackConfig);
const app = express();

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(webpackCompiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(webpackCompiler));


app.get('/', (req, res, next) => {
    res.end('<!DOCTYPE html><script type="text/javascript" src="bundle.js"></script>');
});

const server = http.createServer(app);
server.listen(3000, 'localhost', function (err) {
    if (err) throw err;

    const addr = server.address();

    console.log('Listening at http://%s:%d', addr.address, addr.port);
});
