import React from 'react';

export const Toast = ({ message, type = 'success', isVisible }) => {
  if (!isVisible) return null;
  
  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';
  const icon = type === 'success' ? '✓' : '⚠';
  
  return (
    <div className={`fixed bottom-4 right-4 ${bgColor} text-white p-4 rounded-lg shadow-lg`}>
      <div className="flex items-center">
        <span className="mr-2">{icon}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};