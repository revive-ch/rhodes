import React from 'react';
import Riddle from './Riddle';
import './App.css';

function App() {
  // Single riddle properties
  const question = "Students come both small and tall who wish to eat chicken where the water falls.";
  const answer = 'mirror lake';
  const audioSrc = `${process.env.PUBLIC_URL}/audio/lake.m4a`;

  return (
    <div className="App">
      <Riddle question={question} correctAnswer={answer} audioSrc={audioSrc} />
    </div>
  );
}

export default App;
