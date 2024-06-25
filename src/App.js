import "./index.css"
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";
function App() {
  return (
      <>
        <div className="bg-black h-screen">
            <div className="flex h-[100%]">
                <Sidebar />
                <Main />
            </div>
        </div>
      </>
  );
}

export default App;
