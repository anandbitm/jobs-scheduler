import React , {Component} from "react";
import Profile from "./Profile";
import "./DayProfiles.css";

class DayProfiles extends Component{
   constructor(){
       super();
   }

   render(){
      return (<>
         <div> This is DayProfiles </div>
         <Profile />
         <Profile />
      </>);
   }
}

export default DayProfiles;