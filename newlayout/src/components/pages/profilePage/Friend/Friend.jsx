import React from 'react'

import Style from './FriendStyle'

import {Link} from 'react-router-dom'

function Friend() {
    return (
        <Style>
            <Link to=''>
                <div id='friend-item'>
                    <img src={process.env.PUBLIC_URL + '/Friends_BT.png'} />
                    <h3>Paulin do gás</h3>
                </div>
            </Link>
        </Style>
    )
}

export default Friend