import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Olá, mundo!');
  };

  return (
    <>
      <h1>Bem-vindo!</h1>
      <button onClick={handleClick}>Clique aqui</button>
    </>
  );
}

export default App;
