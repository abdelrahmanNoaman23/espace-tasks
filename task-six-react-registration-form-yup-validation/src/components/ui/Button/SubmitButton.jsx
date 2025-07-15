import React from 'react';

const SubmitButton = ({ isSubmitting, onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isSubmitting}
      className={`w-full py-2 px-4 rounded-md text-white font-medium transition-colors ${
        isSubmitting
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      }`}
    >
      {isSubmitting ? 'Submitting...' : children}
    </button>
  );
};

export default SubmitButton;