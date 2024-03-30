import { Link } from "react-router-dom";
interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number;
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
        <div className="w-screen max-w-screen-md p-4 pb-4 border-b cursor-pointer border-slate-200">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="flex flex-col justify-center pl-2 text-sm font-extralight">{authorName}</div>
                <div className="flex flex-col justify-center pl-2 ">
                    <Circle />
                </div>
                <div className="flex flex-col justify-center pl-2 text-sm font-thin text-slate-500">
                    {publishedDate}
                </div>
            </div>
            <div className="pt-2 text-xl font-semibold">
                {title}
            </div>
            <div className="font-thin text-md">
                {content.slice(0, 100) + "..."}
            </div>
            <div className="pt-4 text-sm font-thin text-slate-500">
                {`${Math.ceil(content.length / 75)} minute(s) read`}
            </div>
        </div>
    </Link>
}

export function Circle() {
    return <div className="w-1 h-1 rounded-full bg-slate-500">

    </div>
}

export function Avatar({  size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={` font-extralight text-white dark:text-gray-300`}>
        
<div className={`relative  ${size==="small" ? "w-8 h-8" : "w-10 h-10"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
    <svg className={`${size==="small" ? "w-8 h-8 px-1" : "w-10 h-10"}  text-gray-400 `} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>

    </span>
</div>
}