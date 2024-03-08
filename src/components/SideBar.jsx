import { useState } from "react";
import "./SideBarr.css";
export const SideBar = () => {
  const [categories, setCategories] = useState([
    {
      emoji: "🔥 ",
      name: "Trending",
    },
    {
      emoji: "🛒 ",
      name: "Shopping",
    },
    {
      emoji: "🎧 ",
      name: "Music",
    },
    {
      emoji: "🎞️ ",
      name: "Films",
    },
    {
      emoji: "🎙️ ",
      name: "Live",
    },
    {
      emoji: "🎮 ",
      name: "Gaming",
    },
    {
      emoji: "📰 ",
      name: "News",
    },
    {
      emoji: "🏆 ",
      name: "Sport",
    },
    {
      emoji: "💡 ",
      name: "Learning",
    },
    {
      emoji: "🎙️ ",
      name: "Podcast",
    },
    {
      emoji: "🧳 ",
      name: "Travel",
    },
    {
      emoji: "🌄 ",
      name: "Photography",
    },
  ]);
  return (
    <div className="fixed flex flex-col justify-evenly  h-screen text-left text-md font-normal -mt-5">
      <div className="overflow-hidden hover:overflow-scroll w-56 pl-9 pt-2">
        <div className="hover:cursor-pointer py-6">
          <span>🏠︎ </span> <span>Home</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>▶️ </span> <span>Shorts</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>🎬</span> <span>Subscriptions</span>
        </div>
        {/* <div className="w-52 -ml-9 border-b-2 border"></div> */}
        <div className="hover:cursor-pointer py-6">
          <span>👨🏽‍💻 </span>
          <span>You</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>⌛ </span>
          <span> History</span>
        </div>
        {/* <div className="w-52 -ml-9 border-b-2 border"></div> */}
        <div className="hover:cursor-pointer py-5 -ml-1 text-lg font-semibold">
          Explore
        </div>
        {categories.map((category, index) => (
          <div key={index} className="cursor-pointer py-6">
            <span>{category.emoji}</span>
            <span>{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
