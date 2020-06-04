import React from "react";
import Form from "react-bootstrap/Form"
import { useSearchContext } from "../utils/searchContext";

// Create a select menu form so users can input their current hunter rank
// Form is divided into three parts depending on if they are doing a low, high or master rank quest
function HR(){
    const [{ rank, hunterRank }, dispatch] = useSearchContext();
    /**
     * Change hunter rank when user selects an option.
     * Since some options are a range, split is used to extract the 
     * first number value and use that
     */
    const updateHunterRank = (event) => {
        const value = event.target.value.split("-")
        dispatch({ type: "updateHR", HR: value[0] })
    }
    /**. 
     * High Rank start at hunter rank 11 so if user is searching through
     * High Rank, the option menu starts at 11. Options are based on
     * points where new monsters can be hunted
    */
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