import DragAndDrog from "../components/DragAndDrog";
import Select from "../components/Select"
import Toggle from "../components/Toggle"
import RadioButtons from "../components/RadioButtons";



export default function DocumentUploadView() {
    return (
      <div className="bg-white">
        <h1> Document Upload</h1>
        <hr />
        <div className="flex gap-6">
          <div className="w-2/3" >
          <Select 
              id = "import-name"
              title = "Select Import Name:"
              options={
                [ 
                  {label:"Name 1", id: "name-1"},
                  {label:"Name 2", id: "name-2"}
                ]
              }  
            />
            <DragAndDrog/>
            <p >Elapse Data Checking:</p>
            <p> No Elapsed Dates!</p>
            <p>Tolerance Window:</p>
            <Toggle label="algo"/>
          </div>
          <div className = "w-1/3 flex flex-col items-start">
            <p>Split schedule using social distancing?</p>
             <RadioButtons options={["Yes","No"]} />
            <p>Location Checking:</p>
            <p>All available!</p>
            <p>Client:</p>
            <RadioButtons options={["Single","Multiple"]}/>
            <Select 
              id = "testing-center-1"
              title = "Testing Center 1"
              options={
                [ 
                  {label:"Client 1", id: "client-1"},
                  {label:"Client 2", id: "client-2"}
                ]
              }
            />  
            <Select 
              id = "testing-center-2"
              title = "Testing Center 2"
              options={
                [ 
                  {label:"Client 3", id: "client-3"},
                  {label:"Client 4", id: "client-4"}
                ]
              }
            />  
            <Select 
              id = "testing-center-3"
              title = "Testing Center 3"
              options={
                [ 
                  {label:"Client 5", id: "client-5"},
                  {label:"Client 6", id: "client-6"}
                ]
              }  
            />
            <Select 
              id = "testing-center-4"
              title = "Testing Center 4"
              options={
                [ 
                  {label:"Client 7", id: "client-7"},
                  {label:"Client 8", id: "client-8"}
                ]
              }  
            />
          </div>
          
        </div>
        <p>Data in the import is correct. Please continue to import.</p>
        <button className="blue-color white-text">Continue Import</button>
        <button>Cancel</button>

      </div>        
    );
  }
  