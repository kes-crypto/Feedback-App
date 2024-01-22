import { Suggestion, Navbar, Sidebar } from "./Components";
import "./index.css";

function App() {
  return (
    <>
      <div class="">
        <Sidebar />
      </div>
      <div>
        <Navbar />
        <Suggestion />
      </div>
    </>
  );
}

export default App;
