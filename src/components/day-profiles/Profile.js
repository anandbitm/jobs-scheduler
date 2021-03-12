/* eslint-disable react/prop-types */
import React from "react"

const Profile = (props) => (<tr className={props.profile.isActive ? 'active' : ''} onClick={() => props.handleActive(props.profile.id)}>
  <td>{props.profile.name}</td>
  <td>{props.profile.jobs.length}</td>
</tr>)

export default Profile
