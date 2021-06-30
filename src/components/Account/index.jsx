import React from 'react'
import Avatar from '../Avatar'
import "./Account.css"

export default function AccountComponent({ title, email }) {
    return (
        <div className="account-component-container">
            <div className="account-component-wrapper">
                <div className="account-component-image">
                    
                </div>

                <div className="account-component-avatar">
                    <Avatar
                        borderColor="#FFF"
                        borderWidth="0.6rem"
                        width="10rem"
                        height="10rem"
                        backgroundColor="#181F25"
                    />
                </div>
                <div className="account-component-details">
                    <h3>{title}</h3>
                    <h5>{email}</h5>
                </div>
                
            </div>
        </div>
    )
}
