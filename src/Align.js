import React from 'react'
import { useEffect,useState } from 'react';
import Scoreboard from './Scoreboard';
import Timers from './Timers';

function Align() {
    const [defaultTeamAName] = useState('Team A');
  const [defaultTeamBName] = useState('Team B');
  const [defaultMatchTime] = useState(0);
  const [teamAName, setTeamAName] = useState(defaultTeamAName);
  const [teamBName, setTeamBName] = useState(defaultTeamBName);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [matchTime, setMatchTime] = useState(defaultMatchTime);
  const [isMatchRunning, setIsMatchRunning] = useState(false);
  const [selectedRound, setSelectedRound] = useState('');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [musicFile, setMusicFile] = useState("");
  const [pointsAddedA, setPointsAddedA] = useState(0);
  const [pointsAddedB, setPointsAddedB] = useState(0);
  const [doOrDieA, setDoOrDieA] = useState("");
  const [doOrDieB, setDoOrDieB] = useState("");

  const handleDoOrDieA = () => {
    setDoOrDieA("Do or Die");
  
    // Play the first siren sound
    const firstSirenSound = new Audio("./music/beep-warning-6387.mp3");
    firstSirenSound.play();
  
    setTimeout(() => {
      // Stop the first siren sound
      firstSirenSound.pause();
      firstSirenSound.currentTime = 0;
  
      // Play the main audio
      const mainAudio = new Audio("./music/do-or-die2.mp3");
      mainAudio.play();
  
      setMusicFile(mainAudio.src);
      setMusicPlaying(true);
  
      setTimeout(() => {
        // Stop the main audio
        mainAudio.pause();
        mainAudio.currentTime = 0;
  
        // Play the second siren sound
        const secondSirenSound = new Audio("./music/beep-warning-6387.mp3");
        secondSirenSound.play();
  
        setTimeout(() => {
          // Stop the second siren sound
          secondSirenSound.pause();
          secondSirenSound.currentTime = 0;
  
          setDoOrDieA("");
        }, 1000);
      }, 2000);
    }, 1000);
  };
  
  const handleDoOrDieB = () => {
    setDoOrDieB("Do or Die");
  
    // Play the first siren sound
    const firstSirenSound = new Audio("./music/beep-warning-6387.mp3");
    firstSirenSound.play();
  
    setTimeout(() => {
      // Stop the first siren sound
      firstSirenSound.pause();
      firstSirenSound.currentTime = 0;
  
      // Play the main audio
      const mainAudio = new Audio("./music/do-or-die2.mp3");
      mainAudio.play();
  
      setMusicFile(mainAudio.src);
      setMusicPlaying(true);
  
      setTimeout(() => {
        // Stop the main audio
        mainAudio.pause();
        mainAudio.currentTime = 0;
  
        // Play the second siren sound
        const secondSirenSound = new Audio("./music/beep-warning-6387.mp3");
        secondSirenSound.play();
  
        setTimeout(() => {
          // Stop the second siren sound
          secondSirenSound.pause();
          secondSirenSound.currentTime = 0;
  
          setDoOrDieB("");
        }, 1000);
      }, 2000);
    }, 1000);
  };
  
  

  const handleSetMatchTime = (event) => {
    const enteredTime = parseInt(event.target.value);
    if (enteredTime >= 0) {
      setMatchTime(enteredTime * 60);
    }
  };

  const handleSetTeamAName = (event) => {
    setTeamAName(event.target.value);
  };

  const handleSetTeamBName = (event) => {
    setTeamBName(event.target.value);
  };

  const handleAddPointA = (points) => {
    const newScoreA = scoreA + points;
    setScoreA(newScoreA);
    setPointsAddedA(points);
    setTimeout(() => {
      setPointsAddedA(0);
    }, 2000);
  };

  const handleSubtractPointA = () => {
    if (scoreA > 0) {
      setScoreA(scoreA - 1);
      setPointsAddedA(-1);
      setTimeout(() => {
        setPointsAddedA(0);
      }, 2000);
    }
  };

  const handleAddPointB = (points) => {
    const newScoreB = scoreB + points;
    setScoreB(newScoreB);
    setPointsAddedB(points);
    setTimeout(() => {
      setPointsAddedB(0);
    }, 2000);
  };

  const handleSubtractPointB = () => {
    if (scoreB > 0) {
      setScoreB(scoreB - 1);
      setPointsAddedB(-1);
      setTimeout(() => {
        setPointsAddedB(0);
      }, 2000);
    }
  };


  const startMatch = () => {
    setIsMatchRunning(true);
  };

  const stopMatch = () => {
    setIsMatchRunning(false);
  };

  const resetValues = () => {
    setTeamAName(defaultTeamAName);
    setTeamBName(defaultTeamBName);
    setScoreA(0);
    setScoreB(0);
    setMatchTime(defaultMatchTime);
    setIsMatchRunning(false);
  };

  useEffect(() => {
    let matchTimerInterval;
  
    if (isMatchRunning && matchTime > 0) {
      matchTimerInterval = setInterval(() => {
        setMatchTime((prevTime) => {
          // Check if it's the last 5 seconds of the match
          if (prevTime <= 6) {
            // Play the beep sound
            const beepSound = new Audio("./music/beep.mp3");
            beepSound.play();
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (matchTime === 0) {
      setMatchTime(defaultMatchTime);
      setIsMatchRunning(false);
    }
  
    return () => {
      clearInterval(matchTimerInterval);
    };
  }, [isMatchRunning, matchTime, defaultMatchTime]);
  

  useEffect(() => {
    if (musicPlaying) {
      setTimeout(() => {
        setMusicPlaying(false);
      }, 5000);
    }
  }, [musicPlaying]);

  const handleRoundSelection = (event) => {
    const round=event.target.value
    setSelectedRound(round);
    setMusicPlaying(true);
    let musicFile;
    switch (round) {
      case "1":
        musicFile = "";
        break;
      case "2":
        musicFile = "";
        break;
      case "do-or-die":
        musicFile = "./music/do-or-die2.mp3";
        break;
      default:
        musicFile = "";
    }
    setMusicFile(musicFile);
  };
  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div style={{display:'flex', flexDirection: 'column',alignItems: 'center'}}>
        <div style={{display:'flex'}}>
        <input
        type="text"
        placeholder="Enter Team A Name"
        value={teamAName}
        onChange={handleSetTeamAName}
      />
      <input
        type="text"
        placeholder="Enter Team B Name"
        value={teamBName}
        onChange={handleSetTeamBName}
      />
      <input
        type="text"
        placeholder="Enter Match Time (minutes)"
        
        onChange={handleSetMatchTime}
        min="0"
      />
      
      <span style={{marginTop: '20px'}}>
        <select value={selectedRound} onChange={handleRoundSelection}>
          <option value="">Select Round</option>
          <option value="1">Round 1</option>
          <option value="2">Round 2</option>
          <option value="do-or-die">Do or Die</option>
        </select>
        {musicPlaying && (
          <audio autoPlay key={musicFile}>
            <source src={musicFile} type="audio/mpeg" />
          </audio>
        )}
      </span>
        </div>

        <div>Match time</div>
    
      
      <div style={{fontSize:'90px',fontWeight:'bold',color:matchTime<=5 ? 'red':'yellow', fontFamily: 'Roboto Mono, monospace'}}>
        {formatTime(matchTime)}
      </div>
      {/* START MATCH Buttons */}
      <div className="match-control-buttons" style={{ color: 'white', textAlign: 'center' }}>
        {isMatchRunning ? (
          <button onClick={stopMatch} disabled={!isMatchRunning} style={{background:'brown',color:'wheat',padding:'8px 20px',border:'None',borderRadius:'7px',margin:'5px'}}>
            Stop Match
          </button>
        ) : (
          <button onClick={startMatch} disabled={isMatchRunning} style={{background:'cyan',padding:'8px 20px',border:'None',borderRadius:'7px',margin:'5px'}}>
            Start Match
          </button>
        )}
        
        {/* <button onClick={resetValues} style={{background:'red',color:'whitesmoke',padding:'8px 20px',border:'None',borderRadius:'7px',margin:'5px'}}>
          Reset
        </button> */}
      </div>

    <div style={{ color: 'white', textAlign: 'center',left:'620px' }}>
      <Timers initialCounter={30} />
    </div>
    </div>
  )
}

export default Align