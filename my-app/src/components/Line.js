import React from 'react'

const Line = ({ color }) => {
    return (
        <hr className = 'line'
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
        />
    )
}

export default Line