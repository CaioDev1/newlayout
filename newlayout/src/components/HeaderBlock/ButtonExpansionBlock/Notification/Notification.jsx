import React from 'react'

import UserIcon from '../../../pages/homePage/UserIcon'

function Notification({children, type}) {
    return (
    <div id='notification'>
        <div id='notification-header' className={type}>
            <UserIcon />
            <div>
                <p><strong>Cornivaldo Carneiro</strong> {type == 'message' && <br />} está querendo ser seu amigo.</p>
                <span id='notification-date'>Há 2 dias</span>
            </div>
        </div>
        {children}
    </div>
    )
}

export default Notification