export const MiniSidebar = () => {
    return       <div className="overflow-hidden hover:overflow-scroll w-56 pl-9 pt-2">
        <div className="hover:cursor-pointer py-6">
          <span>🏠︎ </span> <span>Home</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>▶️ </span> <span>Shorts</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>🎬</span> <span>Subscriptions</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>👨🏽‍💻 </span>
          <span>You</span>
        </div>
        <div className="hover:cursor-pointer py-6">
          <span>⌛ </span>
          <span> History</span>
        </div>
        <div className="hover:cursor-pointer py-5 -ml-1 text-lg font-semibold">
          Explore
        </div>
      </div>
}