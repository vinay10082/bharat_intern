import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faUserCircle, faInbox } from '@fortawesome/free-solid-svg-icons'

function CallPageHeader() {
  return (
    <>
    <div className="frame-header">
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faUserFriends} />
      </div>
      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faInbox} />
      </div>

      <div className="header-items date-block">1:00 PM</div>

      <div className="header-items icon-block">
        <FontAwesomeIcon className="icon" icon={faUserCircle} />
      </div>
    </div>
    </>
  )
}

export default CallPageHeader