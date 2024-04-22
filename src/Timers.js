import React, { useState, useEffect } from 'react';
import './App.css'
const Timers = ({ initialCounter }) => {
  const [countdown, setCountdown] = useState(initialCounter);
  const [counterRunning, setCounterRunning] = useState(false);
  const [audio] = useState(new Audio('./music/beep.mp3'));
  const [audio2] = useState(new Audio('./music/stop.mp3'));
  const [audio3] = useState(new Audio('./music/start.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let countdownInterval;
  
    if (countdown > 0 && counterRunning) {
      countdownInterval = setInterval(() => {
        setCountdown((prevTime) => {
          if (prevTime === 6 && !isPlaying) {
            audio.currentTime = 0; // Reset audio to the beginning
            audio.play();
            setIsPlaying(true);
            // Set a timeout to reset isPlaying after 5 seconds
            setTimeout(() => {
              setIsPlaying(false);
            }, 6000);
          }
          return prevTime - 1;
        });
      }, 1000);
    } 
    else if (countdown === 0) {
      // Reset countdown to initial value and stop the counter
      // setCountdown(initialCounter);
      // setCounterRunning(false);
      audio2.currentTime = 0; // Reset audio to the beginning
      audio2.play();
      // setCounterRunning(false);
    }
  
    // Clean up intervals
    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdown, counterRunning, audio, isPlaying, initialCounter]);
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const startCounter = () => {
    audio3.currentTime = 0; // Reset audio to the beginning
    audio3.play();
    setCounterRunning(true);
  };

  const stopCounter = () => {
    // Pause the audio when stop button is clicked
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
    setCounterRunning(false);
  };

  const resetCounter = () => {
    // Pause the audio when reset button is clicked
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }
    // Reset countdown to initial value and stop the counter
    setCountdown(initialCounter);
    setCounterRunning(false);
  };

  return (
    <div className="timers" style={{ position: 'relative' }}>
      <div>
        <div style={{ position: 'absolute', top: '0px', left: '105px' }}>Countdown:</div>
        <div style={{ fontSize: '120px', fontWeight: 'bold', color: countdown <= 5 ? 'red' : 'white', fontFamily: 'Arial, sans-serif' }}>
          {formatTime(countdown)}
        </div>
      </div>
      <div style={{ display: 'flex', position: 'absolute', top: '35px', left: '320px' }}>
        {!counterRunning ? (
          <button onClick={startCounter} style={{ background: 'green', color: 'white', padding: '8px 20px', border: 'None', borderRadius: '7px', margin: '5px' }}>Start</button>
        ) : (
          <button onClick={stopCounter} style={{ background: 'red', color: 'white', padding: '8px 20px', border: 'None', borderRadius: '7px', margin: '5px' }}>Stop</button>
        )}
        <button onClick={resetCounter} style={{ background: 'cyan', padding: '7px 18px', border: 'None', borderRadius: '7px', margin: '5px' }}>Reset</button>
      </div>
    </div>
  );
};

export default Timers;
