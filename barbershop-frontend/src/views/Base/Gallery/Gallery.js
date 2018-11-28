import React from 'react'
import {  Col, Row } from 'reactstrap';
import { Grid, Image } from 'semantic-ui-react'

const GridGallery = () => (
    <Grid>
        <Grid.Row columns={3}>
            <Row>
                <Col xs="3" sm="3" md="3">
                    <Grid.Column>
                        <Image src={'../../assets/img/image.png'} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={'../../assets/img/image.png'} />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src={'../../assets/img/image.png'} />
                    </Grid.Column>
                </Col>
            </Row>
        </Grid.Row>

        <Grid.Row columns={4}>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={5}>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
            <Grid.Column>
                <Image src={'../../assets/img/image.png'} />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

export default GridGallery