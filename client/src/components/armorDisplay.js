import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

// Display the selected armor. Currently displays names only
// Will update with stats, skills, and slots
function ArmorDisplay(props){
    console.log(props);
    return(
        <Container>
            <Row>
                <Col className="col-sm-4">
                    <Card>
                        <div>{props.armor.head.name}</div>
                    </Card>
                </Col>
                <Col className="col-sm-4">
                    <Card>
                        <div>{props.armor.chest.name}</div>
                    </Card>
                </Col>
                <Col className="col-sm-4">
                    <Card>
                        <div>{props.armor.gloves.name}</div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-4">
                    <Card>
                        <div>{props.armor.waist.name}</div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="col-sm-4">
                    <Card>
                        <div>{props.armor.legs.name}</div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
export default ArmorDisplay