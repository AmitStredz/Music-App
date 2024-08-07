import Home from "./components/home";
import Library from "./components/library";
import Centre from "./components/centre";
import NowPlaying from "./components/NowPlaying";

export default function App() {
  return (
    <div className="h-[90vh] w-full overflow-hidden">
      <div className="grid gap-2 grid-cols-4 grid-rows-7 w-full max-h-[100vh]">
        <div className="row-start-1">
          <Home />
        </div>
        <div className="row-start-2 row-end-7 row-span-4">
          <Library />
        </div>
        <div className=" row-start-1 row-end-7 col-start-2 col-end-4">
          <Centre></Centre>
        </div>
      </div>
      <div className=" w-full fixed bottom-0 ">
        <NowPlaying />
      </div>
    </div>
  );
}
