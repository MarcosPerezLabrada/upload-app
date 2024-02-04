const RadioButtons = ({options}) => 
( 
    <fieldset className="flex gap-3">
        {
            options.map( (option)=> (
                
                <div class="flex items-center mb-4">
                    <input id={option} type="radio" name="countries" value={option} class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for={option} class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {option}
                    </label>
                </div>
            
            ))
        }
    </fieldset>
)


export default RadioButtons