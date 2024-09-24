import React from 'react';
import './App.css';  // Import the CSS file

const Statistics = ({ text }) => {
  // Function to calculate unique words (case-insensitive)
  const getUniqueWordCount = () => {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];  // Match words
    const uniqueWords = new Set(words);
    return uniqueWords.size;
  };

  // Function to calculate character count (excluding spaces and punctuation)
  const getCharacterCount = () => {
    return text.replace(/[\s\W_]+/g, '').length;
  };

  return (
    <div className="statistics">
      <p>Unique Word Count: {getUniqueWordCount()}</p>
      <p>Character Count (Excluding Spaces & Punctuation): {getCharacterCount()}</p>
    </div>
  );
};

export default Statistics;
