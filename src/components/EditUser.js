import { FormControl, Input, InputLabel, FormGroup,Button,makeStyles,Typography,MuiAlert } from '@material-ui/core';
import { useState,useRef,useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { unstable_next } from 'scheduler';
import { getUsers ,editUser} from '../ApiCalls/Api';


const useStyle=makeStyles({


    container:{

        width:'50%',
        margin:"5% 0 0 25%",
        '& > *':{
            
            marginTop:'20px'
   
          }


    }
 
 
 })
 const intialValues={
    
    email:" ",
    first_name:" ",
    last_name:" ",
    password:" ",
    username:" "
}

const EditUsers = () => {
    
    const useref=useRef();
  
   const [user,setUser]=useState(intialValues); 
   const {first_name,last_name,username,email,password}=user;
   const history=useHistory();
   const classes=useStyle();
   
   
   const {id}=useParams();
//so that we can see the default values of the edit form on the first render
   useEffect(()=>{

     loadUserData();


   },[])

   const loadUserData=async()=>{
    
    const response=await getUsers(id);
    setUser(response.data);



   }
   
   
   
   
   const onValueChange=(e)=>{
       
        console.log(e.target.value);
      
        
        setUser({...user,[e.target.name]:e.target.value})
        
       
    }

   

    const editUserDetails= async(e)=>{
     
        
        
        await editUser(id,user) ;
    
      alert("User Updated Successfully")
      history.push('/')
    }


    return (

        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit User</Typography>

            <FormControl>

                <InputLabel>First_Name</InputLabel>

                <Input  onChange={(e)=> onValueChange(e)}  name="first_name" value={first_name}/>


            </FormControl>
            <FormControl>

                <InputLabel>Last_Name</InputLabel>

                <Input onChange={(e)=> onValueChange(e)}  name="last_name" value={last_name}/>


            </FormControl>
            <FormControl>

                <InputLabel>User_Name</InputLabel>

                <Input onChange={(e)=> onValueChange(e)}  name="username" value={username}/>


            </FormControl>
            <FormControl>

                <InputLabel>Email</InputLabel>

                <Input onChange={(e)=> onValueChange(e)}  name="email" value={email}/>


            </FormControl>
            
         <Button  onClick={(e)=> editUserDetails(e)} variant="contained" color="primary">Edit User</Button>
        </FormGroup>


    )



}
export default EditUsers;