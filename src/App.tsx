import React, {useState} from 'react';
import './App.css';
import {Link, Outlet} from "react-router-dom";


const App =() => {


    return (
        <div>

            <ul>
                <li><Link to="/"> Home </Link></li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Massagen</a>
                    <div className="dropdown-content">
                        <Link to="/Ballmassagen">Ballmassagen</Link>
                        <Link to="/Hahnmassagen">Hahnmassagen</Link>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Buchen</a>
                    <div className="dropdown-content">
                        <Link to="/">Polls Mama buchen</Link>
                        <Link to="/PollBuchen">Poll buchen</Link>
                    </div>
                </li>
                <li style={{float: 'right'}}><Link to="/PollBuchen"> About </Link></li>
            </ul>

            <Outlet />




        </div>
    );
}

export default App
