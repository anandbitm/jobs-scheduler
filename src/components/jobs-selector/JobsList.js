import React from "react";
import constants from "./../../utils/constants";

const JobsList = (props) =>{
    return (<div className="jobs-list"> 
             <ul>
                 {constants.JOBS.map((job)=> <li key={job.id} style={{color:job.color}}>{job.name}</li>)}
             </ul>
         </div>);
}

export default JobsList;