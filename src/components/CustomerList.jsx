import { useState } from "react";

const CustomerList=(props)=>{

  const [recordsToShow,setRecordsToShow]=useState(10);
  const loadMoreRecords = () => {
    setRecordsToShow(recordsToShow + 10); // Load the next 100 records
  };
    
function handleList(e,customer){
  
if(props.selectedEntry.email===customer.email){
  
 props.setSelectedEntry(props.empty);
}
else{
 
  props.setSelectedEntry(customer)

}

}

   return (
     <>
        <h3>Customer List</h3>
        <div className="tableWrapper">
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
            props.customers.slice(recordsToShow-10,recordsToShow).map((customer,index)=>(
              
              <tr id={`entry${index}`} key={customer.id} onClick={(e)=>{
                console.log("Customer details: ", customer)
                handleList(e,customer) }
                } style={{cursor:"pointer"}}  className={  props.selectedEntry.id===customer.id?'selectedRow':''}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.password}</td>
              </tr>
              
            )

            )
          }
         
      
        
        </tbody>
      </table>
     
      </div>
       {recordsToShow < props.customers.length && (
        <button onClick={loadMoreRecords} style={{ marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}>
          Next
        </button>
      )}
    </>

   )
}

export default CustomerList