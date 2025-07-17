import React from 'react';
import { themeUtils } from '../utils/themeUtils.js';


export const Modal = ({ isOpen, onClose, title, children, theme }) => {
  if (!isOpen) return null;
  
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`max-w-md w-full mx-4 p-6 rounded-lg ${classes.card}`}>
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
};