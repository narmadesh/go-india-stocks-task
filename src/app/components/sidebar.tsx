"use client";
import { useState } from "react";
import { FaBell, FaCaretDown, FaCaretRight, FaEnvelope, FaInfo, FaInfoCircle, FaUser } from "react-icons/fa";

export default function Sidebar() {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={`h-screen overflow-auto bg-blue-900 sm:basis-1/4 basis-1/2 text-white ${toggle ? 'hidden' : 'block sm:relative absolute'}`}>
                <div className="flex flex-row justify-between items-center p-4">
                    <div className="flex items-center gap-2">
                        <FaUser className="w-6 h-6" />
                        <span>Hello, User</span>
                    </div>
                    <FaBell className="w-6 h-6" />
                </div>
                <hr className="my-4" />
                <ul className="flex flex-col gap-1">
                    <li className="flex items-center justify-between p-4 bg-gray-900">
                        <div className="flex gap-2">
                            <FaEnvelope className="w-6 h-6" />
                            Discussion Forum
                        </div>
                        <FaCaretDown className="w-4 h-4" />
                    </li>
                    <li className="flex items-center gap-2 p-4">
                        <FaInfoCircle className="w-6 h-6" />
                        Marketing Stories
                    </li>
                    <li className="p-4">
                        <span className="ml-8">Sentiment</span>
                    </li>
                    <li className="p-4">
                        <span className="ml-8">Market</span>
                    </li>
                    <li className="p-4">
                        <span className="ml-8">Sector</span>
                    </li>
                    <li className="p-4">
                        <span className="ml-8">Watchlist</span>
                    </li>
                    <li className="p-4">
                        <span className="ml-8">Events</span>
                    </li>
                    <li className="p-4">
                        <span className="ml-8">News / Interview</span>
                    </li>
                </ul>

            </div>
            <button type="button" className={`w-6 h-24 flex justify-center items-end flex-col text-white bg-blue-900 top-1/2 ${toggle ? 'left-0' : 'sm:left-[19%] left-[55%]'} cursor-pointer absolute`} onClick={() => setToggle(!toggle)}>
                <FaCaretRight className="w-4 h-4" />
            </button>
        </>
    )
}