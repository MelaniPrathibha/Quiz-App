import './App.css';
import React, {useState, useC} from "react";
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import Quiz from './Components/Quiz';

import {QuizContext} from "./Helpers/Context";
function App() {
  const[gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
  <div className = "App">
    <h1>Quiz App</h1>
    <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
      {gameState === "menu" && <MainMenu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
    </QuizContext.Provider>
  </div>
  );
}

export default App;
