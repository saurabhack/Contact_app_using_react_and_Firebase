import contact from "../assets/contact.png"
function NotFoundContact(){
    console.log("function is woriking ")
    return(
        <>
        <div className="flex m-auto h-[80vh] gap-4 justify-center items-center ">
            <div>
            <img src={contact} alt="" />
            </div>
            <h1 className="text-white text-2xl font-semibold">Contact Not Found</h1>
        </div>
        </>
    )
}
export default NotFoundContact