const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();

dishRouter.use(bodyParser.json());
//all are chained together to this route
dishRouter.route('/')//route method takes endpoint as parameter 
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!'); 
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('put opp not supported');

})
.post((req,res,next)=>{
    res.end('Will add the dish: '+ req.body.name+'withdetails: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting all the dishes');
});
module.exports=dishRouter;
