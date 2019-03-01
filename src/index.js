// bootstrapping react into real dom/browser, root element

import ReactDOM from 'react-dom'; // node_modules
import React from 'react';
import App from './app/App'; // application

// patch the virtual dom to real dom
// runs event loop
// Uni Directional data flow
// Virtual DOM to REAL DOM,
ReactDOM.render (<App />, // virtula dom
                 document.getElementById('root') // real dom
                 )