
import { response } from 'express';
import User from '../schema/user-schema.js';

export const addUser=async (request,response)=>{
    const user=request.body;
    
    const newUser=new User(user);

    try{
        await newUser.save();
        response.status(201).json(newUser);//api status is set to 201, and jo bhi data save hua hai usko return karwa rahae hai
    }catch(error){
        response.status(409).json({message:error.message});
    }
}

//ess getUser function mae request mae kuch nahi hoga,response mae data bhejna hai
export const getUsers=async (request,response)=>{
    //find({name:'pankaj',email:'ajay@gmail.com'}); condition laga kae bhi find kar saktae hai,agar yae condition match hoga toh usae return kar dega
    //response mae status 200 set kar dengae,and json mae user data bhar kae as a response send kar dengae
    
    try{
        const users=await User.find({});
        response.status(200).json(users);
    }catch(error){
        response.status(404).json({message: error.message});
    }

}

export const getUser=async (request,response)=>{
    // console.log(request.params.id);
    try{
        const user=await User.find({_id:request.params.id});
        response.status(200).json(user);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

export const editUser=async (request,response)=>{

    
    let user=request.body;
    const editUser=new User(user);

    try{
        await User.updateOne({_id:request.params.id},editUser);
        response.status(201).json(editUser);
    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteUser=async (request,response)=>{
    try{
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message:'User deleted sucessfully'});
    }catch(error){
        response.status(409).json({message:error.message});
    }
}