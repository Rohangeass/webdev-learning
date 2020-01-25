var rect = require('./rectangle');

function solveRect(l,b){
    console.log("solving for rectangle");
    if(l<=0||b<=0){
        console.log("dimensions to be >0");
    }
    else{
        console.log("area of rectangle "+rect.area(l,b));
    }
}

solveRect(3,5);
