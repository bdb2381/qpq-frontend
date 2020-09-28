import React from 'react';
import Header from './components/Header';
import MapContainer from './containers/MapContainer';
import ServicesContainer from './containers/ServicesContainer'
import UserContainer from './containers/UserContainer'
import ProfileForm from './components/ProfileForm'
import './App.css';

// console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {



  return (

    <div >
      <Header />
      {/* <ServicesContainer /> */}
      <ProfileForm />
      {/* <UserContainer /> */}
      {/* <MapContainer /> */}
    </div>


  );
}

export default App;
