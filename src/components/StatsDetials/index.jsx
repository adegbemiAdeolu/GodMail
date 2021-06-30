import React from 'react'
import "./StatsDetails.css"

export default function StatsDetails({ Icon, statTitle, statCount }) {
    return (
        <div className="stats-details-container">
            <div className="stats-details-stat">
                {Icon}
                <h3>{statTitle}:</h3>
                <p>{statCount}</p>
            </div>
        </div>
    )
}
