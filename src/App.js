import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Authenticator } from "./Main/Authenticator";
import { Home } from "./Main/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Authenticator/>} />
        <Route exact path="/home" element={<Home/>} />
      </Routes>
    </Router>
    /*<div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>

    <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
    </div>*/
  );
}

export default App;
