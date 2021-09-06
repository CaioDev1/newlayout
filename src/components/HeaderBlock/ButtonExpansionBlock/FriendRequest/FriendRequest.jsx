import React from 'react'

import Notification from '../Notification/Notification'

function FriendRequest() {
    return (
        <Notification content='está querendo ser seu amigo'>
            <div id='friend-request-buttons'>
                <button id='friend-request-button-accept'>Aceitar</button>
                <button id='friend-request-button-denied'>Recusar</button>
            </div>
        </Notification>
    )
}

export default FriendRequest