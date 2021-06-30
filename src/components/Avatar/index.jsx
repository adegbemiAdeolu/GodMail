import React from 'react'
import "./Avatar.css"

export default function Avatar({ borderWidth, borderColor, profileImage, alt, backgroundColor, width, height }) {
    return (
        <img 
            src={profileImage} 
            alt={alt} 
            style={{ 
                backgroundColor: backgroundColor, 
                width: width, 
                height: height,
                borderWidth: borderWidth,
                borderColor: borderColor
            }} 
        /> 
    )
}
