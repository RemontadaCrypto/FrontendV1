import React from 'react'
import Select from 'react-select'

const dummy = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        color: "#294766",
        background: state.isSelected ? "#DBE9FF" : "#fff",
    }),

    singleValue: (provided) => ({
        ...provided,
        color: "#294766",
        fontWeight: 500,
        fontSize: "1rem",
    })
}

const InputSelect = ({ placeholder, options, onChange, value }) => (
    <Select
        styles={customStyles}
        value={value}
        onChange={onChange}
        placeholder={placeholder ? placeholder : "select..."}
        options={options ? options : dummy}
        theme={theme => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary25: '#dbe9ff',
                primary: '#294766',
            },
        })} />
)
export default InputSelect
