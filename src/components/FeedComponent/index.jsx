import React from 'react'
import IconComponent from '../IconComponent'
import "./FeedComponent.css"

export default function FeedComponent() {
    return (
        <div className="feed-component-container">
            <div className="feed-heading">
                <div className="feed-heading-left">
                    <h4>Matthew 1:3</h4>
                    <p>I am the good shepherd, he that loves me though he were dead, yet shall he live again</p>
                </div>
                <div className="feed-heading-right">
                    <h1>Jun 29</h1>
                    <p>2021</p>
                </div>
            </div>

            <div className="feed-commentary">
                <p>
                    In my days of job hunting and job hustling; I did everything right; sent out printed letters to CEOs of companies with my resume and all the palis I had acquired. I read for aptitude tests, wrote many and prayed earnestly for favour. But when it mattered most, I missed the most important action; to open my email.
                    Let me share with you my experience and how I lost out on two multinational job opportunities.
                    I had my email set up and submitted it in the applications I sent for these juicy job opportunities. I was still praying for a reply when after a month, I opened my email and saw that I had been invited for an interview three weeks prior. I missed those opportunity because I simply did not open my email.
                </p>
            </div>

            <div className="feed-component-icons">
                <IconComponent />
            </div>
            
        </div>
    )
}
