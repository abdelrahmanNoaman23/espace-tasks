import React from 'react';
import { themeUtils } from '../utils/themeUtils.js';


export const GameBox = ({ box, onBoxClick, theme }) => {
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div
      onClick={() => onBoxClick(box.id)}
      className={`h-32 w-full cursor-pointer border-2 border-white rounded-tl-lg rounded-br-lg transition-all duration-300 hover:scale-105 ${
        box.clicked ? box.gradient : classes.box
      }`}
      title="Click me to change my color!"
    />
  );
};