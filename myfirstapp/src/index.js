import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
//To ensure the time is kept current and is constantly changing
function ref() {
  root.render(<App/>);
}
setInterval(ref, 1000);
