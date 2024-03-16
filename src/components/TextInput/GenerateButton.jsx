import React from 'react';

function GenerateButton({handleGenerateCard, disabled}) {
  return (
    <div onClick={handleGenerateCard}>
      <button className={`generate-button ${disabled ? "invisible" : "visible"}`}>
        <span className="now">now!</span>
        <span className="play">Generate Card</span>
      </button>
    </div>
  )
}

export default GenerateButton