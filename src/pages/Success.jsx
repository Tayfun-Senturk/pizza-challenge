import React from 'react';
import "./success.css";
import { Link } from 'react-router-dom';


const Success = () => {
  
    console.log("renderlandı");


    

    return (
        <div  className="success-container">
            <h1>
                <Link className="link" to="/">Teknolojik Yemekler</Link>
            </h1>
            <p>TEBRİKLER!</p>
            <p>SİPARİŞİNİZ ALINDI!</p>
        </div>
    );
};

export default Success;
