import React from 'react'
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(`props:`, props.fullName);
  return (
    <div>
      <h1>{props.fullName}</h1>
      <h1>{props.bio}</h1>
      <h1>{props.profession}</h1>
      <h1>{props.children}</h1>
      <button onClick={() => props.handleName()}>
          ClickMe
      </button>
    </div>
  )
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
 };
Profile.defaultProps = {
  fullName:"Asma El kissi"
 };
export default Profile


