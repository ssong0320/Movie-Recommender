import React, { useState } from 'react';

function App() {

  const [movie, setMovie] = useState('');

  const handleInputChange = (event) => {
    setMovie(event.target.value);
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Movie Recommendation Project</h1>
        <input
            type="text"
            placeholder="Enter a movie name..."
            value={movie}
            onChange={handleInputChange}
            style={{ width: '700px', height: '60px', fontSize: '40px', marginTop: '100px'  }}
          />
        <div style={{ marginTop: '100px'}}>
          <p style={{ fontSize: "20px" }}>Recommended Movies: {movie}</p>
          <ul style={{ display: 'flex', listStyleType: 'none', padding: '0', marginTop: '70px', width: '100%' }}>
            <li style={{ flexGrow: 1, textAlign: 'center' }}>movie 1</li>
            <li style={{ flexGrow: 1, textAlign: 'center' }}>movie 2</li>
            <li style={{ flexGrow: 1, textAlign: 'center' }}>movie 3</li>
            <li style={{ flexGrow: 1, textAlign: 'center' }}>movie 4</li>
            <li style={{ flexGrow: 1, textAlign: 'center' }}>movie 5</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
