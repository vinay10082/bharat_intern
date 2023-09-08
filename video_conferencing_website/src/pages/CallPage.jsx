import React from 'react'
import { CallPageHeader, CallPageFooter, MeetingInfo, Messenger } from '../components'

function CallPage() {
  return (
    <div className="callpage-container">
      <video className="vido-container" src="" controls></video>
      
      <CallPageHeader />
      <CallPageFooter />
      <MeetingInfo />
      <Messenger />
    </div>
  )
}

export default CallPage