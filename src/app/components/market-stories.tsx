import Image from "next/image";
import Nature from "@/app/images/nature.jpeg"
import { MarketStoriesProps } from "../utils";

export default function MarketStories(data: MarketStoriesProps) {
    return (
        <div className="bg-white shadow-lg flex flex-col border">
            <Image src={Nature} className="w-full h-48 object-cover" alt="" />
            <h4 className="text-gray-900 font-semibold p-2">{data.title}</h4>
            <p className="text-gray-700 p-2">{data.description}</p>
        </div>
    )
}