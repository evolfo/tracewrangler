import React from 'react';
import './App.css';

import Footer from './Components/Footer'
import Header from './Components/Header'
import MainLayout from './Components/MainLayout';

const App = () => {
  return (
    <div className="site-container">
      <Header />
      <MainLayout />
      <Footer />
    </div>
  );
}

export default App;
