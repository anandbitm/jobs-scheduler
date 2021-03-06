import React , {Component} from "react";
import Scale from "./Scale";
import Jobs from "./Jobs";

import "./JobsTimeline.css";

class JobsTimeline extends Component{
   constructor(){
       super();
   }

   render(){
      return (<>
          <div> This is JobsTimeline </div>
          <Jobs />
          <Scale />
      </>);
   }
}

export default JobsTimeline;