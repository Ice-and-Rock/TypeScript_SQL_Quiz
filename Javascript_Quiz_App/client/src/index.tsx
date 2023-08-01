import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../src/styles/tailwind.css'
import App from './components/App';
import Navbar from './components/Navbar';
import Header from './components/Header'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <App />
  </React.StrictMode>
);


