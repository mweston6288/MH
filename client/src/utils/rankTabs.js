import React, {useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchState from "./searchState"
// Create tabs for low, high, and master rank
const Rank = ()=>{
    // default is low rank
    const [rank, setRank] = useState("LR");

    return (
        <Tabs activeKey={rank} onSelect={(key) => setRank(key)}>
            <Tab eventKey="LR" title="Low Rank">
                <SearchState rank="LR"/>
            </Tab>
            <Tab eventKey="HR" title="High Rank">
                <SearchState rank="HR" />
            </Tab>
            <Tab eventKey="MR" title="Master Rank">
                <SearchState rank="MR" />
            </Tab>
        </Tabs>
    );
}
export default Rank;