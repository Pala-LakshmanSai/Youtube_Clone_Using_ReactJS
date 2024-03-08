import "./SideBarr.css";
export const SideBar = () => {
  const categories = [
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🛒",
      name: "Shopping",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
    {
      emoji: "🔥",
      name: "Trending",
    },
  ];
  return (
    <div className="fixed flex flex-col justify-evenly  h-screen w-48 text-left text-md font-normal -mt-5 side-bar">
      <div className="overflow-hidden hover:overflow-scroll pl-9 pt-2">
        <div className="hover:cursor-pointer py-5">🏠︎ Home</div>
        <div className="hover:cursor-pointer py-5">▶️ Shorts</div>
        <div className="hover:cursor-pointer py-5">🎬 Subscriptions</div>
        <div
          className="w-44 -ml-9"
          style={{ borderBottom: "1px solid gray" }}
        ></div>
        <div className="hover:cursor-pointer py-5">👨🏽‍💻 You</div>
        <div className="hover:cursor-pointer py-5">⌛ History</div>
        <div
          className="w-44 -ml-9"
          style={{ borderBottom: "1px solid gray" }}
        ></div>
        <div className="hover:cursor-pointer py-5 -ml-1 text-lg font-semibold">
          Explore
        </div>
        <div className="hover:cursor-pointer py-5">🔥 Trending</div>
        <div className="hover:cursor-pointer py-5">🛒 Shopping</div>
        <div className="hover:cursor-pointer py-5">🎧Music</div>
        <div className="hover:cursor-pointer py-5">🎞️ Films</div>
        <div className="hover:cursor-pointer py-5">🎙️Live</div>
        <div className="hover:cursor-pointer py-5">🎮 Gaming</div>
        <div className="hover:cursor-pointer py-5">📰 News</div>
        <div className="hover:cursor-pointer py-5">🏆 Sport</div>
        <div className="hover:cursor-pointer py-5">💡Learning</div>
        <div className="hover:cursor-pointer py-5">🎙️ Podcast</div>
        <div className="hover:cursor-pointer py-5">💡Learning</div>
        <div className="hover:cursor-pointer py-5">💡Learning</div>
        <div className="hover:cursor-pointer py-5">💡Learning</div>
        <div className="hover:cursor-pointer py-5">💡Learning</div>
      </div>
    </div>
  );
};
<div className="hover:cursor-pointer">💡Learning</div>;
