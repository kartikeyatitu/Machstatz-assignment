import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import AllUsers from './components/AllUsers'
import AddUsers from './components/AddUsers'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import InvalidRoute from "./components/InvalidRoute";
import EditUsers from "./components/EditUser";
//Note--> For Updating dynamic routing-->
function App() {
  return (
    
 <BrowserRouter>
   <Navbar/>
   <Switch>
   <Route exact  path="/" component={AllUsers}/>
   <Route exact  path="/all" component={AllUsers}/>
   <Route  exact path="/add" component={AddUsers}/>
   <Route exact path="/edit/:id" component={EditUsers}/>
   <Route   component={InvalidRoute}/>
   </Switch>
  </BrowserRouter>
 
 

  )
};

export default App;
