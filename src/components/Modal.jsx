const Modal = ({onClose, children}) => 
( <div className="p-4 rounded bg-white">
    <div className="flex justify-start">
    <button className="w-6 h-10 flex items-center justify-center text-xl blue-color white-text " onClick={onClose}>
        X
    </button>
    </div >
    {
        children
    }
</div>
)


export default Modal