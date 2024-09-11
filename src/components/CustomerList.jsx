const CustomerList=(props)=>{

    
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
            props.customers.map((customer,index)=>(
              
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
    </>

   )
}

export default CustomerList