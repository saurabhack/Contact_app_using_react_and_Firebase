import {useState} from "react"
import { RiEditCircleLine } from "react-icons/ri"
import { IoMdTrash } from "react-icons/io"
import { HiOutlineUserCircle } from "react-icons/hi"
import { deleteDoc } from "firebase/firestore"
import { doc } from "firebase/firestore"
import { db } from "../config/firbase.js"
import AddAndUpdateContact from "./AddAndUpdateContact.jsx"
import useDisclouse from "../hooks/useDisclouse.js"
import { toast } from "react-toastify"

function ContactCard({contact}){
  const {isOpen,onOpen,onClose}=useDisclouse()

  const deleteContact= async (id)=>{
    try {
      await deleteDoc(doc(db,"myContacts",id))
      toast.success("Contact Deleted Successfully")
    } catch (error) {
     console.log("error === ",error) 
    }
    console.log("something went wrong")
  }
    return(
        <>
        <div  className="bg-yellow-400 flex justify-around items-center p-2 rounded-md" >
                <div className="flex gap-1">
                <HiOutlineUserCircle className="text-orange-600 text-5xl"/>
                <div className="text-white">
                  <h2 className="text-medium">{contact.name}</h2>
                  <p className="text-sm">{contact.email}</p>
                </div>
                </div>
                <div className="flex text-3xl">

                  <RiEditCircleLine onClick={onOpen} className="cursor-pointer"/>
                  <IoMdTrash onClick={()=>deleteContact(contact.id)}  className="text-orange-500"/>
                {
                  console.log(contact.id)
                }
                </div>
              </div>
              <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </>
    )
}
export default ContactCard