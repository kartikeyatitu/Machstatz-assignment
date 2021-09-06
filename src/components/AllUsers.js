import {Table, TableHead, TableRow,TableCell,TableBody,makeStyles,Button } from "@material-ui/core";
import { useEffect ,useState} from "react";
import { getUsers,deleteUser } from "../ApiCalls/Api";
import { Link,useHistory } from "react-router-dom";

const useStyle=makeStyles({

   table:{
        width:'90%',
        margin:'50px 0 0 50px'

   },
   thead:{
     
       '& > *':{
    
         background:'#000000',
         color:'#FFFFFF'

       }

   }


})


const AllUsers=()=>{
    const history=useHistory();

    const classes=useStyle();


 const [users,setusers]=useState([]);


    useEffect(()=>{

        getAllUsers();

    },[])

const getAllUsers=async()=>{

    
   const response=  await getUsers();
   
   console.log(response);
   setusers(response.data);


 

}

const deleteuser=async(id)=>{

   
    let response;
    try{
     response=await deleteUser(id);
    }catch(err)
    {
        alert("Some error occured ,Could not delete User");
    }
    getAllUsers();
    alert('User Deleted Successfully');
    
   
    




}


return (
  
    <Table className={classes.table}>
     <TableHead>
   <TableRow className={classes.thead}>
   <TableCell>Id</TableCell>

   <TableCell>First_Name</TableCell>
   <TableCell>Last_Name</TableCell>
   <TableCell>UserName</TableCell>
   <TableCell>Email</TableCell>
   <TableCell></TableCell>
  </TableRow>
  </TableHead>
<TableBody>

  {
      users.map(user=> ( 
        <TableRow >
        <TableCell>{user.id}</TableCell>
      
        <TableCell>{user.first_name}</TableCell>
        <TableCell>{user.last_name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>     
        <TableCell>
          <Button variant="contained" color="primary" style={{marginRight: "10px"}}   component={Link}  to={`/edit/${user.id}`}>Edit</Button>
          <Button variant="contained" color="secondary"  onClick={()=> deleteuser(user.id)}>Delete</Button>



        </TableCell>
        </TableRow>
      ))
  }

</TableBody>
 

    </Table>
 

)



}

export default AllUsers;