import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Head from "./armors/head"
import Chest from "./armors/chest"
import Gloves from "./armors/gloves"
import Waist from "./armors/waist"
import Legs from "./armors/legs"
import Total from "./armors/total"
import {useArmorContext} from "../utils/armorContext"
import SaveButton from "./saveButton"
import { useUserContext } from "../utils/userContext";
import LoginButton from "./loginButton";
import Button from "react-bootstrap/Button";

// Display the selected armor. Displays name, skills and stats
function ArmorDisplay(){
    const [{armor, name}, dispatch] = useArmorContext();
    const [user] = useUserContext();
    // Update build name in ArmorContext
    function handleChange(event){
        event.preventDefault();
        dispatch({type:"name", name: event.target.value})
    }
    // Reset the build
    function handleReset(event){
        event.preventDefault();
        dispatch({type:"reset"});
    }
    return(
        <div>
            <Container>
                <input type="text" onChange={handleChange} value={name}/>
                <Row>
                    <Col className="col-sm-4">
                        <Head head={armor.head}/>
                    </Col>
                    <Col className="col-sm-4">
                        <Chest chest={armor.chest}/>
                    </Col>
                    <Col className="col-sm-4">
                        <Gloves gloves={armor.gloves} />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-sm-4">
                        <Waist waist={armor.waist} />
                    </Col>
                    <Col className="col-sm-4">
                        <Legs legs={armor.legs} />
                    </Col>
                    <Col className="col-sm-4">
                        <Total/>
                    </Col>
                </Row>
            </Container>
            {// User can only save builds if logged in
                user.authenticated ? 
                    <SaveButton/>
                    :
                    <LoginButton/>        
            }
            <Button onClick={handleReset}>Reset</Button>
        </div>
    )
}
export default ArmorDisplay