import React from 'react'

import UserIcon from '../../../UserIcon/UserIcon'

function Notification({children, message, content}) {
    return (
    <div id='notification'>
        <div id='notification-header' className={message ? 'message' : ''}>
            <UserIcon />
            <div>
                <p>
                    <strong>Cornivaldo Carneiro</strong> 
                    {message && <br />} 
                    {content}
                </p>
                <span id='notification-date'>Há 2 dias</span>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Notification