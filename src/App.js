import './App.css';
import Title from './components/title/Title';
import UsersList from './components/usersList/UsersList';
import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

function App() {
  const [addButtonState, setAddButtonState] = useState(false);
  const [stateOfButton, setStateOfButton] = useState(true);
  const [stateOfEdit, setStateOfEdit] = useState(false);
  console.log(stateOfButton);
  return (
    <div>
      <MainContainer
        setAddButtonState={setAddButtonState}
        addButtonState={addButtonState}
        setStateOfButton={setStateOfButton}
        stateOfButton={stateOfButton}
        stateOfEdit={stateOfEdit}
        setStateOfEdit={setStateOfEdit}
      />
    </div>
  );
}

export default App;
