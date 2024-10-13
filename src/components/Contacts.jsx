import { useEffect, useState } from "react"
import { collection, getDocs } from "firebase/firestore"
import {db} from "../config/firbase"
function Contact(){
    
    return(
        <>
        <div>
            <div>
                {
                    contact.map((val,i)=>{
                        return <div key={i} >
                            <h1 >{val.name}</h1>
                            </div>
                    })
                }
            </div>
        </div>
        </>
    )
}
export default Contact