import React from 'react'
import './style.css'
import TitleBar from '../TitleBar'
import BackgroundImage from '../../assets/images/texting-skater-mycguld.jpg'

const MobileView = ({ showSchedule }) => {
  return (
    <div className='small-screen-wrap'>
      <TitleBar />
      <div className="content-registration" style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <div className='mobile-black-background'>
          <p className='order-ai-text'>ORDER AI TEXT</p>
          <p className='experience-description'>This experience is best viewed on your desktop browser.</p>
        </div>
      </div>
    </div>
  )
}

export default MobileView
