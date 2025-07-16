import React, { useState, useEffect } from 'react';
import { useRouter, useTheme } from '../contexts';
import { gameConfig} from '../utils/gameConfig';
import { apiService } from '../utils/apiService';
import { themeUtils } from '../utils/themeUtils';
import { Button } from '../components/Buttons';
import { Modal } from '../components/Modal';
import { Toast } from '../components/Toast';
import { ProgressBar } from '../components/ProgressBar';
import { GameBox } from '../components/GameBox';
import { useGameLogic, useTimer } from '../hooks';



export const Game = () => {
  const { navigate, gameConfig: userConfig } = useRouter();
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const config = gameConfig.difficulty[userConfig?.difficulty] || gameConfig.difficulty.medium;
  const game = useGameLogic(config);
  const timer = useTimer(config.time, game.gameStarted, game.gameEnded, game.endGame);
  
  useEffect(() => {
    game.initializeGame();
  }, []);
  
  useEffect(() => {
    if (game.gameEnded) {
      setShowModal(true);
      apiService.saveScore(userConfig.name, game.score, userConfig.difficulty);
    }
  }, [game.gameEnded]);
  
  const handleBoxClick = (boxId) => {
    const result = game.handleBoxClick(boxId);
    
    if (result.success) {
      setToastMessage(result.message);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } else {
      setToastMessage(result.message);
      setShowErrorToast(true);
      setTimeout(() => setShowErrorToast(false), 3000);
    }
  };
  
  const progressPercentage = (game.clickedBoxes.size / config.boxes) * 100;
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div className={`min-h-screen ${classes.background} p-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Click Game</h1>
          <div className="flex justify-center items-center space-x-8 mb-4">
            <div className="text-xl">
              Clicks: <span className="font-bold">{game.clickedBoxes.size}</span>
            </div>
            <div className="text-xl">
              Timer: <span className="font-bold text-red-600">{timer}s</span>
            </div>
          </div>
          <div className="space-x-4">
            <Button variant="danger" onClick={game.initializeGame}>
              Reset Game
            </Button>
            <Button variant="secondary" onClick={() => navigate('home')}>
              Back to Home
            </Button>
          </div>
        </div>
        
        <ProgressBar percentage={progressPercentage} theme={theme} />
        
        <div className={`grid gap-4 ${
          config.boxes === 4 ? 'grid-cols-2' : 
          config.boxes === 6 ? 'grid-cols-2 md:grid-cols-3' : 
          'grid-cols-3'
        }`}>
          {game.boxes.map(box => (
            <GameBox
              key={box.id}
              box={box}
              onBoxClick={handleBoxClick}
              theme={theme}
            />
          ))}
        </div>
      </div>
      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Game Complete!"
        theme={theme}
      >
        <div className="text-center space-y-2 mb-6">
          <p><strong>Player:</strong> {userConfig?.name}</p>
          <p><strong>Difficulty:</strong> {userConfig?.difficulty}</p>
          <p><strong>Score:</strong> {game.score}%</p>
          <p><strong>Boxes Clicked:</strong> {game.clickedBoxes.size} / {config.boxes}</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="success" onClick={() => setShowModal(false)} className="flex-1">
            Awesome!
          </Button>
          <Button onClick={() => navigate('scores')} className="flex-1">
            View Scores
          </Button>
        </div>
      </Modal>
      
      <Toast message={toastMessage} type="success" isVisible={showToast} />
      <Toast message={toastMessage} type="error" isVisible={showErrorToast} />
    </div>
  );
};
