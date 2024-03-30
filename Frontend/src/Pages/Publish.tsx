import { useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Backend_URL } from "../config";



export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const handleSubmit= async () => {
        const response = await axios.post(`${Backend_URL}/api/v1/blog`, {
            title,
            content: description
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        navigate(`/blog/${response.data.id}`)
    }

    return <div>
        <Appbar />
        <div className="flex justify-center w-full pt-8"> 
            <div className="w-full max-w-screen-lg">
                <input onChange={(e) => {
                    setTitle(e.target.value)
                }} type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />

                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={handleSubmit} type="submit" className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Publish post
                </button>
            </div>
        </div>
    </div>
}


function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border">
            <div className="w-full my-2 bg-white rounded-b-lg">
                <label className="sr-only">Publish post</label>
                <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-0 pl-2 text-sm text-gray-800 bg-white border-0 focus:outline-none" placeholder="Write an article..." required />
            </div>
        </div>
       </div>
    </div>
    
}