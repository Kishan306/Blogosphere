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

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}