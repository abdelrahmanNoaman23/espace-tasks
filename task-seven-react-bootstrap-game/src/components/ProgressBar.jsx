import React from 'react';
import { themeUtils } from '../utils/themeUtils';


export const ProgressBar = ({ percentage, theme }) => {
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div className="mb-8">
      <div className={`w-full h-4 rounded-full ${classes.progressBar}`}>
        <div
          className="h-full bg-blue-600 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-center mt-2 text-sm">
        Progress: {Math.round(percentage)}%
      </div>
    </div>
  );
};