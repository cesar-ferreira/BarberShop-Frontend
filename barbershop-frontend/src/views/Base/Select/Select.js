import React, { Component } from 'react'
import Select from 'react-select'

import makeAnimated from 'react-select/lib/animated';


const options = [
    { value: 'Barba', label: 'Barba' },
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
