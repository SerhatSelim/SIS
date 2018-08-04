import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Button from "@material-ui/core/Button";
import registerServiceWorker from './registerServiceWorker';

function App() {
    return (
      <Button variant="raised" color="primary">
        Hello World
      </Button>
    );
  }


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
