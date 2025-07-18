import React from 'react'
import './hirosession.css'
import Illustration from './hirosessionimg/Illustration.svg'

export default function hirosession() {
  return (
    <div className="hirosession">
        <div className="hirosession-content-left">
      <p className='hirosession-p_1'>Lessons and insights </p>
      <p className='hirosession-p_2'>from 8 years</p>
      <p>Where to grow your business as a photographer: site or social media?</p>
      <button className='hirosession-btn'>Register</button>
      </div>
      <div className="hirosession-content-right">
    <img src={Illustration} alt="" />
      </div>
    </div>
  )
}
