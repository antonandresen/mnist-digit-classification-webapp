import React, { useState } from 'react';
import './App.css';
//import CanvasDraw from 'react-canvas-draw';
import CanvasDraw from './components/CanvasDraw';
import tf from '@tensorflow/tfjs';

function App() {
  const [canvas, setCanvas] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [linearModel, setLinearModel] = useState(null);

  const updatePrediction = predict => {
    console.log('in', predict);
    let i = predict.indexOf(Math.max(...predict));
    setPrediction(i);
    //this.predictions = predict;
    //console.log(this.predictions);
  };

  return (
    <div className='container'>
      <h1>MNIST Digit Classification</h1>
      <h2 style={{ marginBottom: 70 }}>
        Go ahead and draw a digit. The AI will then try to infer which digit it
        is.
      </h2>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-4'>
          <h3>Draw here</h3>
          <div style={{ marginBottom: 5 }} className='wrapper'>
            <CanvasDraw
              ref={canvasInstance => {
                setCanvas(canvasInstance);
              }}
              updatePrediction={updatePrediction}
            />
          </div>
          <button className='btn btn-primary' onClick={() => canvas.clear()}>
            Clear
          </button>
        </div>
        <div className='col-lg-8 col-md-12 col-sm-12'>
          <div>
            <h1>The AI says your digit is:</h1>
            <p>(first prediction might take a few seconds)</p>
            {prediction && <h1>{prediction}</h1>}
          </div>
        </div>
      </div>
      <h4 style={{ marginTop: 100 }}>
        Made by <a href='https://github.com/Anton1337'>Anton Andrésen</a>
      </h4>
    </div>
  );
}

export default App;
