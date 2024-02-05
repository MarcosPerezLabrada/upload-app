import { useState } from 'react'
import  Modal  from './components/Modal'
import DocumentUploadView from './views/DocumentUploadView'
function App() {
  const [selected, setSelected] = useState(false)

  if( selected )
  {
    return (

      <Modal onClose = {()=>{setSelected(false)}}> 
        <DocumentUploadView/>
       </Modal>
    )
  }
  else
  {
    return (
      <>
        <button onClick = { ()=> {setSelected(true)} }>
          Upload 
        </button>
      </>
    )
  }
}

export default App
