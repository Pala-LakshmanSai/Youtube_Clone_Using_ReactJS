import { VideoGrid } from "./components/VideoGrid";
import { AppBar } from "./components/AppBar";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 pt-20">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-10">
          <VideoGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
