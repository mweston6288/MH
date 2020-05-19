import React, {useState} from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SearchState from "./searchState"
import { useSearchContext } from "./searchContext";
// Create tabs for low, high, and master rank
const Rank = ()=>{
    // default is low rank
    const [{rank}, dispatch] = useSearchContext();

    function setRank(key){
        dispatch({type:"changeRank", rank:key})
        console.log(rank)
    }
    return (
        <div>
        <Tabs activeKey={rank} onSelect={setRank}>
            <Tab eventKey="LR" title="Low Rank">
            </Tab>
            <Tab eventKey="HR" title="High Rank">
            </Tab>
            <Tab eventKey="MR" title="Master Rank">
            </Tab>
        </Tabs>
        <SearchState/>
</div >
    );
}
export default Rank;