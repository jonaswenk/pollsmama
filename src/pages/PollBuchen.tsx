import React from 'react'
import './PollBuchen.css'
import poll from '../images/poll.png'


const PollBuchen = () => {

    return (
        <div>
            <div className="about-section">
                <h1>Über uns</h1>
                <p>Hallo, wir sind die Familie Poll und bieten unseren Buchungservice bereits seit vielen Jahren an.</p>
                <p>Auch ein Dankeschön an unseren treusten Kunden, Simon Kamerer. Er nimmt den Service von Polls Mama bereits seit 10 Jahren jede Nacht in Anspruch.</p>
            </div>

            <h2 style={{textAlign: "center"}}>Unser Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="" alt="PollsMama" style={{width: '100%'}} />
                            <div className="container">
                                <h2>Polls Mama</h2>
                                <p className="title">CEO & Founder</p>
                                <p> Polls Mama ist schwul.</p>
                                <p>polls-mama@polls-mama-buchen.de</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={poll} alt="Poll" style={{width: '100%'}} />
                            <div className="container">
                                <h2>Poll</h2>
                                <p className="title"> Manager</p>
                                <p>Poll hat einen kleinen Kock.</p>
                                <p>poll@loll.de</p>
                                <p>
                                    <button className="button">Contact</button>
                                </p>
                            </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PollBuchen