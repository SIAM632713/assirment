const {Tokendecoded}=require("../utility/tokenhelper");
module.exports=(req,res,next)=>{
    const token=req.headers['token']
    if(!token){
        const token=req.cookies['token'];
    }
    const decoded=Tokendecoded(token);
    if(decoded==null){
        res.status(401).send({message:"Unauthorized"})
    }else {
        const email=decoded['email'];
        const user_id=decoded['user_id'];

        req.headers.email=email;
        req.headers.user_id=user_id;

        next();
    }
}