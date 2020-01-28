module.exports=(x,y,callback) =>{
    if(x<=0||y<=0){
        setTimeout(()=>callback(new Error("dimensions to be >0"),
                                    null),
                                    2000);
        //setTimeout(funtion,delaytime) act as simulator for server delay
        //callback(error,returnvalue)
    }
    else{
        setTimeout(()=>callback(null,
                                    {
                                        perimeter :()=>(2*(x+y)),
                                        area:()=> (x+y)
                                    }),
                                    2000);
    }
}
//