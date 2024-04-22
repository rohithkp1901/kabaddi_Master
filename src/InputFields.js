import React, { useState } from 'react';

const InputFields = ({ teamAName, setTeamAName, teamBName, setTeamBName }) => {
  const [tempTeamAName, setTempTeamAName] = useState(teamAName); // Use a temporary state to avoid unnecessary re-renders
  const [tempTeamBName, setTempTeamBName] = useState(teamBName);

  const handleTeamANameChange = (event) => {
    setTempTeamAName(event.target.value);
  };

  const handleTeamBNameChange = (event) => {
    setTempTeamBName(event.target.value);
  };

  const handleSubmitTeamNames = () => {
    setTeamAName(tempTeamAName);
    setTeamBName(tempTeamBName);
  };

  return (
    <div className="input-fields">
      <input
        type="text"
        placeholder="Team A Name"
        value={tempTeamAName}
        onChange={handleTeamANameChange}
      />
      <input
        type="text"
        placeholder="Team B Name"
        value={tempTeamBName}
        onChange={handleTeamBNameChange}
      />
      <button onClick={handleSubmitTeamNames}>Set Team Names</button>
    </div>
  );
};

export default InputFields;
