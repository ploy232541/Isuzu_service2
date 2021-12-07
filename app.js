const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('morgan')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var server = app.listen(3200, function () {
    console.log('Ready on port %d', server.address().port);
});

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

// เชื่อมต่อ routes
app.use(require('./src/routes/routes'))
//get,post,put
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app