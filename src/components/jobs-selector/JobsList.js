import React from "react";


const JobsList = (props) =>{

    return (<div className="jobs-list"> 
             <ul>
                 {props.jobs.map((job)=> (<li 
                   key={job.id} 
                   className={props.selectedJob && props.selectedJob.id === job.id ? 'active':''}
                   style={{color:job.color}}
                   onClick ={()=>props.handleJob(job)}
                   >
                    {job.name}
                   </li>))}
             </ul>
         </div>);
}

export default JobsList;