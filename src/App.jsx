


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
      <table>
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
      <form>
        <label name="name" htmlFor="name" required>Name: </label>
        <input type="text" id="name" />
        <br/>
        <label name="email" htmlFor="email" required>Email: </label>
        <input type="email" id="email"/>
        <br/>
        <label htmlFor="password" >Pass: </label>
        <input name="password" id="password" required/>
        <br/>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>

      </form>
    </div>
  );
}

export default App;
