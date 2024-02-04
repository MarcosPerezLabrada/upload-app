import { useState } from "react"

const Select = ({ options, title}) => {
    const [value, setValue] = useState('title')
    return (
        <select 
            // value={value} 
            defaultValue='title'
            onInput={ (event) => {
                console.log("oninput event")
                setValue(event.value)
            }} 
            >
            <option 
                id='title' 
                disabled
            >
                {title}
            </option>
            {
                options.map( option => (
                    <option id = { option.id }>
                        {option.label}
                    </option>
                ))
            }
        </select>
    )
}
export default Select