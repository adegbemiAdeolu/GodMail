import React from 'react'
import { Book, Comment, FavoriteOutlined } from '@material-ui/icons'
import StatsDetails from '../StatsDetials'
import "./AccountData.css"
import stats from "./Data.json"

export default function AccountData({ }) {
    return (
        <div className="container">
            <h5>Your Bible Study Challenge</h5>

            <div className="account-data-stats">

                {stats.map((item) => (
                    <StatsDetails 
                        {...item}
                        key={item.id} 
                    />
                ))}

                <StatsDetails 
                    Icon={<Book />}
                    statTitle="Scriptures"
                    statCount="18"
                />

                <StatsDetails 
                    Icon={<Comment />}
                    statTitle="Commentary"
                    statCount="12"
                />

                <StatsDetails 
                    Icon={<FavoriteOutlined />}
                    statTitle="Likes"
                    statCount="12"
                />
        
            </div>
        </div>
        
    )
}
