import { useState } from "react"

const BigSelect = ({ label, options, title, toleranceIcon}) => {
    const [value, setValue] = useState('title')
    return (
        <div className="flex w-full justify-between py-1 items-center font-extrabold">
            {
                !!label && <p className="min-w-max"> {label} </p>
            }
            <div className="flex gap-2 items-center w-full ">
                <select 
                    className="border rounded w-full px-1 py-2"
                    defaultValue='title'
                    onInput={ (event) => {
                        setValue(event.value)
                    }} 
                    >
                    <option 
                        id='title' 
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
                {
                    !!toleranceIcon && <i className="fa-regular fa-clock fa-xl"></i>
                }
            </div>
        </div>
        
    )
}
export default BigSelect