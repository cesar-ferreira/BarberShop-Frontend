import React, { Component } from 'react';
import { Calendar, SelectComponent } from '../../Base';
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Label,
  Row,
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Agendamento

                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup>
                        <Label htmlFor="prependedInput">Data</Label>
                        <div className="controls">
                            <Calendar/>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Serviço</Label>
                        <div className="controls">
                            <SelectComponent/>
                        </div>
                      </FormGroup>



                      <div className="form-actions">
                        <Button type="submit" color="primary">Save changes</Button>
                        <Button color="secondary">Cancel</Button>
                      </div>
                    </Form>
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;

