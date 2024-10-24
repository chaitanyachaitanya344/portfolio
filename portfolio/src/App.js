import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const staticGif = "https://cdn4.vectorstock.com/i/1000x1000/20/33/a-cute-cartoon-rocket-space-ship-vector-12452033.jpg"; // Static image URL
  const animatedGif = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHNmcXI1MHcxdmwzdTl6OTY4em16cjRzMnFobGdsaWh5NDQyaDQ3MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/utz68KlKM5LGBVF6HZ/giphy.webp"; // Animated GIF URL

  const [gif, setGif] = useState(staticGif); // State to manage GIF source

  const handleMouseEnter = () => {
    setGif(animatedGif); // Set the GIF source to animated GIF
  };

  const handleMouseLeave = () => {
    setGif(staticGif); // Set the GIF source to static image
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>portfolio</h1>
        <div>
          <nav id="link">
            <table className="theads">
              <thead>
                <tr>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Home</a></th>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Sports</a></th>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Entertainment</a></th>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Journalists</a></th>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Miscellaneous</a></th>
                  <th><a href="https://en.wikipedia.org/wiki/Shankar_Mahadevan">Politician</a></th>
                </tr>
              </thead>
            </table>
          </nav>
        </div>
        
        <div>
          <img 
            src={gif} 
            alt="Giphy" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            className="image-size"
          />
        </div>       
      </header>
    </div>
  );
}

export default App;
