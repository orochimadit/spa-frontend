import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import React from 'react';
import './App.css';

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <div className="App">
      <Header/>
      <Home/>
      <SideNav/>
      <Footer/>
    </div>
    </React.Suspense>
  );
}

export default App;
