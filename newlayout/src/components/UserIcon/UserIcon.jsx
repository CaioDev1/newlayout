import React from 'react'

import styled from 'styled-components'

const Style = styled.div`
    #user-icon {
        height: 40px;
        width: 40px;

        border-radius: 100%;
    }
`

function UserIcon() {
    return (
        <Style><img id='user-icon' src={process.env.PUBLIC_URL + '/UserPhoto_Profile.jpg'} /></Style>
    )
}

export default UserIcon