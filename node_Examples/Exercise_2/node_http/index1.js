const http=require('http');
const hostname='localhost';
const port =3000;
const fs=require('fs');//file system module allows to read write files
const path=require('path');//allows to specify path of a file in local file system
//setup server
const server=http.createServer((req,res)=>{//in http module we have createServer(function(request,response))
    console.log("request or"+req.url+"by method"+req.method);//req obj gives access to in comming http headers
    if(req.method=='GET')
    {
        var fileUrl;
        if(req.url=='/') fileUrl='/index.html';
        else fileUrl=req.url;
        var filepath=path.resolve('./public'+fileUrl);
        const fileExtension =path.extname(filepath);
        if(fileExtension=='.html'){
            fs.exists(filepath,(exists)=>{
                if(!exists)
                {
                    res.statusCode=404;
                    res.setHeader('Content-Type','text/html');
                    res.end('<html><body><h1>Error 404: '+ fileUrl+' Not found</h1></body></html>');
                    return;
                }
                else
                {
                    res.statusCode=200;
                    res.setHeader('Content-Type','text/html');
                    fs.createReadStream(filepath).pipe(res);
                    return;
                }

            }) 
        }
        else{
            res.statusCode=404;
            res.setHeader('Content-Type','text/html');
            res.end('<html><body><h1>Error 404: '+ fileUrl+' Not an html file</h1></body></html>');
            return;

        }
    }
    else
    {
        res.statusCode=404;
        res.setHeader('Content-Type','text/html');
        res.end('<html><body><h1>Error 404: '+ req.method+' Not supported</h1></body></html>');
        return;
    }
    
})

//start server
server.listen(port,hostname,()=>{
    console.log(`server running at http://${hostname}:${port}`);//``is used if we want to use variable inside printed string
});