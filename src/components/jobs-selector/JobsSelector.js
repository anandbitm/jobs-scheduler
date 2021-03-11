import React , {Component} from "react";
import {connect} from "react-redux";
import constants from "./../../utils/constants";
import JobsList from "./JobsList";
import Timer from "./Timer";

import "./JobsSelector.css";

class JobsSelector extends Component{

   constructor(props){
      super(props);

      this.state = {
           selectedJob:this.props.activeJob,
           hours:"00",
           minutes:"00"
      }
   }

   addJobToTimeline = () =>{
      if(this.state.selectedJob){
         let jobtoAdd = {...this.state.selectedJob,...this.getStartAndEndTime()};
         let profiles = this.props.profiles.map((profile)=>{
               if(profile.isActive){
                  profile.jobs = this.addOrUpdateJob(profile.jobs,jobtoAdd);
               }
               return profile;
         })
         this.props.addJob(profiles);
      } 
   }

   addOrUpdateJob = (jobs,jobtoAdd) =>{
      for(let i=0;i<jobs.length;i++){
         if(jobs[i].id === jobtoAdd.id){
            jobs[i] = jobtoAdd;
            return jobs;
         }
      }
      jobs.push(jobtoAdd);
      return jobs;
   }

   getStartAndEndTime = () =>{
      
      const jobs = this.getActiveProfile()['jobs'];

      let start =  (60*this.state.hours)+ (1*this.state.minutes);
      let end = 24*60;

      let needUpdate = false;

      for(let i =0;i<jobs.length;i++){
            if(this.state.selectedJob.id !== jobs[i].id){
               if(start >= jobs[i].start){
                  jobs[i].end = start;
                  needUpdate = true;
                  break;
               }else if(end > jobs[i].start){
                  end =  jobs[i].start;
               }
            }
      }

      if(needUpdate){
         const profiles = this.props.profiles.map((profile)=>{
            if(profile.isActive){
                profile.jobs = jobs;
            }
            return profile;
         });
   
         this.props.updateJob(profiles);
      }
     
      return ({
          start:start,
          end:end
      });
   }

   selectJob = (job) =>{
      const jobs = this.getActiveProfile()['jobs'];
      let start = jobs.filter((val)=>val.id===job.id)[0]?.start || 0;
      let hours = Math.floor(start / 60);
      let minutes = (start - hours*60 );
      this.setState({selectedJob:job,hours:hours.toString().padStart(2, "0"),minutes:minutes.toString().padStart(2, "0")});
      this.props.updateActiveJob(job);
   }

   handleHours = (isUp) =>{
      let hours = parseInt(this.state.hours);
         hours = isUp ? ++hours:--hours;
         (hours >= 0 && hours <= 24) && this.setState({hours:hours.toString().padStart(2, "0")});
        if(hours === 24){
          this.setState({minutes:"00"});
        }
   }

   handleMinutes = (isUp) =>{
      let minutes = parseInt(this.state.minutes);
      let hours = parseInt(this.state.hours);
      minutes = isUp ? ++minutes:--minutes;
      (hours <24 && minutes >= 0 && minutes < 60) && this.setState({minutes:minutes.toString().padStart(2, "0")});
   }

   getActiveProfile = () =>{
          return this.props.profiles.length && this.props.profiles.filter((profile)=> profile.isActive ===true)[0];
   }

   cancel =() =>{
      this.setState({selectedJob:null});
      this.props.updateActiveJob(null);
   }

   delete = () =>{
      if(this.state.selectedJob){
         this.props.deleteJob(this.state.selectedJob.id);
         this.cancel();
      } 
   }

   render(){
      return (<div className="jobs-selector">
                  <div className="jobs-header">Jobs ({this.getActiveProfile()['name']}) <button className="delete" onClick={this.delete}> Delete </button></div>
                  <div className="main-content">
                     <JobsList 
                         handleJob={this.selectJob} 
                         jobs = {constants.JOBS}
                         selectedJob = {this.props.activeJob}
                     />
                     <Timer 
                        hours={this.state.hours} 
                        minutes={this.state.minutes} 
                        handleHours={this.handleHours} 
                        handleMinutes={this.handleMinutes} 
                     />
                  </div>
                  <div className="jobs-footer">
                     <button className="cancel" onClick={this.cancel}>Cancel</button><button className="done" onClick={this.addJobToTimeline}>Done</button>
                  </div>
             </div>);
   }
}

const mapStateToProps = (state) =>{
     return {...state};
}

const mapDispatchToProps = (dispatch) =>{
   
   return {
      addJob : (job) =>{
         dispatch({type:"ADD_JOB",payload:job});
      },
      deleteJob : (jobid) =>{
         dispatch({type:"DELETE_JOB",payload:jobid});
      },
      updateJob : (job) =>{
         dispatch({type:"UPDATE_JOB",payload:job});
      },
      updateActiveJob:(job)=>{
         dispatch({type:"UPDATE_ACTIVE_JOB",payload:job});
     }
   }

}

export default connect(mapStateToProps,mapDispatchToProps)(JobsSelector);