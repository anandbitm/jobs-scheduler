import React , {Component} from "react";
import {connect} from "react-redux";

import Scale from "./Scale";
import Jobs from "./Jobs";

import "./JobsTimeline.css";

class JobsTimeline extends Component{

   render(){
      return (<div className="jobs-timeline">
                <div  className="jobs">
                    {
                        this.props.jobs.length && (
                            this.props.jobs.map((job)=><Jobs key={`job-${job.id}`} job={job} />)
                        )
                    }
                </div>
                <div className="scale">
                    <Scale />
                </div>
        </div>);
   }
}

const mapStateToProps = (state) =>{
     return {...state}
}

const mapDispatchToProps = (dispatch) =>{
       return {
           addJob : (job) =>{
            dispatch({type:"ADD_JOB",payload:job});
           }
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobsTimeline);