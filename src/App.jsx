import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot,getDoc } from "firebase/firestore";
import { db } from "./config/firbase.js";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./hooks/useDisclouse.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen} =useDisclouse()

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "myContacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactLists);
        });
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  function searchUser(e){
    const value=e.target.value
    const contactsRef = collection(db, "myContacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          const filteredContactList=contactLists.filter((contact)=>contact.name.toLowerCase().includes(value))
          setContacts(filteredContactList);
          return filteredContactList;
  })


  }
  

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
            onChange={searchUser}
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          { contacts.length <= 0 ? <NotFoundContact/> :
          contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
          ))
          }
            
        </div>
      </div>  
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
      <ToastContainer position="top-center"/>
    </>
  );
};

export default App;