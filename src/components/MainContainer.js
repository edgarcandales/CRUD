import React, { useState, useEffect } from 'react';
import UsersList from './usersList/UsersList';
import Title from './title/Title';
import AddUsers from './addUsers/AddUsers';
import { WrapperAddUsers } from './Styles';
import EditUsers from './EditUsers/EditUsers';
import APITest from './usersList/APITest';

const MainContainer = ({
  setAddButtonState,
  addButtonState,
  setStateOfButton,
  stateOfButton,
  stateOfEdit,
  setStateOfEdit,
}) => {
  useEffect(() => {
    console.log('useEfect');
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://apiprojectrest.herokuapp.com/users/');
    const usuarios = await data.json();
    setUsers(usuarios);
  };

  const AddButton = () => {
    setAddButtonState(true);
    console.log(addButtonState);
    setStateOfButton(false);
  };

  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <div>
      <Title />
      <UsersList
        setUsers={setUsers}
        users={users}
        stateOfEdit={stateOfEdit}
        setStateOfEdit={setStateOfEdit}
        setUserToEdit={setUserToEdit}
      />

      {stateOfButton ? <button onClick={AddButton}>Add Users</button> : null}
      {addButtonState ? (
        <WrapperAddUsers>
          <AddUsers
            AddButton={AddButton}
            addButtonState={addButtonState}
            setAddButtonState={setAddButtonState}
            setStateOfButton={setStateOfButton}
            stateOfButton={stateOfButton}
            users={users}
            setUsers={setUsers}
          />
        </WrapperAddUsers>
      ) : null}
      {stateOfEdit ? (
        <EditUsers
          users={users}
          setUsers={setUsers}
          userToEdit={userToEdit}
          setUserToEdit={setUserToEdit}
          setStateOfEdit={setStateOfEdit}
        />
      ) : null}
      {/*<APITest />*/}
    </div>
  );
};

export default MainContainer;
