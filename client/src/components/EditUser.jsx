//useState mae object pass hota hai
import {useState,useEffect} from 'react';


//FormControl, FormGroup these are like div
import { FormControl, FormGroup,InputLabel,Input,Typography,styled,Button} from "@mui/material";

//importing addUser function from api.js, in this file
import {editUser,getUser} from '../service/api.js';
import {useNavigate,useParams} from 'react-router-dom';

const Container=styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto;
    
`
const Control=styled(FormControl)`
    margin-top:30px;
`
const Inpu=styled(Input)`
    height:50px;
`

const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}
const EditUser=()=>{

    //defaultValue jo object hai uski value user mae save hai
    const [user,setUser]=useState(defaultValue);

    const navigate=useNavigate();//taki jav AddUser button pae click karae toh AllUser wala Table pae redirect kar dae
    const {id} =useParams();//useParams, ek object hai jisko distructure kar kae id nikal rahae hai

    useEffect(()=>{
        loadUserDetails();
    },[])

    const loadUserDetails=async ()=>{
        const response=await getUser(id);
        // console.log(response.data);
        setUser(response.data[0]);
    }

    const onValueChange=(e)=>{
        // console.log(e.target.name,e.target.value );
        setUser({...user,[e.target.name]:e.target.value});
        // console.log(user);
    }

    const editUserDetails=async ()=>{
        console.log("1");
       await editUser(user,id);
       navigate('/all');//route ka name "all" hai, espae jana hai
    }

    return(
        <Container>
            <Typography variant="h3">Edit User</Typography>
            <Control>
                <InputLabel>Name</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="name" value={user.name} />
            </Control>
            <Control>
                <InputLabel>UserName</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="username" value={user.username} />
            </Control>
            <Control>
                <InputLabel>Email</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="email" value={user.email} />
            </Control>
            <Control>
                <InputLabel>Phone</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="phone" value={user.phone} />
            </Control>
            <Control>
                <Button variant="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </Control>
        </Container>
    )
}

export default EditUser;