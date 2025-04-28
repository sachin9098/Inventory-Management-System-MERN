const CatchAsync = (fn)=>(req,res,next)=>{
    return Promise.resolve(fn(req,res,next)).catch((e)=>{
        console.log("Promise has been broken out");
        next(e)
        
    })

}

module.exports = CatchAsync