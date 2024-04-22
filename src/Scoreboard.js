import React from 'react';

const Scoreboard = ({ teamA, teamB, scoreA, scoreB,pointsAdded,doOrdie }) => {
  return (
    <div className="scoreboard">
       {doOrdie && (
          <span style={{ color: 'red', marginLeft: '5px',fontSize:'50px',fontWeight:'bold',background:'black',padding:'5px' }}>{doOrdie}</span>
        )}
      
      {teamA && <div style={{fontSize:'70px',fontWeight:'bold',wordWrap:'break-word'}}>{teamA}<div style={{fontSize:'130px',fontWeight:'bold', fontFamily: 'Roboto, sans-serif'}}>
      {scoreA}
      {pointsAdded !== 0 && (
          <span style={{ color: pointsAdded > 0 ? 'green' : 'red', marginLeft: '5px',fontSize:'100px',fontWeight:'bold' }}>
            {pointsAdded > 0 ? `+${pointsAdded}` : pointsAdded}
          </span>
        )}
      
      </div> </div>}
      {teamB && <div style={{fontSize:'70px',fontWeight:'bold',wordWrap:'break-word'}}>{teamB}<div style={{fontSize:'130px',fontWeight:'bold', fontFamily: 'Roboto, sans-serif'}}>
      {scoreB}{pointsAdded !== 0 && (
          <span style={{ color: pointsAdded > 0 ? 'green' : 'red', marginLeft: '5px',fontSize:'100px',fontWeight:'bold' }}>
            {pointsAdded > 0 ? `+${pointsAdded}` : pointsAdded}
          </span>
        )}
      </div></div>}
    </div>
  );
};

export default Scoreboard;
