import { gameConfig } from "./gameConfig";

export const validation = {
  validateName: (name) => {
    if (!name || name.trim() === '') {
      return 'Name is required';
    }
    return null;
  },
  validateDifficulty: (difficulty) => {
    if (!difficulty || !gameConfig.difficulty[difficulty]) {
      return 'Difficulty is required';
    }
    return null;
  }
};