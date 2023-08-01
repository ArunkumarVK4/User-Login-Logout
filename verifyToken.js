const jwt=require('jsonwebtoken');

 exports.verifyToken=async(req,res,next)=>{
const bearerHeader=req.header("authorization");
if(typeof bearerHeader!=='undefined'){
    const bearer=bearerHeader.split(" ");
    bearerToken=bearer[1];
    req.token=bearerToken;
    next();
}else{
    res.json({
        status:401,
        message:"Invalid Token"
    })
}
} 