
import './App.css'

function App() {
function onDelete(){
  console.log("Clicked delete button");
}
function onSave(){
  console.log("Clicked onSave button");
}
function onCancel(){
  console.log("Clicked on Save button");
}
function handleList(){
  console.log("Clicked on the entry in the list!!");
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
          
        <tr onClick={handleList} style={{cursor:"pointer"}}>
          
        <td>Jack Jackson</td>
        <td>jack@abc.com</td>
        <td>jackj</td>
        </tr>
        
       
        <tr onClick={handleList} style={{cursor:"pointer"}}>
        <td>Katie Kates</td>
        <td>katiek@abc.com</td>
        <td>katiek</td>
        </tr>
        
        
        <tr onClick={handleList} style={{cursor:"pointer"}}>
        <td>Glen Glenns</td>
        <td>gleng@abc.com</td>
        <td>gleng</td>
        </tr>
        
        </tbody>
      </table>

      <h3>Update</h3>
      <form className='form-style'>
        <label name="name" htmlFor="name" >Name: </label><br/>
        <input type="text" id="name" placeholder='enter your name' required />
        <br/>
        <label name="email" htmlFor="email" >Email: </label><br/>
        <input type="email" id="email" placeholder='enter your email' required/>
        <br/>
        <label htmlFor="password" >Pass: </label><br/>
        <input name="password" id="password" placeholder='enter your password' required/>
        <br/>
        <button onClick={onDelete} id="delete">Delete</button>
        <button onClick={onSave} id="save">Save</button>
        <button onClick={onCancel} id="clear">Cancel</button>

      </form>
    </div>
  );
}

export default App;
