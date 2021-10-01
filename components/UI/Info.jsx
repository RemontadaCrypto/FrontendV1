import React from 'react'

const Info = ({ array }) => {
    return (
        <section className="info">
            <ul>
                {array.map((info, index) => (
                    <li key={index}><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#AA2C09" />
                    </svg>
                        {info}</li>
                ))}
            </ul>
        </section>
    )
}

export default Info
