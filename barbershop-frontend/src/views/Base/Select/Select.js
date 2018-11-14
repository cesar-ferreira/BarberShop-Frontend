import React, { Component } from 'react'
import Select from 'react-select'
import Forms from "../Form";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const SelectComponent = () => (
    <Select options={options} />
);


export default SelectComponent;