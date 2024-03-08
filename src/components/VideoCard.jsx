export const VideoCard = ({
  thumbImage,
  profileImage,
  title,
  channelName,
  views,
  timeStamp,
}) => {
  return (
    <div>
      <img
        src={thumbImage}
        alt=""
        className="rounded-2xl hover:cursor-pointer"
      />
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-2 pl-2">
          <img src={profileImage} alt="" className="w-9 h-9 rounded-full" />
        </div>
        <div className="col-span-10 pt-2 pr-2 ml-2">
          <div className="text-sm">
            {title.length < 50 ? title : title.substring(0, 50) + "..."}
          </div>
          <div className="text-xs text-gray-500">{channelName}</div>
          <div className="text-xs text-gray-500">
            {views} | {timeStamp}
          </div>
        </div>
      </div>
    </div>
  );
};
