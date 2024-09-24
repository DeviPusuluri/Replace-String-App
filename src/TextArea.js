import React from 'react';
import './App.css';  // Import the CSS file

const TextArea = ({ text, setText }) => {
  return (
    <textarea
      rows="10"
      value={text}
      onChange={(e) => setText(e.target.value)}  // Update text state as the user types
      placeholder="Type your text here..."
      style={{ width: '100%', padding: '10px', fontSize: '16px' }}  // Basic styling
    />
  );
};

export default TextArea;
