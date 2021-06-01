import React, { useState } from 'react';

const AddUsers = ({ setStateOfButton, setAddButtonState, stateOfButton, users, setUsers }) => {
  const Cancel = () => {
    setStateOfButton(true);
    setAddButtonState(false);
  };

  const [inputValue, setInputValue] = useState({ id: null, name: '', username: '' });

  const handleNameChange1 = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value, id: users.length + 1 });
    console.log(users, 'users');
  };
  const AddUser = () => {
    setUsers([...users, inputValue]);
    setAddButtonState(false);
    setStateOfButton(true);
  };
  const CancelAdd = () => {
    setAddButtonState(false);
    setStateOfButton(true);
  };

  return (
    <div>
      <h2>Name</h2>
      <input type='text' name='name' value={inputValue.name} onChange={handleNameChange1}></input>
      <h2>Username</h2>
      <input
        type='text'
        name='username'
        value={inputValue.username}
        onChange={handleNameChange1}></input>
      <br></br>
      <button onClick={AddUser}>Add</button>
      <button onClick={CancelAdd}>Cancel</button>
    </div>
  );
};

export default AddUsers;
