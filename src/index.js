import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WidgetProvider } from './context/WidgetContext'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WidgetProvider>
      <App />
    </WidgetProvider>
  </React.StrictMode>
);



