const Select = ({ label, options, title, toleranceIcon}) => {
    return (
        <div className="flex w-full justify-between py-1 items-center">
            {
                !!label && <p className="min-w-max"> {label} </p>
            }
            <div className="flex gap-2 items-center">
                <select 
                    className="border rounded w-full px-1 py-2"
                    defaultValue='title' 
                    >
                    <option 
                        id='title' 
                    >
                        {title}
                    </option>
                    {
                        options.map( option => (
                            <option key = { option.id }>
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
export default Select