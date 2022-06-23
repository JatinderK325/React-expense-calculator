import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App'; // "./" means look App.js at the same folder where index.js is.

// createRoot method is the main entry point , the main hook of the overall UI you are about to build with react. It tells the react where this react application(this user interface) that we build with react in the end should be placed in the webpage that is loaded. this leads to index.html file in the public folder. In our react project, there will be only single html file (the place where react render the UI) and all the changes on the UI will be handle by react itself.
// render method tells the react what should be rendered at that place.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
