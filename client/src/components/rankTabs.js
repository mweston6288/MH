import React, {useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// Create tabs for low, high, and master rank
// Non functional, will be used to better filter hunter and master rank sections.
const Rank = ()=>{
    const [rank, setRank] = useState("LR");

    return (
        <Tabs activeKey={rank} onSelect={(key) => setRank(key)}>
            <Tab eventKey="LR" title="Low Rank">
            </Tab>
            <Tab eventKey="HR" title="High Rank">
            </Tab>
            <Tab eventKey="MR" title="Master Rank">
            </Tab>
        </Tabs>
    );
}
export default Rank;