
import {useParams} from "react-router-dom";
import { Loading } from "../Components/Loading";
import { Appbar } from "../Components/Appbar";
import { useBlog } from "../Hooks";
import {ExpandBlog} from "../Components/ExpandBlog";


export  const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className="flex flex-col justify-center h-screen">
                
                <div className="flex justify-center">
                    <Loading />
                </div>
            </div>
        </div>
    }
    return <div>
        <ExpandBlog blog={blog} />
    </div>
}