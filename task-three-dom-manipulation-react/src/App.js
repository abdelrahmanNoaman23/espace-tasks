import React, { useRef, useEffect } from 'react';

const BoxClickGame = () => {
  const containerRef = useRef(null);
  const clicksRef = useRef(null);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeBoxColors = (event) => {
    const box = event.currentTarget;
    box.style.backgroundColor = getRandomColor();
  };

  const countClicks = () => {
    const clicksElement = clicksRef.current;
    let count = parseInt(clicksElement.textContent, 10);
    count++;
    clicksElement.textContent = count;
    console.log('Click count:', count);
  };

  useEffect(() => {
    const container = containerRef.current;
    
    // Clear container first to prevent duplicates
    container.innerHTML = '';
    
    // Create 5 boxes
    for (let i = 0; i < 5; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.addEventListener('click', changeBoxColors);
      box.addEventListener('click', countClicks);
      container.appendChild(box);
    }

    // Cleanup function to remove event listeners (really rally really importantttt)
    return () => {
      const boxes = container.querySelectorAll('.box');
      boxes.forEach(box => {
        box.removeEventListener('click', changeBoxColors);
        box.removeEventListener('click', countClicks);
      });
    };
  }, []);

  return (
    <div>
      <style>{`
        .box {
          width: 100px;
          height: 100px;
          margin: 10px;
          background-color: black;
          border-radius: 10%;
          cursor: pointer;
          display: inline-block;
        }
        .container {
          text-align: center;
          padding: 20px;
        }
      `}</style>
      
      <div className="container">
        <h1>DOC GAME</h1>
        <section>
          <p ref={clicksRef} id="clicks">0</p>
        </section>
        <div ref={containerRef}></div>
      </div>
    </div>
  );
};

export default BoxClickGame;