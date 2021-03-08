import React,{Component} from "react";

import DayProfiles from "./components/day-profiles/DayProfiles";
import JobsSelector from "./components/jobs-selector/JobsSelector";
import JobsTimeline from "./components/jobs-timeline/JobsTimeline";

import './App.css';

class  App extends Component{

  render(){
    return (
      <div className="main-container">
        <div className="jobs-container">
           <div>
                 <JobsSelector />
           </div>
           <div>
               <JobsTimeline />
           </div>
        </div>
        <div>
            <DayProfiles />
        </div>
      </div>
    );
  }
 
}

export default App;
