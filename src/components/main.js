import React from "react";
import HornedBeasts from "./hornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from "./Forms";


class Main extends React.Component {
    filteredBeasts() {
        if (Number(this.props.dataSelected) === 0) {
            return this.props.data.map((item, idx) =>
                <Col key={idx}>
                <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} arr={item} beastModal={this.props.beastModal} key={idx} />
                </Col>
            )
        }
        else {
            return this.props.data.filter(item =>
                (item.horns === Number(this.props.dataSelected))

            ).map((item, idx) => (
                    <Col key={idx}>
                <HornedBeasts image_url={item.image_url} title={item.title} description={item.description} arr={item} beastModal={this.props.beastModal} key={idx} />
                    </Col>
            )
            )
        }
                        }
    render() {
        return (
            <>
                <Form horns={this.props.filter} />
                <Row xs={2} md={3} className="g-4">
                        {this.filteredBeasts()}
                    </Row>
                
            </>
        )
    }
}
export default Main;