import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleExclamation, faCog } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div className="Header">
            <div className="logo">
                {/* Here is logo */}
                <span className="help-text">
                    Meet
                </span>
            </div>
            <div className="action-btn">
            <FontAwesomeIcon className='icon-block' icon={faCircleQuestion} />
            <FontAwesomeIcon className='icon-block' icon={faCircleExclamation} />
            <FontAwesomeIcon className='icon-block' icon={faCog} />
            </div>

        </div>
    )
}

export default Header