import React, { useState, useEffect } from 'react';

const UsersList = ({ users, setUsers, stateOfEdit, setStateOfEdit, setUserToEdit }) => {
  const deleteUser = (id) => {
    setUsers(users.filter((users) => users.id !== id));
    console.log(id, 'llamada de delete');
  };

  const editUser = (id) => {
    setUserToEdit(id);
    setStateOfEdit(true);
  };
  return (
    <table>
      <tr>
        <th>Number</th>
        <th>Name </th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
      {users.map((users, index) => (
        <tr key={users.id}>
          <th>{index + 1}</th>
          <th>{users.name}</th>
          <th>{users.username}</th>
          <th>
            <button onClick={() => deleteUser(users.id)}>Delete</button>
            <button onClick={() => editUser(users)}>Edit</button>
          </th>
        </tr>
      ))}
    </table>
  );
};

export default UsersList;
