import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlertProvider } from './utils/alertContext';


ReactDOM.render(
    <AlertProvider>
    <App />
  </AlertProvider>,
  document.getElementById('root')
);
