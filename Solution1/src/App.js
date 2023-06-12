import React, { useState } from 'react';
import NumberList from './NumberList';
import './App.css';

const App = () => {
  const [urls, setUrls] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const urlsArray = urls.split('&url=').map((url) => url.trim());
    setUrls(urlsArray);
  };

  const handleInputChange = (event) => {
    setUrls(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Question 1</h1>
      <form onSubmit={handleSubmit} className="input-container">
        <label className="input-label">
          URLs:
          <input
            type="text"
            value={urls}
            onChange={handleInputChange}
            style={{
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid gray',
              marginRight: '8px',
              width: '400px', // set width to 400px
            }}
          />
        </label>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
      <NumberList urls={urls} />
    </div>
  );
};

export default App;
