import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SideNav from './components/SideNav';
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import { listen } from './app/listener';
import './App.css';

function App() {
  React.useEffect(()=>{
    listen();
  },[]);
  return (
    <Provider store={store}>
    <React.Suspense fallback={<div>Loading...</div>}>
    <div className="App">
      <Header/>
      <Home/>
      <SideNav/>
      <Footer/>
    </div>
    </React.Suspense>
    </Provider>
  );
}

export default App;
