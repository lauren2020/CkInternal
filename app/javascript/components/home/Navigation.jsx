import React from "react"
import { Button } from 'reactstrap';

import Divider from '../shared/BaseDivider'

const Navigation = ({
    setSelectedTab,
    selectedTab
}) => {
    return (
        <>
        <div className="navigationBar">
            <div className={selectedTab == "schools" ? "selectedNavigationButton" : "navigationButton"} onClick={() => setSelectedTab("schools")} >Schools</div>
            <Divider {...{
                length: "20px",
                orientation: "vertical"
            }}></Divider>
            <div className={selectedTab == "hours_details" ? "selectedNavigationButton" : "navigationButton"} onClick={() => setSelectedTab("hours_details")} >Hours Details</div>
            <Divider {...{
                length: "20px",
                orientation: "vertical"
            }}></Divider>
            <div className={selectedTab == "class_periods" ? "selectedNavigationButton" : "navigationButton"} onClick={() => setSelectedTab("class_periods")} >My Class Periods</div>
            <Divider {...{
                length: "20px",
                orientation: "vertical"
            }}></Divider>
            <div className={selectedTab == "programs" ? "selectedNavigationButton" : "navigationButton"} onClick={() => setSelectedTab("programs")} >Program Resources</div>
        </div>
        </>
    )
}

export default Navigation;