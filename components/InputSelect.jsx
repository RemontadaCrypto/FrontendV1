import React from 'react'
import Select from 'react-select'

const dummy = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const InputSelect = ({ placeholder, options, onChange, value }) => (
    <Select value={value} onChange={onChange} placeholder={placeholder ? placeholder : "select..."} options={options ? options : dummy} />
)
export default InputSelect
