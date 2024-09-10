
import './App.css'
import {  useState } from 'react';

function App() {
  let data={
    name:"Jack Jackson",
    email:"jack@abc.com",
    password:"jackj"
  }
  const [selectedEntry,setSelectedEntry]=useState(data);
 

 

function onDelete(){
  console.log("Clicked delete button");
}
function onSave(){
  console.log("Clicked onSave button");
}
function onCancel(){
  console.log("Clicked on Save button");
}
function handleList(e){
  
 var id=e.target.parentNode.id;
console.log("Clicked on the entry in the list!!");

console.log(id);
var element=document.getElementById(id);
console.log(element)
let name=element.cells[0]['innerText']
console.log(name)
let email=element.cells[1]['innerText']
console.log(email)
let password=element.cells[2]['innerText']
console.log(password)
let newdata={
  name:name,
  email:email,
  password:password
}
console.log(newdata.email)
setSelectedEntry(newdata)

console.log("After set method: ")
console.log(selectedEntry)
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
          
        <tr id="entry1" onClick={(e)=>handleList(e)} style={{cursor:"pointer"}}>
          
        <td>Jack Jackson</td>
        <td>jack@abc.com</td>
        <td>jackj</td>
        </tr>
        
       
        <tr id="entry2" onClick={(e)=>handleList(e)} style={{cursor:"pointer"}}>
        <td>Katie Kates</td>
        <td>katiek@abc.com</td>
        <td>katiek</td>
        </tr>
        
        
        <tr id="entry3" onClick={(e)=>handleList(e)} style={{cursor:"pointer"}}>
        <td>Glen Glenns</td>
        <td>gleng@abc.com</td>
        <td>gleng</td>
        </tr>
        
        </tbody>
      </table>

      <h3>Update</h3>
      <form className='form-style'>
        <label name="name" htmlFor="name" >Name: </label><br/>
        <input type="text" id="name" placeholder='enter your name' onChange={(e)=>handleChange(e)} value={selectedEntry.name}  />
        <br/>
        <label name="email" htmlFor="email" >Email: </label><br/>
        <input type="email" id="email" placeholder='enter your email' value={selectedEntry.email} onChange={(e)=>handleChange(e)} required/>
        <br/>
        <label htmlFor="password" >Pass: </label><br/>
        <input name="password" id="password" placeholder='enter your password'value={selectedEntry.password}  onChange={(e)=>handleChange(e)} required/>
        <br/>
        <button onClick={onDelete} id="delete">Delete</button>
        <button onClick={onSave} id="save">Save</button>
        <button onClick={onCancel} id="clear">Cancel</button>

      </form>
    </div>
  );
}

export default App;
