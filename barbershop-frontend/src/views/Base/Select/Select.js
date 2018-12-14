import React, { Component } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import { Query } from 'react-apollo';

const { GET_SERVICE } = require('../../../api/query');

const SelectComponent = () => (
    <Query query={GET_SERVICE}>
        {({ loading, error, data }) => {
            console.log(data.services);

            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error :(</div>;

            return (
                <Select
                    closeMenuOnSelect={false}
                    components={makeAnimated()}
                    isMulti
                    options={data.services}
                />

            );
        }}
    </Query>
);

export default SelectComponent;


