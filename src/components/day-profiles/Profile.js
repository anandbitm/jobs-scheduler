import React from "react";

const Profile = (props) =>{
return (<tr>
          <td>{props.profile.name}</td>
          <td>{props.profile.count}</td>
    </tr>);
}

export default Profile;