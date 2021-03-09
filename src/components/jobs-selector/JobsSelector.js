import React , {Component} from "react";
import JobsList from "./JobsList";
import Timer from "./Timer";

import "./JobsSelector.css";

class JobsSelector extends Component{

   render(){
      return (<div className="jobs-selector">
                  <div className="jobs-header">Jobs (Anand)</div>
                  <div className="main-content">
                     <JobsList />
                     <Timer />
                  </div>
                  <div className="jobs-footer">
                     <button className="cancel">Cancel</button><button className="done">Done</button>
                  </div>
             </div>);
   }
}

export default JobsSelector;