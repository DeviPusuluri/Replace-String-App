import React, { useState } from 'react';
import TextArea from './TextArea';
import Statistics from './Statistics';
import ReplacementForm from './ReplacementForm';
import './App.css';  // Importing the CSS file for styling

const App = () => {
  const [text, setText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  // Function to handle replacing all occurrences of the search string with the replace string
  const handleReplace = () => {
    if (searchString.trim()) {
      setText(text.replaceAll(searchString, replaceString));
    }
  };

  return (
    <div className="app-container">
      <h1>Real-Time Text Analysis</h1>

      {/* Text Area for input */}
      <TextArea text={text} setText={setText} />

      {/* Real-time statistics for unique words and character count */}
      <Statistics text={text} />

      {/* String replacement form */}
      <ReplacementForm
        searchString={searchString}
        setSearchString={setSearchString}
        replaceString={replaceString}
        setReplaceString={setReplaceString}
        handleReplace={handleReplace}
      />
    </div>
  );
};

export default App;
