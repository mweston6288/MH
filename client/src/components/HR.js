import React from "react";
import Form from "react-bootstrap/Form"

function HR(props){
    return(
            <Form.Group>
                <Form.Label>Hunter Rank</Form.Label>
                <Form.Control as="select" custom defaultValue="Rank" onChange={props.updateHunterRank}>
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
                    <option>15-29</option>
                    <option>30-49</option>
                    <option>50-99</option>
                    <option>100+</option>
                </Form.Control>
            </Form.Group>
    )
}
export default HR;