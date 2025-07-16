import React from 'react';
import { ThemeProvider, Router, RouterContext } from './contexts';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Scores } from './pages/Score';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouterContext.Consumer>
          {({ currentRoute }) => {
            switch (currentRoute) {
              case 'game':
                return <Game />;
              case 'scores':
                return <Scores />;
              default:
                return <Home />;
            }
          }}
        </RouterContext.Consumer>
      </Router>
    </ThemeProvider>
  );
}

export default App;