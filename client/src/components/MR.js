import React from "react";
import Form from "react-bootstrap/Form"
import { useSearchContext } from "../utils/searchContext";

// A menu for Master rank
// Options are different points where new hunts can be taken
function MR() {
    const [{masterRank}, dispatch] = useSearchContext();
    const updateMasterRank = (event)=>{
        const value = event.target.value.split("-")
        dispatch({type: "updateMR", MR: value[0]})
    }
    return (
            <Form.Group>
                <Form.Label>Master Rank</Form.Label>
                <Form.Control as="select" custom defaultValue="Rank" onChange={updateMasterRank}>
                    <option disabled hidden>Rank</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>6</option>
                    <option>7</option>
                    <option>9</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24-49</option>
                    <option>50-69</option>
                    <option>70-99</option>
                    <option>100-999</option>
                </Form.Control>
            </Form.Group>
    )
}
export default MR;