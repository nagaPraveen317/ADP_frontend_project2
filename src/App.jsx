
import './App.css'
import {  useEffect, useState } from 'react';
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm.jsx';
import CustomerList from './components/CustomerList.jsx';
import { getAllCustomers } from './restdb.js';


function App() {
  

  
  const empty={
    id:-1,
    name:"",
    email:"",
    password:""
  }
  const [selectedEntry,setSelectedEntry]=useState(empty);
  const [customers,setCustomers]=useState([])
 const fetchData=async()=>{
        const data=await getAllCustomers()
        setCustomers(data);
        setSelectedEntry(empty)
      } 
    useEffect(()=>{
    
    
      fetchData();
      
    },[0])
    

function onDelete(e){
  e.preventDefault();

  if(selectedEntry.id===-1){
  
  window.alert("Please Select the customer to delete");
    }
  else{
    
    deleteByIdinAPI(selectedEntry.id)
   
    
    }
 
  }


function onSave(e){

e.preventDefault();
  
  if(selectedEntry.id===-1){
    let data={
      name:selectedEntry.name,
      email:selectedEntry.email,
      password:selectedEntry.password
    }
    postinAPI(data)
  }else{
    putinAPI(selectedEntry.id,selectedEntry)
  }
 

  
}
function onCancel(e){
  e.preventDefault();
  setSelectedEntry(empty)
  
}



async function deleteByIdinAPI (id){
  const response =await fetch(`http://localhost:4000/customers/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      console.log(response)
      fetchData();
}

async function postinAPI(item){
  if(item.name && item.email && item.password){

    await fetch("http://localhost:4000/customers", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(response => response.json())
        .then(data => {
          console.log(data)
        })

  }
  else{
    console.log("Please fill all the fields")
    window.alert("Please fill all the details");
    fetchData();
  }
  fetchData();
}


async function putinAPI(id,item){
  if(item.name && item.email && item.password){
    await fetch(`http://localhost:4000/customers/${id}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        
  }
  else{
    window.alert("All the fields are not filled, please do check!!");
   
  }
   fetchData();
}




  return (
    <div>
      <CustomerList selectedEntry={selectedEntry} customers={customers} setSelectedEntry={setSelectedEntry} empty={empty} />

      <CustomerAddUpdateForm selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} 
      onDelete={onDelete} onSave={onSave} onCancel={onCancel} />
    </div>
  );
}

export default App;
