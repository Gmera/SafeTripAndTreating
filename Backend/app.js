const createError = require('http-errors');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const app = express();
var port ;

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({ extend: true }));
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.send('Hello');
});

app.get('/user',(req, res, next)=>{
    res.send('users');
});

app.get('/places',(req, res, next)=>{
    
});

app.get('/ratings',(req, res, next)=>{
    
});

app.listen(port, ()=>{
    console.log('listening!')
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;