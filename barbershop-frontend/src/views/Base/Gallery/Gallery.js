import React, {Component} from 'react'
import { Card, Col, Row, CardImg } from 'reactstrap';

class GridGallery extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                    <Col xs="3" sm="6" md="4">
                        <Card>
                            <CardImg src={'../../assets/img/image.png'} />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GridGallery