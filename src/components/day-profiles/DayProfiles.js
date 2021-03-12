import React,{ Component } from "react"
import { connect } from "react-redux"

import Profile from "./Profile"
import "./DayProfiles.css"

class DayProfiles extends Component{
  
    handleActiveProfile = (profileId) =>{
       const profiles = this.props.profiles.map((profile)=>{
            if(profile.id === profileId){
                profile.isActive = true;
            }else{
                profile.isActive = false;
            }
            return profile;
       });

       this.props.updateJob(profiles);
   }

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
                   {this.props.profiles.map((profile)=> <Profile key={`profile-${profile.id}`} profile={profile} handleActive={this.handleActiveProfile} />) } 
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
              dispatch({type:"ADD_PROFILE",payload:profile});
        },
        updateJob : (profile) =>{
            dispatch({type:"UPDATE_JOB",payload:profile});
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DayProfiles);