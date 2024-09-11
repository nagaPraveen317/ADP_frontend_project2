
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

function onDelete(e){
  e.preventDefault();

  if(selectedEntry.id===-1){
  console.log("No customer is selected")
    }
  else{
    console.log("selected data id is: " + selectedEntry.id);
    deleteById(selectedEntry.id)
    }
 
  }


function onSave(e){

e.preventDefault();
  
  if(selectedEntry.id===-1){
    post(selectedEntry)
  }else{
    put(selectedEntry.id,selectedEntry)
  }
 

  
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

//membd functions

function deleteById(id) {
  let arrayIndex = getArrayIndexForId(id);
  if( arrayIndex >= 0 && arrayIndex < customers.length){
    customers.splice(arrayIndex,1);
    console.log("In deleteById method: ")
    console.log(customers)
    setCustomers(customers);
    setSelectedEntry(empty)
  }
}

function getArrayIndexForId(id){
  for( let i = 0; i < customers.length; i++){
    if(customers[i].id === id){
      return i;
    }
  }
  return -1;  
}


function getNextId(){
  let maxid = 0;
  for( let item of customers){
    maxid = (item.id > maxid)?item.id:maxid;
  }  
  return maxid + 1;
}

 function post(item) {
  let nextid = getNextId();
  item.id = nextid;
  customers[customers.length] = item;
  setCustomers(customers)
setSelectedEntry(empty);
}

function put(id, item) {
  for( let i = 0; i < customers.length; i++){
    if(customers[i].id === id){
      customers[i] = item;
      setCustomers(customers)
    setSelectedEntry(empty);
      return;
    }
  }
}
/*function get(id) {
    let result = null;
    for( let item of customers){
        if(item.id === id){
            result = item;
        }
    }
  return result;
}*/



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

      <h3>{selectedEntry.id===-1?"Add":"Update"}</h3>
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
        <button onClick={(e)=>onDelete(e)} id="delete">Delete</button>
        <button onClick={(e)=>onSave(e)} id="save">Save</button>
        <button onClick={onCancel} id="clear">Cancel</button>

      </form>
    </div>
  );
}

export default App;
