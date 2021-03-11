import React , {Component} from "react";
import {connect} from "react-redux";

import Scale from "./Scale";
import Jobs from "./Jobs";

import "./JobsTimeline.css";

class JobsTimeline extends Component{

  getActiveProfile = () =>{
        return this.props.profiles.length && this.props.profiles.filter((profile)=> profile.isActive ===true)[0];
  }

  handleActiveJob = (job) =>{
      this.props.updateActiveJob(job);
  }
   render(){
      return (<div className="jobs-timeline">
                <div  className="jobs">
                    {
                        
                            this.getActiveProfile()['jobs'].map((job)=><Jobs handleActiveJob = {this.handleActiveJob} key={`job-${job.id}`} job={job} />)
                        
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
           updateActiveJob:(job)=>{
               dispatch({type:"UPDATE_ACTIVE_JOB",payload:job});
           }
       }
}
export default connect(mapStateToProps,mapDispatchToProps)(JobsTimeline);