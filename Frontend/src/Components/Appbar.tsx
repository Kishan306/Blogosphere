import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {
    return <div className="flex justify-between px-10 border-b py-">
        <Link to={'/blogs'} className="flex flex-col justify-center text-xl font-bold cursor-pointer">
                Blogosphere
        </Link>
        <div className="flex items-center justify-center"> 

            <div className="flex items-center pt-3">

            <Link to={`/publish`}>

                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            </div>

            <Avatar size={"big"} name="Admin" />
        </div>
    </div>
}