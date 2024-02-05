const RadioButtons = ({options,name}) => 
( 
    <>
        <fieldset className="flex gap-3 pt-1 py-2">
            {
                options.map( (option)=> (
                    
                    <div key={option} className="flex items-center">
                        <div className="bg-white dark:bg-gray-100 rounded-full w-3 h-3 flex justify-center items-center relative">
                            <input 
                                type = "radio" 
                                name = {name} 
                                className = "checkbox appearance-none border rounded-full border-gray-400 checked:border-blue-900 absolute cursor-pointer w-full h-full checked:bg-blue-900 checked:ring-2 checked:ring-blue-900 checked:ring-offset-2" 
                            />
                            <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-1 h-1 z-1"></div>
                        </div>
                        <label id="label1" className="ml-2  text-gray-800">{option}</label>
                    </div>
                
                ))
            }
        </fieldset>
            
    </>
)


export default RadioButtons
