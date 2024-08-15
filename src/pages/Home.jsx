import React from 'react';
import logo from '/Iteration-1-assets/logo.svg';
import "./Home.css"
import { useHistory } from "react-router-dom";

const Home = () => {
let history = useHistory();
function handleClick() {
    history.push("/form")
}
    return (
        <div className="home-container">
            <div className="content">
                <img src={logo} alt="Logo" />
                <p>KOD ACIKTIRIR</p>
                <p>PİZZA, DOYURUR</p>
                <button type='button' onClick={handleClick}>ACIKTIM</button>
            </div>
        </div>
    );
};

export default Home;