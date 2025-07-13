import React, { useRef, useEffect } from 'react';

const DocGame = () => {
  const clicksRef = useRef(null);
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const congratsModalRef = useRef(null);
  const toastRef = useRef(null);
  const alertToastRef = useRef(null);
  
  const totalClicksRef = useRef(0);
  const boxesRef = useRef([]);

  const gradients = [
    'linear-gradient(45deg, #0d6efd, #6610f2)', 
    'linear-gradient(45deg, #198754, #0dcaf0)', 
    'linear-gradient(45deg, #ffc107, #fd7e14)', 
    'linear-gradient(45deg, #dc3545, #6f42c1)', 
    'linear-gradient(45deg, #20c997, #0d6efd)', 
    'linear-gradient(45deg, #6f42c1, #d63384)', 
  ];

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);
    return gradients[randomIndex];
  };

  const showToast = () => {
    const toast = toastRef.current;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  const showAlertToast = () => {
    const alertToast = alertToastRef.current;
    alertToast.classList.remove('show');
    setTimeout(() => {
      alertToast.classList.add('show');
      setTimeout(() => {
        alertToast.classList.remove('show');
      }, 3000);
    }, 50);
  };

  const showCongratsModal = () => {
    const modal = congratsModalRef.current;
    modal.style.display = 'block';
    modal.classList.add('show');
  };

  const hideCongratsModal = () => {
    const modal = congratsModalRef.current;
    modal.style.display = 'none';
    modal.classList.remove('show');
  };

  const handleBoxClick = (boxElement, index) => {
    if (boxElement.dataset.clicked === 'true') {
      showAlertToast();
      return;
    }

    boxElement.classList.remove('bg-dark');
    boxElement.style.background = getRandomGradient();
    boxElement.dataset.clicked = 'true';
    
    totalClicksRef.current++;
    clicksRef.current.textContent = totalClicksRef.current;
    showToast();

    const percent = Math.min((totalClicksRef.current / 6) * 100, 100);
    progressBarRef.current.style.width = `${percent}%`;
    progressBarRef.current.setAttribute('aria-valuenow', percent);
    progressBarRef.current.textContent = `${Math.round(percent)}%`;

    if (totalClicksRef.current === 6) {
      showCongratsModal();
    }
  };

  const createBox = (index) => {
    const col = document.createElement('div');
    col.className = 'col-12 col-lg-6 d-flex justify-content-center mb-4';

    const box = document.createElement('div');
    box.className = 'border border-2 border-white bg-dark';
    box.style.height = '150px';
    box.style.width = '25%';
    box.style.borderTopLeftRadius = '20px';
    box.style.borderBottomRightRadius = '20px';
    box.style.cursor = 'pointer';
    box.dataset.clicked = 'false';
    box.title = 'Click me to change my color!';
    
    box.addEventListener('click', () => handleBoxClick(box, index));

    col.appendChild(box);
    return col;
  };

  const initBoxes = () => {
    const container = containerRef.current;
    container.innerHTML = '';
    boxesRef.current = [];
    
    for (let i = 0; i < 6; i++) {
      const boxCol = createBox(i);
      container.appendChild(boxCol);
      boxesRef.current.push(boxCol.querySelector('div'));
    }
  };

  const resetGame = () => {
    totalClicksRef.current = 0;
    clicksRef.current.textContent = totalClicksRef.current;
    
    progressBarRef.current.style.width = '0%';
    progressBarRef.current.setAttribute('aria-valuenow', 0);
    progressBarRef.current.textContent = '0%';
    
    boxesRef.current.forEach((box) => {
      box.style.background = '';
      box.classList.add('bg-dark');
      box.dataset.clicked = 'false';
    });
    
    hideCongratsModal();
  };

  useEffect(() => {
    initBoxes();
  }, []);

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <div className="bg-light min-vh-100">
        <div className="container text-center pt-4">
          <h4>Total Clicks: <span ref={clicksRef}>0</span></h4>
          <button className="btn btn-danger mt-2" onClick={resetGame}>
            Reset
          </button>
          
          <div className="row justify-content-center mt-4" ref={containerRef}>
            
          </div>
        </div>

        <div className="container mt-4">
          <div className="progress" style={{ height: '20px' }}>
            <div 
              ref={progressBarRef}
              className="progress-bar bg-dark progress-bar-animated progress-bar-striped"
              role="progressbar"
              style={{ width: '0%' }}
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              0%
            </div>
          </div>
        </div>

        <div 
          ref={congratsModalRef}
          className="modal fade" 
          style={{ display: 'none', backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Congratulations!</h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white"
                  onClick={hideCongratsModal}
                />
              </div>
              <div className="modal-body bg-light">
                You've clicked all 6 boxes!
              </div>
              <div className="modal-footer bg-light">
                <button 
                  type="button" 
                  className="btn btn-success"
                  onClick={hideCongratsModal}
                >
                  Awesome!
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div ref={toastRef} className="toast" role="alert">
            <div className="toast-header bg-dark text-white">
              <strong className="me-auto">Bootstrap</strong>
              <button 
                type="button" 
                className="btn-close btn-close-white"
                onClick={() => toastRef.current.classList.remove('show')}
              />
            </div>
            <div className="toast-body">
              Button clicked!
            </div>
          </div>

          <div ref={alertToastRef} className="toast" role="alert">
            <div className="toast-header bg-danger text-white">
              <strong className="me-auto">Bootstrap</strong>
              <button 
                type="button" 
                className="btn-close btn-close-white"
                onClick={() => alertToastRef.current.classList.remove('show')}
              />
            </div>
            <div className="toast-body">
              Button already clicked!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocGame;