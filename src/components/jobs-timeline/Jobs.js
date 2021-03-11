import React from "react";
import getTimeDiff from "./../../utils/utils";

const Jobs = (props) =>{

    const widthPerUnit = 40;
    const startHours = Math.floor(props.job.start / 60);
    const startMinutes = props.job.start - (startHours*60);
    const left = widthPerUnit*(startHours + (startMinutes/60))+"px" ;

    const width = getTimeDiff(props.job.start,props.job.end)*widthPerUnit+"px";

    return (<div 
                className={`job-area`} 
                data-start = { props.job.start}
                data-end =  { props.job.end}
                data-job = {props.job.name}
                title = {props.job.name}
                
                style={{backgroundColor:props.job.color,
                        left:left,
                        width:width}
                }
                onClick={()=>props.handleActiveJob(props.job)}
             > 

            {
               getTimeDiff(props.job.start,props.job.end) >= 1  && <span className="job">{props.job.name}</span> 
            }
            
           </div>);
}

export default Jobs;