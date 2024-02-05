import DragAndDrog from "../components/DragAndDrog";
import Select from "../components/Select"
import Toggle from "../components/Toggle"
import RadioButtons from "../components/RadioButtons";
import BigSelect from "../components/BigSelect";


export default function DocumentUploadView() {
    return (
      <div className="bg-white">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="pb-2"> Document Upload </h1>
          <hr className="w-44"/>
        </div>
        <div className="flex gap-5 p-4">
          <div className="flex flex-col gap-2 items-start w-3/5 px-8" >
          <BigSelect 
              id = "import-name"
              title = "Select Import Name:"
              options={
                [ 
                  {label:"Name 1", id: "name-1"},
                  {label:"Name 2", id: "name-2"}
                ]
              }
            />
            <hr className="w-1/2"/>
            <p className="font-extrabold">Select a manifest you'd like to import</p>
            <DragAndDrog/>
            <div className="flex flex-col items-start">
              <hr className="w-4/5"/>
              <p className="small-header pt-2">Elapse Data Checking:</p>
              <p className="success-color pb-2 pt-1 font-extrabold"> No Elapsed Dates!</p>
              <hr className="w-4/5 py-1"/>
              <p className="small-header py-1">Tolerance Window:</p>
              <div className="flex items-center gap-1">
                <Toggle label="Toogle ON"/>
                <span className="px-1">|</span>
                <i className="fa-regular fa-clock fa-xl"></i>
                <p>Select Tolerance Level</p>
              </div>

            </div>
          </div>
          <div className = "w-1/3 flex flex-col items-start justify-start text-left">
            <p className="font-extrabold">Split schedule using social distancing?</p>
            <RadioButtons 
              options={["Yes","No"]}
              name={"social-distancing"} 
            />
            <hr className="w-4/5"/>
            <p className="font-extrabold pt-2">Location Checking:</p>
            <p className="success-color pb-2 font-extrabold pt-1">All available!</p>
            <hr className="w-4/5 py-1"/>
            <p className="font-extrabold">Client:</p>
            <RadioButtons 
              options={["Single","Multiple"]}
              name={"client"}
            />
            <Select 
              id = "testing-center-1"
              label = "Testing Center 1"
              title = "Select Client"
              options={
                [ 
                  {label:"Client 1", id: "client-1"},
                  {label:"Client 2", id: "client-2"}
                ]
              }
              toleranceIcon = { true }
            />
            <Select 
              id = "testing-center-2"
              label = "Testing Center 2"
              title = "Select Client"
              options={
                [ 
                  {label:"Client 3", id: "client-3"},
                  {label:"Client 4", id: "client-4"}
                ]
              }
              toleranceIcon = {true}
            />  
            <Select 
              id = "testing-center-3"
              label = "Testing Center 3"
              title = "Select Client"
              options={
                [ 
                  {label:"Client 5", id: "client-5"},
                  {label:"Client 6", id: "client-6"}
                ]
              }
              toleranceIcon = {true}
            />
            <Select 
              id = "testing-center-4"
              label = "Testing Center 4"
              title = "Select Client"
              options={
                [ 
                  {label:"Client 7", id: "client-7"},
                  {label:"Client 8", id: "client-8"}
                ]
              }
              toleranceIcon = {true}
            />
          </div>
          
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-extrabold pb-3 ">Data in the import is correct. Please continue to import.</h2>
          <div className="flex items-center gap-6">
            <button className="blue-color white-text p-0 w-36 h-6">Continue Import</button>
            <button className="cancel-button p-0 w-36 h-6">Cancel</button>
          </div>
        </div>

      </div>        
    );
  }
  