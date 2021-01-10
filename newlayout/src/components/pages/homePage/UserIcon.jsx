import React from 'react'

function UserIcon() {
    return (
        <img id='user-icon' src={process.env.PUBLIC_URL + '/UserPhoto_Profile.jpg'} />
    )
}

export default UserIcon