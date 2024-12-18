const {Registrationservices,loginservices,profilereadservices,profilereadservicess,profileupdateservices,Deleteservices}=require('../services/userservices');

exports.Registration =async (req,res)=>{
    const result=await Registrationservices(req);
    return res.status(200).json(result);
}

exports.login=async (req,res)=>{
    const result=await loginservices(req);
    if(result['status']=="success"){
        const cookieoption={expires:new Date(Date.now()+24*6060*1000),httpOnly:false};
        res.cookie('token',result['token'],cookieoption);
        return res.status(200).json(result)
    }else {
        return res.status(200).json(result);
    }

}

exports.profileread=async (req,res)=>{
    const result=await profilereadservices(req);
    return res.status(200).json(result);
}

exports.profilereads=async (req,res)=>{
    const result=await profilereadservicess(req);
    return res.status(200).json(result);
}

exports.profileupdate=async (req,res)=>{
    const result=await profileupdateservices(req);
    return res.status(200).json(result);
}

exports.Delete=async (req,res)=>{
    const result=await Deleteservices(req);
    return res.status(200).json(result);
}