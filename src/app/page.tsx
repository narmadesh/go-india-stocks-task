"use client";
import Sidebar from "./components/sidebar";
import { useEffect, useState } from "react";
import DiscussionForum from "./components/discussion-forum";
import { DiscussionForumProps, MarketStoriesProps } from "./utils";
import MarketStories from "./components/market-stories";

export default function Home() {
  const [tabs, setTabs] = useState(0);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    (async () => {
      const postData = await fetch('/api/discussion-forum');
      setPosts(await postData.json());
      const storiesData = await fetch('/api/market-stories');
      setStories(await storiesData.json());
    })()
  }, []);
  return (
    <div className="sm:flex sm:flex-row sm:gap-4 bg-white">
      <Sidebar />
      <div className="sm:hidden flex flex-row justify-between">
        <h1 className={`text-white uppercase font-semibold p-2 cursor-pointer basis-1/2  ${tabs == 0 ? 'bg-blue-800' : 'bg-blue-900'}`} onClick={() => setTabs(0)}>Discussion Forum</h1>
        <h1 className={`text-white uppercase font-semibold p-2 cursor-pointer basis-1/2  ${tabs == 1 ? 'bg-blue-800' : 'bg-blue-900'}`} onClick={() => setTabs(1)}>Market stories</h1>
      </div>
      <div className={`${tabs == 0 ? 'sm:flex block w-full' : 'sm:flex hidden'} sm:flex-col sm:gap-4 sm:basis-3/4 basis-1/2 h-screen overflow-auto`}>
        <h1 className="text-2xl text-red-700 bg-gray-200 uppercase font-semibold sm:block hidden">Discussion Forum</h1>
        <div className="flex flex-col gap-4">
          {
            posts.map(function (post: DiscussionForumProps, key) {
              return (
                <DiscussionForum key={key} {...post} />
              )
            })
          }
        </div>
      </div>
      <div className={`${tabs == 1 ? 'sm:flex block w-full' : 'sm:flex hidden'} sm:flex-col sm:gap-4 sm:basis-1/4 basis-1/2 h-screen overflow-auto`}>
        <h1 className="text-2xl text-red-700 bg-gray-200 uppercase font-semibold sm:block hidden">Market stories</h1>
        <div className="flex flex-col gap-4">
          {
            stories.map(function (story: MarketStoriesProps, key) {
              return (
                <MarketStories key={key} {...story} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
