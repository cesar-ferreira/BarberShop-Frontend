import React, { Component } from 'react';
import { request } from 'graphql-request';
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

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
        name: undefined,
        description: undefined,
        price: undefined,
        time: undefined,
    };
  }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            description: event.target.value,
            price: event.target.value,
            time: event.target.value
        });
    }

    handleSubmit(event) {
        const mutation = `{
              mutation{
                  serviceCreate(name:cesar,
                                description:"afasfa",
                                price:45,
                                time:30,
                                status:ACTIVE){
               
                  }
              }
            
         }`;

        request('http://localhost:3030/', mutation).then(data => console.log(data));
        event.preventDefault();
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

