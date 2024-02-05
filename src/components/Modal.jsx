const Modal = ({onClose, children}) => 
( <div className="py-6 px-4 rounded-xl bg-white ">
    <div className="flex justify-start">
   
    <i className="fa-solid fa-rectangle-xmark fa-2xl" style={{color: "#1c3e6e",}} onClick={onClose}></i>
    </div >
    {
        children
    }
</div>
)


export default Modal


/*
 <button className="w-6 h-10 flex items-center justify-center text-xl blue-color white-text " >
        X
    </button>
    */