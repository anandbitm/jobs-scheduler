import React from "react";

const Timer = (props) =>{

    return (<div className="timer">
                <div className="head">Start Time</div>
                <div className="content">
                    <div className="hours">
                        <div>hours</div>
                        <button className="up" onClick={()=>props.handleHours(true)}>+</button>
                        <div className="val">{props.hours}</div>
                        <button className="down" onClick={()=>props.handleHours(false)}>-</button>
                    </div>
                    <div className="minutes">
                        <div>minutes</div>
                        <button className="up" onClick={()=>props.handleMinutes(true)}>+</button>
                        <div className="val">{props.minutes}</div>
                        <button className="down" onClick={()=>props.handleMinutes(false)}>-</button>
                    </div>
                </div>
    </div>);
}

export default Timer;