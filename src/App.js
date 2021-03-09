import React,{Component} from "react";

import DayProfiles from "./components/day-profiles/DayProfiles";
import JobsSelector from "./components/jobs-selector/JobsSelector";
import JobsTimeline from "./components/jobs-timeline/JobsTimeline";

import './App.css';

class  App extends Component{

  render(){
    return (
      <div className="main-container">
        <div>
            <DayProfiles />
        </div>
        <div className="jobs-container">
            <JobsSelector />
            <JobsTimeline />
        </div>
        
      </div>
    );
  }
 
}

export default App;
