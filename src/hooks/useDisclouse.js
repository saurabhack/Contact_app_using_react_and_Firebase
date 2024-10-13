import { useState } from "react"
function useDisclouse(){
    const [isOpen,setIsOpen]=useState()

    function onOpen(){
        setIsOpen(true)
    }
    function onClose(){
        setIsOpen(false)
    }
    return{onClose,onOpen,isOpen}
}
export default useDisclouse