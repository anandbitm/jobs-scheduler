import React,{Component} from "react";

import DayProfiles from "./components/day-profiles/DayProfiles";
import JobsSelector from "./components/jobs-selector/JobsSelector";
import JobsTimeline from "./components/jobs-timeline/JobsTimeline";

import './App.css';

class  App extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div className="App">
        <JobsSelector />
        ===========================
        <JobsTimeline />
        ========================
        <DayProfiles />
      </div>
    );
  }
 
}

export default App;
