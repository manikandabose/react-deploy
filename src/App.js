import React from 'react';
import './App.css';
import ProfileImage from './images/profile.png';

function App() {
  return (
    <div className="App">
      <h1>My Application</h1>
      <h2>Author: Manikandabose</h2>
      <img src={ProfileImage} alt="profile" />
    </div>
  );
}

export default App;
