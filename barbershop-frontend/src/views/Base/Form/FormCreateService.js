import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class FormCreateService extends Component {
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
                  <i className="fa fa-edit"></i>Criar Serviço

                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" id="name" placeholder="Digite o seu nome" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Descrição</Label>
                            <Input type="text" id="name" placeholder="Digite uma descrição" required />
                        </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Preço</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input id="appendedPrependedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Tempo</Label>
                            <Input type="text" id="name" placeholder="Digite a quantidade de tempo em minutos" required />
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

export default FormCreateService;

