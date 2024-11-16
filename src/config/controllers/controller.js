import { getAllUsersService,createUserService,getUserByIdService,updateUserService,deleteUserService } from "../models/userModel.js"

const handleResponse=(res,status,message,data=null)=>{
    res.status(status).json({
        status,
        message,
        data
    })
}

export const getalluser=async(req,res,next)=>{
    try {
    const result=await getAllUsersService();
    return handleResponse(res,200,"Users lists fetched",result)
    }
    catch(err){
        next(err)
    }
}  

export const createUser=async(req,res,next)=>{
    const {name,email}=req.body;
    try {
        const newUser=await createUserService(name,email)
        return handleResponse(res,200,"User Created Successfully",newUser)
    }
    catch(err) {
        next(err)
    }
}

export const getUserById=async(req,res,next)=>{
    try {
        const result=await getUserByIdService(req.params.id)
        return handleResponse(res,200,"User fetched Successfully",result)
    }
    catch(err) {
        next(err)
    }
}

export const updateUser=async(req,res,next)=>{
    try {
        const result=await updateUserService(req.params.id,req.body)
        return handleResponse(res,200,"Updated user successfully",result)
    }
    catch(err){
        next(err)
    }
}

export const deleteUser=async(req,res,next)=>{
    try {
        const result=await deleteUserService(req.body)
        return handleResponse(res,200,"Deleted user successfully",result)
    }
    catch(err){
        next(err)
    }
}