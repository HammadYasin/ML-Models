import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import {MemoryRouter} from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// 👇️ wrap App in Router
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);