import React from "react";
import Form from "react-bootstrap/Form"
import { useSearchContext } from "../utils/searchContext";

// Create a select menu form so users can input their current hunter rank
// Form is divided into three parts depending on if they are doing a low, high or master rank quest
function HR(){
    const [{ rank, hunterRank }, dispatch] = useSearchContext();
    const updateHunterRank = (event) => {
        const value = event.target.value.split("-")
        dispatch({ type: "updateHR", HR: value[0] })
        console.log(hunterRank);
    }
    return(
            <Form.Group>
                <Form.Label>Hunter Rank</Form.Label>
               {rank === "LR" && (                
                <Form.Control as="select" custom defaultValue="Rank" onChange={updateHunterRank}>
                    <option disabled hidden>Rank</option>    
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>10</option>     
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16-29</option>
                    <option>30-49</option>
                    <option>50-99</option>
                    <option>100-999</option>
                </Form.Control>
               )}
            {rank === "HR" && (
                <Form.Control as="select" custom defaultValue="Rank" onChange={updateHunterRank}>
                    <option disabled hidden>Rank</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16-29</option>
                    <option>30-49</option>
                    <option>50-99</option>
                    <option>100-999</option>
                </Form.Control>
            )}
            </Form.Group>
    )
}
export default HR;