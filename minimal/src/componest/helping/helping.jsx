import React from 'react'
import './helping.css'
import MembersIcon from "../helping/heipnigimg/Members.svg"
import ClubsIcon from "../helping/heipnigimg/Clubs.png"
import EventBookingsIcon from "../helping/heipnigimg/Event Bookings.png"
import PaymentsIcon from "../helping/heipnigimg/Payments.png"
import Pana from "../helping/heipnigimg/Pana.png"
import Tesla from "../helping/heipnigimg/tesla.png"
import Frame from "../helping/heipnigimg/Frame.png"
import Blog1 from "../helping/heipnigimg/bloagimage1.png"
import Blog2 from "../helping/heipnigimg/bloagimage2.png"
import Blog3 from "../helping/heipnigimg/bloagimage3.png"


export default function helping() {

 
  return (
    <>
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

    <div className='second-section'>
    <div className='second-section-img'>
    <img src={Pana} alt="" />
    </div>
    <div className='second-section-text'>

      <h2>How to design your site footer like we did</h2>
      <div className='second-section-text-content'>
              <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
      </div>
      <div>
        <button className='second-section-btn'>Learn More</button>
      </div>

    </div>
    
    </div>
     <section className="testimonial-container">
      <div className="testimonial-left">
        <img src={Tesla} alt="Tesla Logo" className="tesla-logo" />
      </div>

      <div className="testimonial-right">
        <p className="testimonial-text">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper.
          Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit.
          Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique
          nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
          placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <p className="testimonial-name">Tim Smith</p>
        <p className="testimonial-title">British Dragon Boat Racing Association</p>

        <div className="testimonial-logos">
          <img src={Frame} alt="Logo 1" />
          <p className='meet-customers'>Meet all customers →</p>
         
          
    
        </div>

       
      </div>
    </section>


    <section className="blog-section">
      <h2>Caring is the new marketing</h2>
      <p className="blog-description">
        The Nexeent blog is the best place to read about the latest membership insights, trends and more.
        See who's joining the community, read about how our community are increasing their membership
        income and lot's more.
      </p>

      <div className="blog-posts">
        <div className="blog-post"> 
          <img src={Blog1} alt="Blog Post 1" />

          <div className="blog-post-content">
          <p className="blog-post-title">Creating Streamlined Safeguarding Processes with OneRen</p>
          <p className="read-more"> Readmore <span>→</span></p>
          </div>

        </div>
        <div className="blog-post"> 
          <img src={Blog2} alt="Blog Post 2" />
           <div className="blog-post-content">
          <p className="blog-post-title">What are your safeguarding responsibilities and how can you manage them?</p>
          <p className="read-more"> Readmore <span>→</span></p>
          </div>

        </div>
        <div className="blog-post"> 
          <img src={Blog3} alt="Blog Post 3"   />
           <div className="blog-post-content">
          <p className="blog-post-title">Revamping the Membership Model with Triathlon<br/> Australia</p>
          <p className="read-more"> Readmore <span>→</span></p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}
