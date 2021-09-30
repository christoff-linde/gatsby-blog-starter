import * as React from 'react'

const Banner = ({ title, data }) => {
    const path = data || ``
    return (
        <div className="banner">
            <div className="banner-content">
                <h3>{title}</h3>
                <p>{path}</p>
            </div>
        </div>
    )
}

export default Banner;
