export const apiService = {
  baseUrl: 'https://68761c5a814c0dfa653ab5d2.mockapi.io',
  
  async saveScore(name, score, difficulty) {
    try {
      const response = await fetch(`${this.baseUrl}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, score, difficulty }),
      });
      return response.json();
    } catch (error) {
      console.error('Error saving score:', error);
      throw error;
    }
  },
  
  async fetchScores() {
    try {
      const response = await fetch(`${this.baseUrl}/scores`);
      const data = await response.json();
      return data.sort((a, b) => b.score - a.score);
    } catch (error) {
      console.error('Error fetching scores:', error);
      throw error;
    }
  }
};
