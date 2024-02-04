const DragAndDrog = ()=> {

  function dragOverHandler(event) 
  {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
  }

  function dropHandler(event) 
  {
      event.preventDefault();

      const files = event.dataTransfer.files;

      if (files.length > 0) {
          handleDroppedFile(files[0]);
      }
  }

  function handleDroppedFile(file) {
      // Do something with the dropped file
      console.log('Dropped file:', file);

      // You can perform additional actions with the file, such as reading its contents or uploading it to a server.
      // For example:
      // const reader = new FileReader();
      // reader.onload = function (e) {
      //     const fileContents = e.target.result;
      //     console.log('File contents:', fileContents);
      // };
      // reader.readAsText(file);
  }

    return (
      <div className="border rounded-md p-4 flex flex-col items-center gap-3">
        <div 
          className="border border-dashed rounded-md w-full p-6 text-xs flex gap-3 justify-center"
          onDrop={(event)=>dropHandler(event)} 
          onDragOver={(event)=>dragOverHandler(event)}
        >
            Drag and Drop Or Browse
        </div>
        <button  className="py-2 px-4 text-xs w-fit blue-color white-text">Upload Manifest</button>
      </div>
    );
  }
  
export default DragAndDrog
/* <>
        <p className="text-3xl font-bold underline">Select a manifest that you'd like to import</p>
        <form  method="post" enctype="multipart/form-data">
          <label for="fileUpload">Select a document to upload:</label>
          <input type="file" id="fileUpload" name="fileUpload" />
          <button type="submit">Upload</button>
        </form>
      </>
*/