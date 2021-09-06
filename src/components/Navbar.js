import {AppBar,makeStyles,Toolbar,Typography} from '@material-ui/core'
import {NavLink} from 'react-router-dom'

const useStyle= makeStyles({

  tabs:{

    color:"#ffffff",
    textDecoration:'none',
    margin: 20,

  }


})

const Navbar=()=>{
    const classes=useStyle();
  return (


  <AppBar  style={{ background: '#111111' }} position="static">
   <Toolbar >
         <Typography >User Management</Typography>
         
        <NavLink  className={classes.tabs}  to="/all" exact>All Users</NavLink>
        <NavLink  className={classes.tabs} to="/add" exact>Add User</NavLink>
   </Toolbar>
   </AppBar>

  );



}
export default Navbar;