import React from 'react'

import {Fade} from '@material-ui/core'

function ButtonExpansionBlock({children, side}) {
    return (
        <Fade in timeout={500} mountOnEnter unmountOnExit>
            <div className={`button-expansion-block ${side}`}>
                {children}
            </div>
        </Fade>
    )
}

export default ButtonExpansionBlock