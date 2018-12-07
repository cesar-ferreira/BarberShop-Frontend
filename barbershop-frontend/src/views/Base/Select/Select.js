import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import {graphql} from "react-apollo";

/*
const GET_SERVICE = gql`
  
    query{
        services{
            name
        }
    }
  
`;


const Services = () => (
    <Query query={GET_SERVICE}>
    {({ loading, data: { service } }) => (
        loading ? <p>Loading…</p> :
            <h1>Hello ${service.name}</h1>
    )}
    </Query>
);


const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

const x = graphql(GET_SERVICE)(sese);


const sese = ({ data: {loading, error, services }}) => {
    if (loading) {
        return <p>Loading ...</p>;
    }
    if (error) {
        return <p>{error.message}</p>;
    }

    return <ul>
        { services.map( s => <li key={s.id}>{s.name}</li> ) }
    </ul>;
};

*/
const options = [
    { value: 'Cabelo', label: 'Cabelo' },
    { value: 'Cabelo', label: 'Cabelo' },
    { value: 'Bigode', label: 'Bigode' }
];


export default function SelectComponent() {
    return (

        <Select
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={options}
        />
    );
}


