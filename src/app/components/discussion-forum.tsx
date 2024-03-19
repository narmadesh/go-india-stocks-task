import Image from "next/image";
import { FaHeart, FaEye, FaComment, FaShare } from "react-icons/fa";
import UserImage from "@/app/images/img_avatar2.png";
import { DiscussionForumProps } from "../utils";

export default function DiscussionForum(data: DiscussionForumProps) {
    return (
        <div className="bg-white shadow-lg p-4 flex justify-start items-start gap-2 border">
            <Image src={UserImage} width={50} height={50} className="rounded-full" alt="" />
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                    <h4 className="tetx-lg text-gray-900 font-semibold">{data.title}</h4>
                    <span className="px-4 bg-blue-900 text-white rounded-xl">{data.sector}</span>
                </div>
                <p className="text-gray-700">{data.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4">
                    <div className="flex items-center gap-2">
                        <FaHeart />
                        {data.likes}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEye />
                        {data.views}
                    </div>
                    <div className="flex items-center gap-2">
                        <FaComment />
                        {data.comments} Comments
                    </div>
                    <div className="flex items-center gap-2">
                        <FaShare />
                        Share
                    </div>
                </div>
            </div>
            <div className="sm:text-right text-blue-900 sm:whitespace-nowrap">
                {data.postedOn}
            </div>
        </div>
    )
}