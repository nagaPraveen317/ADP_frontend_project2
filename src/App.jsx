
import './App.css'
import {  useState,useEffect } from 'react';
import { getAll } from './memdb.js';
import CustomerAddUpdateForm from './components/CustomerAddUpdateForm.jsx';
import CustomerList from './components/CustomerList.jsx';


function App() {
  

  const empty={
    id:-1,
    name:"",
    email:"",
    password:""
  }
  const [selectedEntry,setSelectedEntry]=useState(empty);
  const [customers,setCustomers]=useState([])
  const [search,setSearch]=useState("");
 const fetchCustomers = async () => {
      const data =   getAll(); 
      setCustomers(data);
     
    };
    useEffect(()=>{
      
    fetchCustomers();
    },[])


    
    

function onDelete(e){
  e.preventDefault();

  if(selectedEntry.id===-1){
    window.alert("please select the customer to delete")
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
function onCancel(e){
  e.preventDefault();
  setSelectedEntry(empty)
  
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
  for( let i; i<((customers||[]).length);i++){
    maxid = (customers[i].id > maxid)?customers[i].id:maxid;
  }  
  return maxid + 1;
}

 function post(item) {
  if(item.name==='' || item.email==='' || item.password===''){
    window.alert("please fill the details")
  }
  let nextid = getNextId();
  item.id = nextid;
  customers[((customers||[]).length)] = item;
  setCustomers(customers)
setSelectedEntry(empty);
}

function put(id, item) {
   if(item.name==='' || item.email==='' || item.password===''){
    window.alert("please fill the details")
  }
  for( let i = 0; i < ((customers||[]).length); i++){
    if(customers[i].id === id){
      customers[i] = item;
      setCustomers(customers)
    setSelectedEntry(empty);
      return;
    }
  }

 
}

 function handleInputChange (event){
 console.log('in handle input')
  let val=event.target.value;
  setSearch(val);
 const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(val.toLowerCase())
  );
  console.log(search)
  setCustomers(filteredCustomers);
  console.log(val)
if(val===''){
  
handleClear();
}
  
}


function handleClear(){
  setSearch("");
  
  fetchCustomers();
  

}
  return (
    <div>
      
      <input className='search-style' id="search-id" type='textbox' onChange={handleInputChange} placeholder='search' value={search}/>
     
      <CustomerList selectedEntry={selectedEntry} customers={customers} setSelectedEntry={setSelectedEntry} empty={empty} />

      <CustomerAddUpdateForm selectedEntry={selectedEntry} setSelectedEntry={setSelectedEntry} 
      onDelete={onDelete} onSave={onSave} onCancel={onCancel} />
    </div>
  );
}

export default App;
