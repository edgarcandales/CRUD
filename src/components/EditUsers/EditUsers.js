import React, { useState } from 'react';

const EditUsers = ({ users, setUsers, userToEdit, setUserToEdit, setStateOfEdit }) => {
  console.log(userToEdit, 'elguebo');
  console.log(users.name);

  const [editedState, setEditedState] = useState(userToEdit);

  const handleNameChange = (event) => {
    const { name, value } = event.target;
    setEditedState({ ...editedState, [name]: value });
  };
  const done = () => {
    const newArray = users.map((user) => {
      if (user.id === editedState.id) {
        return {
          name: editedState.name,
          username: editedState.username,
          id: editedState.id,
        };
      }
      return user;
    });
    setUsers(newArray);
    setStateOfEdit(false);
  };

  return (
    <div>
      <h3>User</h3>
      <input type='text' name='name' value={editedState.name} onChange={handleNameChange}></input>
      <h3>Username</h3>
      <input
        type='text'
        name='username'
        value={editedState.username}
        onChange={handleNameChange}></input>
      <button onClick={done}>Done</button>
      <button>Cancel</button>
    </div>
  );
};

export default EditUsers;
