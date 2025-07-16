import React from 'react';
import { themeUtils } from '../utils/themeUtils.js';


export const Input = ({ label, name, type = 'text', value, onChange, error, placeholder, theme }) => {
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div>
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg border ${classes.input} focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};