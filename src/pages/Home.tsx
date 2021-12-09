import {Link} from 'react-router-dom'
import React from "react";

export default function Home() {
    return (
        <div style={{maxHeight: '100%'}}>
            <h1 style={{fontSize: '100px', textAlign: 'center'}}>Hallo, Ich bin Polls Mammer!</h1>
            <Link to="/" style={{textDecoration: 'none'}}> <button className="btn" > Buch mich! </button> </Link>
        </div>
    );
}