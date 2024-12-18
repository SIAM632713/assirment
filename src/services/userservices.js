
const usermodels=require('../models/usermodels');
const {Tokenencoded}=require('../utility/tokenhelper');



const Registrationservices=async (req)=>{
    try{
        const reqbody=req.body;
        await usermodels.create(reqbody);
        return {status:"success"};
    }catch(err){
        return {status:"fail"}.toString()
    }
}

const loginservices=async (req)=>{
    try{
    const reqbody=req.body;

    const data=usermodels.findOne(reqbody)
    if(data==null){

        return {status:"fail"}.toString()
    }else {
        const token=Tokenencoded(data['email'],data['_id']);
        return {status:"success",token};
    }
    }catch(err){
        return null;
    }
}

const profilereadservices=async (req)=>{
    try{

       const user_id=req.headers['user_id']
        const id=req.params.id;
        const data=await usermodels.findById({"_id":id,"user_id":user_id});
       return {status:"success",data:data};
    }catch(err){
        return {status:"fail"}.toString()
    }
}

const profilereadservicess=async (req)=>{
    try{
        const user_id=req.headers['user_id']
        const data=await usermodels.find()
        return {status:"success",data:data};
    }catch (e){
        return {status:"fail"}.toString()
    }
}

const profileupdateservices=async (req)=>{
    try{
        const user_id=req.headers['user_id']
        const id=req.params.id;
        const data=await usermodels.updateOne({"_id":id,"user_id":user_id});
        return {status:"success"};
    }catch (e){
        return {status:"fail"}.toString()
    }
}

const Deleteservices=async (req)=>{
    try{
        const user_id=req.headers['user_id']
        const id=req.params.id;
        await usermodels.deleteOne({"_id":id,"user_id":user_id})
        return {status:"success"};
    }catch (e){
        return {status:"fail"}.toString()
    }
}


module.exports={Registrationservices,loginservices,profilereadservices,profilereadservicess,profileupdateservices,Deleteservices};
