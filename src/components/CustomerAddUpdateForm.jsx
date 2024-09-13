

const CustomerAddUpdateForm=(props)=>{

    function handleChange(e){
  
  let name,email,password;
  if(e.target.id==='name'){
    name=e.target.value;
    props.setSelectedEntry(prev=>({...prev,name:name}))
  }
  
else if(e.target.id==='email'){
  email=e.target.value;
  props.setSelectedEntry(prev=>({...prev,email:email}))
}

else{
  password=e.target.value;
  props.setSelectedEntry(prev=>({...prev,password:password}))
}

  
}


return(
    <>
        <h1 className="add-header">{props.selectedEntry.id===-1?"Add":"Update"}</h1>
      <form className='form-style'>
        <label name="name" htmlFor="name" >Name: </label><br/>
        <input type="text" id="name" placeholder='enter your name' onChange={(e)=>handleChange(e)} value={props.selectedEntry.name}  ></input>
        <br/>
        <label name="email" htmlFor="email" >Email: </label><br/>
        <input type="email" id="email" placeholder='enter your email' value={props.selectedEntry.email} onChange={(e)=>handleChange(e)} ></input>
        <br/>
        <label htmlFor="password" >Pass: </label><br/>
        <input name="password" id="password" placeholder='enter your password'value={props.selectedEntry.password}  onChange={(e)=>handleChange(e)} ></input>
        <br/>
        <button onClick={(e)=>props.onDelete(e)} id="delete">Delete</button>
        <button onClick={(e)=>props.onSave(e)} id="save">Save</button>
        <button onClick={(e)=>props.onCancel(e)} id="clear">Cancel</button>

      </form>
    </>
)
}
export default CustomerAddUpdateForm