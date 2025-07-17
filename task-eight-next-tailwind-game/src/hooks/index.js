import { useState, useEffect } from 'react';
import { gameConfig } from '../utils/gameConfig';

// ============ my CUSTOM HOOKS ============
export const useGameLogic = (config) => {
  const [boxes, setBoxes] = useState([]);
  const [clickedBoxes, setClickedBoxes] = useState(new Set());
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [score, setScore] = useState(0);
  
  const initializeGame = () => {
    const initialBoxes = Array(config.boxes).fill().map((_, index) => ({
      id: index,
      clicked: false,
      gradient: ''
    }));
    setBoxes(initialBoxes);
    setTimer(config.time);
    setGameStarted(true);
    setGameEnded(false);
    setClickedBoxes(new Set());
    setScore(0);
  };
  
  const endGame = () => {
    setGameEnded(true);
    const finalScore = Math.round((clickedBoxes.size / config.boxes) * 100);
    setScore(finalScore);
    return finalScore;
  };
  
  const handleBoxClick = (boxId) => {
    if (gameEnded || clickedBoxes.has(boxId)) {
      return { success: false, message: 'Box already clicked!' };
    }
    
    const randomGradient = gameConfig.gradients[Math.floor(Math.random() * gameConfig.gradients.length)];
    
    setBoxes(prev => prev.map(box => 
      box.id === boxId 
        ? { ...box, clicked: true, gradient: randomGradient }
        : box
    ));
    
    setClickedBoxes(prev => new Set([...prev, boxId]));
    
    if (clickedBoxes.size + 1 === config.boxes) {
      setTimeout(() => endGame(), 100);
    }
    
    return { success: true, message: 'Box clicked!' };
  };
  
  return {
    boxes,
    clickedBoxes,
    timer,
    setTimer,
    gameStarted,
    gameEnded,
    score,
    initializeGame,
    endGame,
    handleBoxClick
  };
};

export const useTimer = (initialTime, gameStarted, gameEnded, onTimeUp) => {
  const [timer, setTimer] = useState(initialTime);
  
  useEffect(() => {
    setTimer(initialTime);
  }, [initialTime]);
  
  useEffect(() => {
    let interval;
    if (gameStarted && !gameEnded && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => {
          if (prev <= 1) {
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameEnded, timer, onTimeUp]);
  
  return timer;
};