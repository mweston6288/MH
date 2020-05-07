import React, {useState, useEffect} from "react";
import Form from "react-bootstrap/Form"

// A menu for Master rank
// Currently doesn't affact anything. Will eventually be used to filter equipment by availability
// Will also need to add ability to disable when HR is too low
function MR(props) {
    const[disabled,setDisabled]=useState();
    
    // Disable the Master Rank selector if HUnter rank is less than 16
    // You cannot play on Master rank beforehand
    useEffect(()=>{
        if (props.HR < 16){
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    }, [props.HR])
    
    return (
            <Form.Group>
                <Form.Label>Master Rank</Form.Label>
            <Form.Control as="select" custom defaultValue="Rank" onChange={props.updateMasterRank} disabled={disabled}>
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
                    <option>100+</option>
                </Form.Control>
            </Form.Group>
    )
}
export default MR;