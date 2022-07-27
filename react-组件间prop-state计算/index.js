import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Home from './Home';

const A = 3,
  B = 1;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home a={A} b={B} />);
