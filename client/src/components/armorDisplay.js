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

// Display the selected armor. Currently displays names only
// Will update with stats, skills, and slots
function ArmorDisplay(props){
    return(
        <Container>
            <Row>
                <Col className="col-sm-4">
                    <Head head={props.armor.head}/>
                </Col>
                <Col className="col-sm-4">
                    <Chest chest={props.armor.chest}/>
                </Col>
                <Col className="col-sm-4">
                    <Gloves gloves={props.armor.gloves} />
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-4">
                    <Waist waist={props.armor.waist} />
                </Col>
                <Col className="col-sm-4">
                    <Legs legs={props.armor.legs} />
                </Col>
                <Col className="col-sm-4">
                    <Total armor={props.armor} />
                </Col>
            </Row>
        </Container>
    )
}
export default ArmorDisplay