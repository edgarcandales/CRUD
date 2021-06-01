import React, { useEffect } from 'react';

const APITest = () => {
  useEffect(() => {
    console.log('useEfect');
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const usuarios = await data.json();
    console.log(usuarios);
  };

  return <div>sdf</div>;
};

export default APITest;
