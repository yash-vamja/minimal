import React from 'react'
import './helping.css'
import MembersIcon from "../helping/heipnigimg/Members.svg"
import ClubsIcon from "../helping/heipnigimg/Clubs.png"
import EventBookingsIcon from "../helping/heipnigimg/Event Bookings.png"
import PaymentsIcon from "../helping/heipnigimg/Payments.png"


export default function helping() {
  return (
     <section className="stats-container">
      <div className="stats-left">
        <h2>
          Helping 50 local <br />
          <span className="highlight">business reinvent itself</span>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>

      <div className="stats-right">
        <div className="stat-item">
          <img className="icon" src={MembersIcon} />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className="stat-item">
          <img className="icon" src={ClubsIcon} />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className="stat-item">
          <img className="icon" src={EventBookingsIcon} />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className="stat-item">
          <img className="icon" src={PaymentsIcon} />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </section>
  )
}
