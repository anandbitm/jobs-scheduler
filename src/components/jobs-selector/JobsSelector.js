import React , {Component} from "react";
import JobsList from "./JobsList";
import Timer from "./Timer";

import "./JobsSelector.css";

class JobsSelector extends Component{
   constructor(){
       super();
   }

   render(){
      return (<>
          <div> This is JobsSelector </div>;
          <JobsList />
          <Timer />
      </>);
   }
}

export default JobsSelector;