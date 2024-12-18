const jwt = require('jsonwebtoken');

exports.Tokenencoded=(email,user_id)=>{
    const KEY="789456-NBFS";
    const EXPIRE={expiresIn: '24h'}
    const PAYLOAD={email:email,user_id:user_id};
    return jwt.sign(PAYLOAD,KEY,EXPIRE);
}
exports.Tokendecoded=(token)=>{
    try{
        const KEY="789456-NBFS";
        return jwt.verify(token,KEY);
    }catch(err){
        return null;
    }
}