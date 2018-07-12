import React, { Component } from 'react';
import imageData from './data/imagesData.json';

class App extends Component {
  render() {
    console.log(imageData);
    return (
      <div className = 'stage'>
        <div className = 'img-sec'>
        </div>
        <div className = 'controller-nav'>
        </div>
      </div>
    );
  }
}

export default App;
