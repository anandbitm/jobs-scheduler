import React , {Component} from "react";
import { connect } from "react-redux";

import Profile from "./Profile";
import "./DayProfiles.css";

class DayProfiles extends Component{

   render(){
      return (<>
        {
        this.props.profiles.length  &&

            (<table className="profiles">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number of Jobs</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.profiles.map((profile)=> <Profile key={`profile-${profile.id}`} profile={profile} />) } 
                </tbody>
            </table>)
         }
      </>);
   }
}

const mapStateToProps = (state) =>{
    return {...state};
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addProfile: (profile) =>{
              dispatch({type:"ADD_PROFILE",payload:profile})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DayProfiles);