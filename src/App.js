import React from 'react';
import Header from './components/Header';
import MapContainer from './containers/MapContainer';
import ServicesConatiner from './containers/ServicesConatiner'
import './App.css';

// console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  return (

    <div >
      <Header />
      <ServicesConatiner />
      <MapContainer />
    </div>


  );
}

export default App;
