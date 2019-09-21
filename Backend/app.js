const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
var port ;

//app.use(BodyParser.json());
//app.use(BodyParser.urlencoded({ extend: true }));
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    res.send('Hello');
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