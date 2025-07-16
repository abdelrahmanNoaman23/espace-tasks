import React, { useState } from 'react';
import { useRouter, useTheme } from '../contexts';
import { Button } from '../components/Buttons';
import { Input } from '../components/Input';
import { RadioGroup } from '../components/RadioGroup';
import { Toggle } from '../components/Toggle';
import { validation } from '../utils/validation';
import { themeUtils } from '../utils/themeUtils';


export const Home = () => {
  const { navigate } = useRouter();
  const { theme, toggleTheme, setTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    difficulty: 'medium',
    theme: theme
  });
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };
  
  const handleSubmit = () => {
    const nameError = validation.validateName(formData.name);
    const difficultyError = validation.validateDifficulty(formData.difficulty);
    
    if (nameError || difficultyError) {
      setErrors({
        name: nameError,
        difficulty: difficultyError
      });
      return;
    }
    
    // Update theme if changed
    if (formData.theme !== theme) {
      setTheme(formData.theme);
    }
    
    navigate('game', formData);
  };
  
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div className={`min-h-screen ${classes.background} flex items-center justify-center`}>
      <div className={`max-w-md w-full mx-4 p-8 rounded-lg shadow-lg ${classes.card}`}>
        <h1 className="text-3xl font-bold text-center mb-8">Click Game</h1>
        
        <div className="space-y-6">
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            placeholder="Enter your name"
            theme={theme}
          />
          
          <RadioGroup
            label="Difficulty"
            name="difficulty"
            options={[
              { value: 'easy', label: 'Easy' },
              { value: 'medium', label: 'Medium' },
              { value: 'hard', label: 'Hard' }
            ]}
            value={formData.difficulty}
            onChange={handleInputChange}
          />
          
          <div>
            <label className="block text-sm font-medium mb-2">Theme</label>
            <Toggle
              checked={formData.theme === 'dark'}
              onChange={() => setFormData(prev => ({ 
                ...prev, 
                theme: prev.theme === 'light' ? 'dark' : 'light' 
              }))}
            />
          </div>
          
          <Button type="button" onClick={handleSubmit} className="w-full" size="large">
            Start Game
          </Button>
        </div>
      </div>
    </div>
  );
};