import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import {getAll} from './memdb'


test('should add a new customer when no customer is selected', async () => {
  render(<App />); 

  const nameInput = screen.getByPlaceholderText('enter your name');
  const emailInput = screen.getByPlaceholderText('enter your email');
  const passwordInput = screen.getByPlaceholderText('enter your password');
  const saveButton = screen.getByText('Save');

  fireEvent.change(nameInput, { target: { value: 'New Customer' } });
  fireEvent.change(emailInput, { target: { value: 'newcustomer@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'newpassword' } });
 
  //Click the save button
 fireEvent.click(saveButton);
   let pass=false
  const customers=getAll();
  
  for(let i=0;i<customers.length;i++){
    if(customers[i].name==='New Customer' && customers[i].email==='newcustomer@example.com' && customers[i].password==='newpassword'){
        pass=true;
        break;
    }
  }
  if(!pass){
    fail("Test is failed");
  }
});

test('should update an existing customer when one is selected', async () => {
  render(<App />); // Renders the App component

  // Wait for the existing customer to be rendered in the table
  const customers=getAll();
 const customerRow =  document.getElementById('entry0');
  
  // Simulate selecting an existing customer
  fireEvent.click(customerRow);

  // Update the selected customer's details
  const nameInput = screen.getByPlaceholderText('enter your name');
  const emailInput = screen.getByPlaceholderText('enter your email');
  const saveButton = screen.getByText('Save');

  // Fill in updated customer details
  fireEvent.change(nameInput, { target: { value: 'Updated John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'updatedjohn@example.com' } });

  // Click the save button to update
  fireEvent.click(saveButton);
let pass=false;
  if(customers[0].name==='Updated John Doe' && customers[0].email==='updatedjohn@example.com'){
   pass=true;
  }
  if(!pass){
    fail("failed to update the user")
  }
});

test('should delete the existing customer', async () => {
  render(<App />); // Renders the App component

  // Wait for the existing customer to be rendered in the table
  const customers=getAll();
 const customerRow =  document.getElementById('entry1');
  
  // Simulate selecting an existing customer
  fireEvent.click(customerRow);
  const deleteButton = screen.getByText('Delete');


  
  fireEvent.click(deleteButton);
let pass=false;
  if(customers[1].name!=='Carla Tregonna'){
   
pass=true;
  }
  if(!pass){
    fail("failed to update the user")
  }
});


test('should cancel the selected customer', async () => {
  render(<App />); // Renders the App component

  // Wait for the existing customer to be rendered in the table
  const customers=getAll();
 const customerRow =  document.getElementById('entry2');
  
  // Simulate selecting an existing customer
  fireEvent.click(customerRow);


  const nameInput = screen.getByPlaceholderText('enter your name');
  const emailInput = screen.getByPlaceholderText('enter your email');
  const passwordInput = screen.getByPlaceholderText('enter your password');
  const clearButton = screen.getByText('Cancel');

 
  fireEvent.click(clearButton);
 

let pass=false;
  if(nameInput.value==='' && emailInput.value==='' && passwordInput.value===''){
    
pass=true;
  }
  if(!pass){
    fail("failed to update the user")
  }
});
