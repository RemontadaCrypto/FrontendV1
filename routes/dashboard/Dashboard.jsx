import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"

import { Layout, Tabs } from "../../components"
import Trade from "./Trade"

const Dashboard = () => {

    //  TABS
    const [tabs, setTabs] = useState([true, false, false])
    const tabList = ["Trades", "Offers", "Disputes"]
    const handleTabs = (position) => {
        const updatedTabs = tabs.map((item, index) =>
            index === position ? true : false
        );
        setTabs(updatedTabs);
    }

    return (
        <Layout>
            <section className="dashboard">
                <Tabs tabList={tabList} tabs={tabs} handleTabs={handleTabs} />
                <AnimatePresence>
                    {tabs[0] &&
                        < Trade />}
                </AnimatePresence>
            </section>
        </Layout>
    )
}

export default Dashboard
