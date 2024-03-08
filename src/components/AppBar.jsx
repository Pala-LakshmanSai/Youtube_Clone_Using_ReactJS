export const AppBar = () => {
  return (
    <div className="fixed w-full bg-white">
      <div className=" flex justify-between items-center p-3 px-8">
        <div>
          <img src="../../public/youtube.png" alt="" className="h-10" />
        </div>
        <div className="flex rounded-full border-2 border-gray-300 items-center pr-2 bg-gray-100">
          <input
            type="text"
            placeholder="Search"
            style={{ width: "40vw" }}
            className="h-11 p-5 px-5 font rounded-l-full focus:outline-blue-500 outline-1"
          />
          <div className="w-16 pl-4 hover:cursor-pointer">
            <svg
              className="w-10 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </div>
        </div>

        <div>sign in </div>
      </div>
    </div>
  );
};
