import React from 'react'

const Card = ({ tab, title, info, time, active }) => {
    return (
        <section className={`card ${active ? "active" : ""}`}>
            <div className="tab">
                {tab}
            </div>
            <h2>{title}</h2>
            <p>{info}</p>
            {time && <p>
                <strong>Time left:</strong> {time}
            </p>}
        </section>
    )
}

export default Card
