import './App.css'
const Buttons = ({
  teamAName,
  teamBName,
  scoreA,
  scoreB,
  onAddPointA,
  onSubtractPointA,
  onAddPointB,
  onSubtractPointB,
  isMatchRunning,
  onStartMatch,
  onStopMatch,
  doordieA,
  doordieB,
}) => {
  const isMatchTimeSet = () => {
    // Check if user has set a match time
    return isMatchRunning; // You can replace this with checking userMatchTime state from App.js if needed
  };

  const isTeamButtonsSection = teamAName || teamBName;

  return (
    <div className="buttons">
      {teamAName && (
        <>
        <button className='btns' onClick={doordieA}  style={{fontSize:'20px',background:'black',color:"cyan",border:'1px solid cyan',fontWeight:'900'}}>
          Do or Die 
        </button>
        <button  className='btns' onClick={onSubtractPointA} disabled={scoreA === 0} style={{fontSize:'20px',background:'black',color:"red",border:'1px solid cyan',fontWeight:'900'}}>
          -1 
        </button>
        <button className='btns' onClick={() => onAddPointA(3)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
          +3 
        </button>
        <button className='btns' onClick={() => onAddPointA(2)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
          +2
        </button>
        <button className='btns' onClick={() => onAddPointA(1)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
          +1
        </button>
      </>
      
      )}

      {teamBName && (
        <>
          <button className='btns' onClick={() => onAddPointB(1)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
            +1 
          </button>
          <button className='btns' onClick={() => onAddPointB(2)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
            +2 
          </button>
          <button className='btns' onClick={() => onAddPointB(3)}  style={{fontSize:'20px',background:'black',color:"green",border:'1px solid cyan',fontWeight:'900'}}>
            +3
          </button>
          <button className='btns' onClick={onSubtractPointB} disabled={scoreB === 0} style={{fontSize:'20px',background:'black',color:"red",border:'1px solid cyan',fontWeight:'900'}}>
            -1
          </button>
          <button className='btns' onClick={doordieB}  style={{fontSize:'20px',background:'black',color:"cyan",border:'1px solid cyan',fontWeight:'900'}}>
            Do or Die
          </button>
        </>
      )}

      {/* Optional Do or Die button */}
      
      {/* Render "Start Match" and "Stop Match" buttons only if it's not a team buttons section */}
      {/* {!isTeamButtonsSection && (
        <>
          <button onClick={onStartMatch}  disabled={isMatchRunning}>Start Match</button>
          <button onClick={onStopMatch} disabled={!isMatchRunning}>Stop Match</button>
        </>
      )} */}
    </div>
  );
};

export default Buttons;
