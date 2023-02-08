//.js kae kuch function hai jisae throuigh api ko call kar saktae hai,here we use library axios
import axios from 'axios';
import { Profiler } from 'react';

const URL=`http://localhost:8000`;

export const addUser=async (data)=>{
    try{
        return await axios.post(`${URL}/add`, data);
    }
    catch(error){
        console.log("Error while calling add User API",error);
    }
}

// api call are ashyronous call ,tho unhae await laga kae handle karna padta hai,but joo await use hota hai woo ashhronous function pae hii kam karta hai

// facebook.com/home
// facebook.com/Profile
// facebook.com/chat


//extracting from database
export const getUsers=async ()=>{
    
    try{
        return await axios.get(`${URL}/all`);//kuch data return karega
    }catch(error){
        console.log("Error while calling getUsers API ",error);
    }
}

export const getUser=async (id)=>{
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("Error while calling getUser API",error);
    }
}

export const editUser=async (user,id)=>{
    // console.log("2");
    // console.log("user",user);
    // console.log("`${URL}/${id}`",`${URL}/${id}`)
    try{
        return await axios.put(`${URL}/${id}`,user);//yaha pae post bhi likh saktae hai
    }catch(error){
        console.log('Error while calling editUser api', error);
    }
}

export const deleteUser=async(id)=>{
    try{
        return await axios.delete(`${URL}/${id}`);
    }
    catch(error){
        console.log("Error while calling deleteUser API",error);
    }
}