const express = require('express');
const http= require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');
const dishRouter=require('./routes/dishRouter');
const hostname='localhost';
const port =3000;
const app=express();
//middlewares
app.use(morgan('dev'))//Morgan is basically a logger, on any requests being made,it generates logs automatically.
app.use(bodyParser.json());
//mount router
app.use('/dishes',dishRouter);

app.use(express.static(__dirname+'/public'));//express static html files

app.use((req,res,next)=>{//next is optional used to call middleware
    console.log(req.headers);//req obj gives access to in comming http headers
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<http><body><h1>Hello Rohan This Is An Express Server!</h1></body></html>');
});
const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);//``is used if we want to use variable inside printed string
});