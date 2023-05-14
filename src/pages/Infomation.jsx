import React from 'react';

function Information() {
  const video1 = "https://youtu.be/eKqbV7ub4sk";
   
  const video2 = "https://youtu.be/dy2H0UAqx-I";

  const buttonStyle = {
    backgroundColor: '#ff2d55',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    marginRight: '10px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <div>
      <h1>Information Page</h1>
      <p>Click on the buttons below to watch some informative videos:</p>
      <div>
        <button style={buttonStyle}>
          <a href={video1} target="_blank" rel="noopener noreferrer" style={linkStyle}>Watch Video 1</a>
        </button>
        <button style={buttonStyle}>
          <a href={video2} target="_blank" rel="noopener noreferrer" style={linkStyle}>Watch Video 2</a>
        </button>
      </div>
    </div>
  );
}

export default Information;
