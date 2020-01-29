const http=require('http');
const hostname='localhost';
const port =3000;
//setup server
const server=http.createServer((req,res)=>{//in http module we have createServer(function(request,response))
    console.log(req.headers);//req obj gives access to in comming http headers
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<http><body><h1>Hello Rohan!</h1></body></html>');
    
})

//start server
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);//``is used if we want to use variable inside printed string
});