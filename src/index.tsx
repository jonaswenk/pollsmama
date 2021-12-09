import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Ballmassagen from "./pages/Ballmassagen";
import Hahnmassagen from "./pages/Hahnmassagen";
import Home from "./pages/Home";
import PollBuchen from "./pages/PollBuchen"


ReactDOM.render(


    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="Ballmassagen" element={<Ballmassagen />} />
                <Route path="Hahnmassagen" element={<Hahnmassagen />} />
                <Route path="PollBuchen" element={<PollBuchen />} />
                <Route path="*" element={<Home />}/>
                {/*<Route path="date" element={<Date-buchen />} />*/}
                {/*<Route path="night" element={<Nacht-buchen />} />*/}
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
