//Example to understand asynchronous behaviour through callbacks

var rect = require('./rectangle2');//rectangle module

function solveRect(l,b){
console.log("This execution is before the call rect which is delayed by the setTimeout function");
rect(l,b,(err,rectangle)=>{
    if(err)
    {
        console.log("ERROR:",err.message);
    }
    else{
        console.log("area:"+rectangle.area());
        console.log("perimeter:"+rectangle.perimeter());
    }
});
console.log("This execution is after the call rect which is delayed by the setTimeout function");
}

solveRect(3,5);
