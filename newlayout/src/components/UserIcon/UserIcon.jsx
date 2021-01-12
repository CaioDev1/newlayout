import React from 'react'

import styled from 'styled-components'

const Style = styled.div`
    #user-icon {
        height: 40px;
        width: 40px;

        border-radius: 100%;

        overflow: hidden;
    }
`

function UserIcon() {
    return (
        <Style><img id='user-icon' src={process.env.PUBLIC_URL + '/Friends_BT.png'} /></Style>
    )
}

export default UserIcon