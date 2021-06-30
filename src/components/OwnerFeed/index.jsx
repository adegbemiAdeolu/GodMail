import React from 'react'
import FeedComponent from '../FeedComponent'
import "./OwnerFeed.css"

export default function OwnerFeed() {
    return (
        <div className="owner-feed-container">
            <div className="owner-feed-header">
                <h3>Your Posts</h3>
                <h5>Love letters you have opened</h5>
            </div>

            <div className="owner-feed-feeds">
                <FeedComponent />
            </div>
            
        </div>
    )
}
