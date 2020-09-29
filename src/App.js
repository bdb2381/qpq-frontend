
import React from "react";
import Header from "./components/Header";
import ProfileForm from "./components/ProfileForm";
import MapContainer from "./containers/MapContainer";
import Welcome from "./containers/Welcome";
import ServicesContainer from "./containers/ServicesContainer";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";

// console.log(process.env.REACT_APP_GOOGLE_API_KEY)

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>

      <ProfileForm />
      {/* <Header /> */}
      {/* <h1> Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      {isLogged ? <h3>You are logged in</h3> : <h3>You are not logged in</h3>} */}
      {/* <ServicesContainer /> */}
      {/* <MapContainer /> */}

    </div>
  );
}

export default App;
