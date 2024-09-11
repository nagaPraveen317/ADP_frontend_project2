
import './App.css'
import {  useState } from 'react';
import { getAll } from './memdb.js';

function App() {
  
 
  const empty={
    id:-1,
    name:"",
    email:"",
    password:""
  }
  const [selectedEntry,setSelectedEntry]=useState(empty);
  const [customers,setCustomers]=useState([])

    useState(()=>{
      setCustomers(getAll());
    },[])
    console.log(customers)

function onDelete(){
  console.log("Clicked delete button");
}
function onSave(){
  console.log("Clicked onSave button");
}
function onCancel(){
  setSelectedEntry(empty)
  
}
function handleList(e,customer){
  



if(selectedEntry.email===customer.email){
  
 setSelectedEntry(empty);

}
else{
 
  setSelectedEntry(customer)
  

}

}

function handleChange(e){
  console.log(e.target.id)
  let name,email,password;
  if(e.target.id==='name'){
    name=e.target.value;
    setSelectedEntry(prev=>({...prev,name:name}))
  }
  
else if(e.target.id==='email'){
  email=e.target.value;
  setSelectedEntry(prev=>({...prev,email:email}))
}

else{
  password=e.target.value;
  setSelectedEntry(prev=>({...prev,password:password}))
}
  
}

// functions in memdb.js

//end of memdb functions

  return (
    <div>
      <h3>Customer List</h3>
      <table className="table-style">
        <thead>
          
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
        </tr>
        
        </thead>
        <tbody>
          {
            customers.map((customer,index)=>(
              
              <tr id={`entry${index}`} key={customer.id} onClick={(e)=>{
                console.log("Customer details: ", customer)
                handleList(e,customer) }
                } style={{cursor:"pointer"}}  className={  selectedEntry.id===customer.id?'selectedRow':''}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
              </tr>
              
            )

            )
          }
         
      
        
        </tbody>
      </table>

      <h3>Update</h3>
      <form className='form-style'>
        <label name="name" htmlFor="name" >Name: </label><br/>
        <input type="text" id="name" placeholder='enter your name' onChange={(e)=>handleChange(e)} value={selectedEntry.name}  />
        <br/>
        <label name="email" htmlFor="email" >Email: </label><br/>
        <input type="email" id="email" placeholder='enter your email' value={selectedEntry.email} onChange={(e)=>handleChange(e)} />
        <br/>
        <label htmlFor="password" >Pass: </label><br/>
        <input name="password" id="password" placeholder='enter your password'value={selectedEntry.password}  onChange={(e)=>handleChange(e)} />
        <br/>
        <button onClick={onDelete} id="delete">Delete</button>
        <button onClick={onSave} id="save">Save</button>
        <button onClick={onCancel} id="clear">Cancel</button>

      </form>
    </div>
  );
}

export default App;
