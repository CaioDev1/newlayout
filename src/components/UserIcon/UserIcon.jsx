import React from 'react'

import ImgStyled from './UserIconStyle'

function UserIcon() {
    return <ImgStyled id='user-icon' src={process.env.PUBLIC_URL + '/Friends_BT.png'} />
}

export default UserIcon