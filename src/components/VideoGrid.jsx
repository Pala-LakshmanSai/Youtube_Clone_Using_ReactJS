import { useState } from "react";
import { VideoCard } from "./VideoCard";
export const VideoGrid = () => {
  const [cardData, setCardData] = useState([
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
    {
      thumbImage: "/thumb1.jpg",
      profileImage: "/profile1.jpg",
      title: "Family Star Teaser - Vijay Deverakonda | Mrunal Thakur | ",
      channelName: "Tseries",
      views: "10M Views",
      timeStamp: "14hours ago",
    },
  ]);
  return (
    <div className="videogrid grid grid-cols-1 gap-x-5 gap-y-8 mx-6 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4">
      {cardData.map((video, index) => (
        <div key={index}>
          <VideoCard
            thumbImage={video.thumbImage}
            profileImage={video.profileImage}
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            timeStamp={video.timeStamp}
          />
        </div>
      ))}
    </div>
  );
};
