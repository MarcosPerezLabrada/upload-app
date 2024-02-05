import { useState } from "react";

const DragAndDrog = () => {
  const [file, setFile] = useState(null);

  function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  function dropHandler(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleDroppedFile(files[0]);
    }
  }

  function handleDroppedFile(file) {
    setFile(file);
  }

  // New function to handle file selection when the "Browse" button is clicked
  function browseFiles() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  }

  // New function to handle file selection through the file input
  function handleFileInputChange(event) {
    const files = event.target.files;
    if (files.length > 0) {
      handleDroppedFile(files[0]);
    }
  }

  return (
    <div className="w-full flex flex-col gap-2 ">
      <div className="border rounded-md px-4  py-2 flex flex-col items-center gap-3">
        <div
          className="border border-dashed rounded-md w-full p-5 text-xs flex flex-col gap-3 justify-center "
          onDrop={(event) => dropHandler(event)}
          onDragOver={(event) => dragOverHandler(event)}
        >
          <i className="fa-solid fa-file-lines " style={{ color: "#fa9d26" }} />
          {/* Added button to trigger file selection */}
          <div className="flex items-center justify-center"> 
            <span>Drag & Drop Or</span>
            <button className="bg-white pl-1 font-extrabold" onClick={browseFiles}>Browse</button>
          </div>
        </div>
        {/* Hidden file input to trigger file selection */}
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
        <button className="p-0 w-32 h-5 blue-color white-text">Upload Manifest</button>
      </div>
      { !!file &&
        <>
          <hr className="w-full" />
          <div className="flex items-center gap-2 w-full">
            <i className="fa-regular fa-file-image fa-xl" style={{ color: "#fa9d26" }}></i>
            <div className="flex flex-col w-full ">
              <div className="flex justify-between w-full">
                <p style={{ color: "#cac9ce" }}>{file.name}</p>
                <p className="mr-0">{Math.round((file.size / 1048576) * 10) / 10}MB</p>
              </div>  
              <div class="progress-container">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
          <hr className="w-full" />
        </>
      }
    </div>
  );
}

export default DragAndDrog;
