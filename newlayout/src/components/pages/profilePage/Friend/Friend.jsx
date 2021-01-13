import React from 'react'

import Style from './FriendStyle'

import {Link} from 'react-router-dom'

function Friend() {
    return (
        <Style>
            <Link to=''>
                <div id='friend-item'>
                    <img src={process.env.PUBLIC_URL + '/Friends_BT.png'} />
                    <span>Paulin do gás</span>
                </div>
            </Link>
        </Style>
    )
}

export default Friend