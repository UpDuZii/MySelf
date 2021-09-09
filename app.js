var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var lembretesRouter = require('./routes/lembretesRoutes');
var novLemRouter = require('./routes/novLemRoutes');
var editarLemRouter = require('./routes/lembretesRoutes');
var deleteLembRouter = require('./routes/deleteLembRoutes');
var updateLembRouter = require('./routes/updateLembRoutes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/lembretes', lembretesRouter);
app.use('/api/lembretes/novLem', novLemRouter);
app.use('/api/lembretes/editarLem', editarLemRouter);
app.use('/api/lembretes/editarLem/deleteLemb', deleteLembRouter);
app.use('/api/lembretes/editarLem/updateLemb', updateLembRouter);


module.exports = app;

