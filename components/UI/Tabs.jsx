import React from 'react'

const Tabs = ({ tabs, handleTabs, tabList }) => {

    return (
        <div className="tabs">
            {tabList && tabList.map((tab, index) => (
                <div key={index} onClick={() => handleTabs(index)} className={`${tabs[index] ? "tabs__item active" : "tabs__item"}`}>
                    <p>{tab}</p>
                </div>
            ))}
        </div>
    )
}

export default Tabs
