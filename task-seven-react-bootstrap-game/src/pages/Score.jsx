import React, { useState, useEffect } from 'react';
import { useRouter, useTheme } from '../contexts';
import {  apiService } from '../utils/apiService';
import { themeUtils } from '../utils/themeUtils';

import { Button} from '../components/Buttons';


export const Scores = () => {
  const { navigate } = useRouter();
  const { theme } = useTheme();
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchScores();
        setScores(data);
      } catch (error) {
        console.error('Failed to fetch scores:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const classes = themeUtils.getThemeClasses(theme);
  
  return (
    <div className={`min-h-screen ${classes.background} p-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">High Scores</h1>
          <Button onClick={() => navigate('home')}>
            Back to Home
          </Button>
        </div>
        
        {loading ? (
          <div className="text-center">Loading scores...</div>
        ) : (
          <div className={`rounded-lg shadow-lg ${classes.card}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className={classes.tableHeader}>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Rank</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Score</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {scores.map((score, index) => (
                    <tr key={score.id} className={classes.tableRow(index % 2 === 0, theme)}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">#{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{score.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{score.score}%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          score.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                          score.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {score.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};