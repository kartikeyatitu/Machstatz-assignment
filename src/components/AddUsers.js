import { FormControl, Input, InputLabel, FormGroup,Button,makeStyles,Typography,MuiAlert } from '@material-ui/core';
import { useState,useRef } from 'react';
import { addUser } from '../ApiCalls/Api';
import { useHistory } from 'react-router-dom';
import { unstable_next } from 'scheduler';
import { getUsers } from '../ApiCalls/Api';

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

const AddUsers = () => {
    
    const useref=useRef();
  
  const [user,setUser]=useState(intialValues); 
  const {first_name,last_name,username,email,password}=user;
  const history=useHistory();
 
    const classes=useStyle();
    const onValueChange=(e)=>{
       
        console.log(e.target.value);
      
        
        setUser({...user,[e.target.name]:e.target.value})
        
       console.log(email);
    }

    const checkMail=(existinguser,email)=>{

       const res=existinguser.data.find((em) =>  em.email === email);
       if(!!res)
       {
           return true;
       }
    }
  
     const checkUsername=(existinguser,username)=>{

        const res1=existinguser.data.find((em) =>  em.username === username);
        if(!!res1)
        {
            return true;
        }
     }

    const addUserDetails= async(e)=>{
     
        let existinguser
        /* console.log(existinguser);
         console.log(existinguser.data[0].email)*/
         
        try{
           existinguser=await getUsers();
        }catch(err)
        {
            alert('Fetching places failed, please try again ');
        }
 
        if(checkMail(existinguser,email)==true || checkUsername(existinguser,username)==true)
        {
             return alert("User alerady exists");
        }
        
        await addUser(user) ;
    
      alert("User Created Successfully")
      history.push('./all')
    }


    return (

        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>

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
            <FormControl>

                <InputLabel>Password</InputLabel>

                <Input onChange={(e)=> onValueChange(e)}  name="password"/>


            </FormControl>
         <Button  onClick={(e)=> addUserDetails(e)} variant="contained" color="primary">Add User</Button>
        </FormGroup>


    )



}
export default AddUsers;