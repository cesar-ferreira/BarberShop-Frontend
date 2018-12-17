import React, { Component } from 'react';
import Select from 'react-select'

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


import { Mutation } from 'react-apollo'
import gql from "graphql-tag";
import makeAnimated from "react-select/lib/animated";

const options = [
    { value: 'SERVICE1', label: 'SERVICE1' },
    { value: 'SERVICE2', label: 'SERVICE2' },
    { value: 'SERVICE3', label: 'SERVICE3' },
    { value: 'SERVICE4', label: 'SERVICE4' },
    { value: 'SERVICE5', label: 'SERVICE5' },
    { value: 'SERVICE6', label: 'SERVICE6' },
];


//const { CREATE_SERVICE } = require('../../../api/mutation');


const CREATE_SERVICE = gql`

  mutation serviceCreate(
  
          $name: ServiceNameEnum!,
          $description: String!,
          $price: Float! ,
          $time: Float!){
          
          serviceCreate(name: $name, description: $description, price: $price, time: $time) {
              id
              createdAt
              name
              description
              price
              time
            }
  }
`;



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
        time: undefined
    };
  }

    handleChange(event) {
      console.log(this.state);
        this.setState({
            name: event.target.value,
            description: event.target.value,
            price: event.target.value,
            time: event.target.value
        });
    }

    handleSubmit(event) {

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

              <Mutation mutation={CREATE_SERVICE} >
                  {(serviceCreate, { data, loading, error }) => {

                      return(
                    <Form  className="form-horizontal"
                           onSubmit={async event => {
                               event.preventDefault();

                               const { name, description, price, time } = this.state
                               console.log(this.state)
                               await serviceCreate({
                                   variables: { name, description, price, time }
                               })
                           }}>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Select
                                type="text"
                                value={this.state.name}
                                closeMenuOnSelect={true}
                                components={makeAnimated()}
                                options={options}


                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Descrição</Label>
                            <Input type="text" id="name" placeholder="Digite uma descrição" required
                                   value={this.state.description}
                                   onChange={event => this.setState({ description: event.target.value })}/>
                        </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Preço</Label>
                        <div className="controls">
                            <Input id="appendedPrependedInput" size="16" type="number"
                                   value={this.state.price}
                                   onChange={event => this.setState({ price: event.target.value })}/>

                        </div>
                      </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Tempo</Label>
                            <Input type="number" id="name" placeholder="Digite a quantidade de tempo em minutos" required
                                   value={this.state.time}
                                   onChange={event => this.setState({ time: event.target.value })}/>
                        </FormGroup>


                      <div className="form-actions">

                          <Button type="submit" onClick={serviceCreate} color="primary">Save changes</Button>
                          <Button color="secondary">Cancel</Button>

                      </div>
                    </Form>

                      )}}
              </Mutation>
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

