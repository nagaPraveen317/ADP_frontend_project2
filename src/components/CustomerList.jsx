import { useState } from "react";

const CustomerList=(props)=>{

  const [recordsToShow,setRecordsToShow]=useState([0,100]);
  const loadMoreRecords = () => {
    setRecordsToShow([recordsToShow[0]+100,recordsToShow[1]+100]); // Load the next 100 records
  };
  const previousRecords=()=>{
     setRecordsToShow([recordsToShow[0]-100,recordsToShow[1]-100]);
  }  

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
        <h1 className="header">Customer List</h1>
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
            (props.customers || []).slice(recordsToShow[0],recordsToShow[1]).map((customer,index)=>(
              
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
      <div className="button-container">
           {
      recordsToShow[0]>=100 && (
        <button className="prev-btn" onClick={previousRecords}>previous</button>
      )
    }

       {recordsToShow[1] < (props.customers || []).length && (
        <button className="next-btn" onClick={loadMoreRecords}>
          Next ({recordsToShow[0]}-{recordsToShow[1]})
        </button>
      )}
   </div>

    </>

    )
}


export default CustomerList