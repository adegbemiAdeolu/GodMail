import { FavoriteOutlined } from '@material-ui/icons'
import React from 'react'
import "./IconComponent.css"

export default function IconComponent({Icon, count}) {
    return (
        <div className="icon-component-container">
            <div className="icon-component-icon">
                {Icon}
            </div>
            <p>{count}</p>
        </div>
    )
}
