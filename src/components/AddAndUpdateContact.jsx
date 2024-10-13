import { Formik,Form,Field , ErrorMessage} from "formik"
import Modal from "./Modal"
import { addDoc, collection,doc, updateDoc } from "firebase/firestore";
import {db} from "../config/firbase.js"
import { toast } from "react-toastify";
import * as Yup from "yup"


const contacValidation=Yup.object().shape({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("invalid email").required("email is required"),
})

function AddAndUpdateContact({isOpen,onClose,isUpdate,contact}){
    async function addContacts(values){
        try{
            const contactRef=collection(db,"myContacts");
            await addDoc(contactRef,values)
            onClose()
      toast.success("Contact Added Successfully")

        }catch(error){
            console.log("error ===", error)
        }
    }
    async function update(values,id){
        try{
            const contactRef=doc(db,"myContacts",id);
            await updateDoc(contactRef,values)
            onClose()
      toast.success("Contact Updated Successfully")
        }catch(error){
            console.log("error ===", error)
        }
    }
    return(
        <>
        <div>
        <Modal isOpen={isOpen} onClose={onClose} >
        <Formik 
        validationSchema={contacValidation}
        initialValues={isUpdate ? {
            name:contact.name,
            email:contact.email,
        } : {
            name:"",
            email:"",
        }}
        onSubmit={(values)=>{
            console.log(values)
            isUpdate ? update(values,contact.id):
            addContacts(values)
        }}
        >
            <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field name="name" className="border border-black h-10" ></Field>
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="name"/>
                </div>
                </div>
                <div className="flex flex-col gap-1">
                <label htmlFor="email">email</label>
                <Field name="email" type="email" className="border border-black h-10" ></Field>
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="email"/>
                </div>
                </div>
                <button className="bg-orange-400 px-3 py-1.5 self-end border border-black">{isUpdate ? "Update" : "Add"} Contacts</button>
            </Form>
        </Formik>

        </Modal>
        </div>
        </>
    )
}
export default AddAndUpdateContact