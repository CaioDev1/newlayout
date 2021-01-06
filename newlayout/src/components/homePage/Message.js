import React from 'react'

import UserIcon from './UserIcon'

function Message() {
    return (
        <div id='message-content'>
            <UserIcon />
            <p>Cornaldo</p>
            <div id='message-content-online-status'></div>
        </div>
    )
}

export default Message