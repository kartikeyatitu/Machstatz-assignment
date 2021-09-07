import axios from 'axios'

const url= "https://machstatz1.herokuapp.com/machstatz" 
export  const getUsers = async(id) => {

    id= id  ||  ''

    return  await axios.get(` ${url}/${id}`);


}


//post request for adding users


export const addUser =async(user)=>{

    

    return  await axios.post(url,user);

}

export const editUser =async(id,user)=>{

    

    return  await axios.put(`${url}/${id}`,user);

}

export const deleteUser =async(id)=>{

    

    return  await axios.delete(`${url}/${id}`);

}