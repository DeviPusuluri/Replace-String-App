import React from 'react';
import './App.css';  // Import the CSS file

const ReplacementForm = ({ searchString, setSearchString, replaceString, setReplaceString, handleReplace }) => {
  return (
    <div className="replacement-section" style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Search for..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}  // Update search string state
        style={{ marginRight: '10px', padding: '5px', fontSize: '16px' }}  // Basic styling
      />
      <input
        type="text"
        placeholder="Replace with..."
        value={replaceString}
        onChange={(e) => setReplaceString(e.target.value)}  // Update replace string state
        style={{ marginRight: '10px', padding: '5px', fontSize: '16px' }}  // Basic styling
      />
      <button onClick={handleReplace} style={{ padding: '5px 10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
        Replace All
      </button>
    </div>
  );
};

export default ReplacementForm;
