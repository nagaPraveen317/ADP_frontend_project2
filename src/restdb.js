let data
export const getAllCustomers=async()=>{
    let response=await fetch('http://localhost:4000/customers');
    data=await response.json();
    console.log( data)
   
    return data;
    
}
