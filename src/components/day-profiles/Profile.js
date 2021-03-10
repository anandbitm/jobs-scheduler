import React from "react";

const Profile = (props) =>{

return (<tr className={props.profile.isActive ? 'active':''} onClick={()=>props.handleActive(props.profile.id)}>
          <td>{props.profile.name}</td>
          <td>{props.profile.jobs.length}</td>
    </tr>);
}

export default Profile;