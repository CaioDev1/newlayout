import React from 'react'

function ButtonExpansionBlock({children, side}) {
    return (
        <div className={`button-expansion-block ${side}`}>
            {children}
        </div>
    )
}

export default ButtonExpansionBlock