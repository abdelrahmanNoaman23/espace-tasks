"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTheme } from "../../contexts";
import { gameConfig } from "../../utils/gameConfig";
import { apiService } from "../../utils/apiService";
import { themeUtils } from "../../utils/themeUtils";
import { Button } from "../../components/Buttons";
import { Modal } from "../../components/Modal";
import { Toast } from "../../components/Toast";
import { ProgressBar } from "../../components/ProgressBar";
import { GameBox } from "../../components/GameBox";
import { useGameLogic, useTimer } from "../../hooks";

export default function Gamepage() {
  
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
            <Button variant="secondary" onClick={() => router.push("/")}>
              Back to Home
            </Button>
          </div>
        </div>

        <ProgressBar percentage={progressPercentage} theme={theme || themeParam} />

        <div
          className={`grid gap-4 ${
            config.boxes === 4
              ? "grid-cols-2"
              : config.boxes === 6
              ? "grid-cols-2 md:grid-cols-3"
              : "grid-cols-3"
          }`}
        >
          {game.boxes.map((box) => (
            <GameBox
              key={box.id}
              box={box}
              onBoxClick={handleBoxClick}
              theme={theme || themeParam}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Game Complete!"
        theme={theme || themeParam}
      >
        <div className="text-center space-y-2 mb-6">
          <p>
            <strong>Player:</strong> {name}
          </p>
          <p>
            <strong>Difficulty:</strong> {difficulty}
          </p>
          <p>
            <strong>Score:</strong> {game.score}%
          </p>
          <p>
            <strong>Boxes Clicked:</strong> {game.clickedBoxes.size} / {config.boxes}
          </p>
        </div>
        <div className="flex space-x-4">
          <Button variant="success" onClick={() => setShowModal(false)} className="flex-1">
            Awesome!
          </Button>
          <Button onClick={() => router.push("/scores")} className="flex-1">
            View Scores
          </Button>
        </div>
      </Modal>

      <Toast message={toastMessage} type="success" isVisible={showToast} />
      <Toast message={toastMessage} type="error" isVisible={showErrorToast} />
    </div>
  );
}
