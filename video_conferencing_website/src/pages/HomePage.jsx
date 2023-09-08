import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faKeyboard } from '@fortawesome/free-solid-svg-icons'
import { Header } from '../components'
function HomePage() {
  return (
    <>
      <Header />
      <div className="homepage-body">
        {/* This is left side of the home page */}
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>We re-engineering the sevice we built for secure business meeting, Pro Meet, to make it free and available for all</p>
            <div className="action-btn">
              <button className="btn btn-success">
                <FontAwesomeIcon className='icon-block' icon={faVideo} /> New Meeting
              </button>
            </div>
            <div className="input-block">
              <div className="input-section">
                <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                <input placeholder="Enter a code of link" />
              </div>
              <button className="btn text-success">Join</button>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about Pro Meet
          </div>
        </div>
        {/* This is right side of the homepage */}
        <div className="right-side">
          <div className="content">
            <img src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage