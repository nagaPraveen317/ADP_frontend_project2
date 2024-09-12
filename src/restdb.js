let data
export const getAllCustomers=async()=>{
    console.log(process.env.REACT_APP_API);
    let response=await fetch(process.env.REACT_APP_API);
    data=await response.json();
    console.log( data)
   
    return data;
    
}
