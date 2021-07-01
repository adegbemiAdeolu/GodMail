import { FavoriteOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import IconComponent from '../IconComponent'
import "./FeedComponent.css"

export default function FeedComponent({ reference, scripture, commentary, year, day }) {
    return (
        <div className="feed-component-container">
            <div className="feed-heading">
                <div className="feed-heading-left">
                    <h4>{reference}</h4>
                    <p>{scripture}</p>
                </div>
                <div className="feed-heading-right">
                    <h1>{day}</h1>
                    <p>{year}</p>
                </div>
            </div>

            <div className="feed-commentary">
                <p>
                    {commentary}
                </p>
            </div>

            <div className="feed-component-icons">
                <IconComponent 
                    Icon={<FavoriteOutlined />}
                    count="12"
                />
                
                <IconComponent 
                    Icon={<ShareOutlined />}
                    count="5"
                />

                <IconComponent 
                    Icon=<FavoriteOutlined />
                    count="124"
                />
                
            </div>
            
        </div>
    )
}
