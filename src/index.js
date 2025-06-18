import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { checkReactRendering } from './utils/debugHelper';

// Add console logs to debug mounting
console.log("Index.js is executing");

try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  console.log("Root created", root);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("Render called");
  
  // Check if React actually rendered anything
  checkReactRendering();
  
} catch (error) {
  console.error("Critical error during app initialization:", error);
  document.body.innerHTML = `
    <div style="color: red; padding: 20px;">
      <h2>Failed to initialize the application</h2>
      <p>${error.message}</p>
      <pre>${error.stack}</pre>
    </div>
  `;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
