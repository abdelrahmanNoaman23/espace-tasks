import React from 'react';

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
      <p className="text-sm text-red-600">{message}</p>
    </div>
  );
};

export default ErrorMessage;