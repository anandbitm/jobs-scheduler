import React from "react";
import getTimeDiff from "./../../utils/utils";

const Jobs = (props) =>{

    const widthPerUnit = 40;
    const start = props.job.start.split(":");
    const left = widthPerUnit*(parseInt(start[0]) + (parseInt(start[1])/60))+"px" ;
    const width = getTimeDiff(props.job.start,props.job.end)*widthPerUnit+"px";

    return (<div 
            className={`job-area`} 
            style={{backgroundColor:props.job.color,
                    left:left,
                    width:width}
            }> 
            <span className="job">{props.job.name}</span> 
           </div>);
}

export default Jobs;