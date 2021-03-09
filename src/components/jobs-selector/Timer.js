import React from "react";

const Timer = (props) =>{
    return (<div className="timer">
                <div className="head">Start Time</div>
                <div className="content">
                    <div className="hours">
                        <div>hours</div>
                        <button className="up">+</button>
                        <div className="val">08</div>
                        <button className="down">-</button>
                    </div>
                    <div className="minutes">
                        <div>minutes</div>
                        <button className="up">+</button>
                        <div className="val">00</div>
                        <button className="down">-</button>
                    </div>
                </div>
    </div>);
}

export default Timer;