
import React from 'react';

export const RadioGroup = ({ label, name, options, value, onChange }) => {
  return (
    <div>
      {label && <label className="block text-sm font-medium mb-2">{label}</label>}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2 text-blue-600"
            />
            <span className="capitalize">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};