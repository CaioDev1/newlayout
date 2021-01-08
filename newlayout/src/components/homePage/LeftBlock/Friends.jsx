import React from 'react'

import UserIcon from '../UserIcon'

function Friends() {
    return (
        <div id='friends-content'>
            <div id='friends-content-info'>
                <UserIcon />
                <p>Cornaldo</p>
            </div>
            <div id='friends-content-online-status'></div>
        </div>
    )
}

export default Friends