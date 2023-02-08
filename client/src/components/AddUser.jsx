//useState mae object pass hota hai
import {useState} from 'react';


//FormControl, FormGroup these are like div
import { FormControl, FormGroup,InputLabel,Input,Typography,styled,Button} from "@mui/material";

//importing addUser function from api.js, in this file
import {addUser} from '../service/api.js';
import {useNavigate} from 'react-router-dom';

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
const AddUser=()=>{

    //defaultValue jo object hai uski value user mae save hai
    const [user,setUser]=useState(defaultValue);

    const navigate=useNavigate();//taki jav AddUser button pae click karae toh AllUser wala Table pae redirect kar dae

    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value );
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails=async ()=>{
       await addUser(user);
       navigate('/all');//route ka name "all" hai, espae jana hai
    }

    return(
        <Container>
            <Typography variant="h3">Add User</Typography>
            <Control>
                <InputLabel>Name</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="name" />
            </Control>
            <Control>
                <InputLabel>UserName</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="username" />
            </Control>
            <Control>
                <InputLabel>Email</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="email" />
            </Control>
            <Control>
                <InputLabel>Phone</InputLabel>
                <Inpu onChange={(e)=>onValueChange(e)} name="phone" />
            </Control>
            <Control>
                <Button variant="contained" onClick={()=>addUserDetails()}>Add User</Button>
            </Control>
        </Container>
    )
}

export default AddUser;