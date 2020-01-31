const express = require('express');
const http= require('http');
const morgan=require('morgan');
const bodyParser=require('body-parser');

const hostname='localhost';
const port =3000;
const app=express();
//middlewares
app.use(morgan('dev'))//Morgan is basically a logger, on any requests being made,it generates logs automatically.
app.use(bodyParser.json());
//
app.all('/dishes',(req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();//search for next verb
});

app.get('/dishes',(req,res,next)=>{
    res.end('Will send all the dishes to you!'); //res.end ends here triggers reply
});
app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('put opp not supported');//bodyparser parses and stores in body of rec

});
app.post('/dishes',(req,res,next)=>{
    res.end('Will add the dish: '+ req.body.name+'withdetails: '+req.body.description);//bodyparser parses and stores in body of rec
});
app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all the dishes');//bodyparser parses and stores in body of rec
});
app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send the details of the dishe:'+req.params.dishId+'to you!'); //res.end ends here triggers reply
});
app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('put opp not supported on dishes/'+req.params.dishId);//bodyparser parses and stores in body of rec

});
app.put('/dishes/:dishId',(req,res,next)=>{
    res.write('updating the dish:'+req.params.dishId+'\n');
    res.end('Will update the dish: '+ req.body.name+' with details :'+ req.body.description);//bodyparser parses and stores in body of rec
});
app.delete('/dishes/:dishId',(req,res,next)=>{
    res.end('Deleting the dishes: '+req.params.dishId);//bodyparser parses and stores in body of rec
});
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