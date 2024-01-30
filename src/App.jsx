import "./index.css";
import Logo from "./Components/Sidebar/Logo";
import Categories from "./Components/Sidebar/Categories";
import Suggestions from "./Components/Suggestion";
import Menu from "./Components/Navbar";
import Form from "./Components/CreateSuggestionForm";

function App() {
  return (
    <>
      <div className="nav-bar md:flex lg:flex-col">
        <div className="lg:flex">
          <div className="md:flex lg:flex-col">
            <Logo />
            <div className="md:flex lg:flex">
              <Categories />
            </div>
          </div>
          <div className="">
            <Suggestions />
            <Form />
          </div>
        </div>
        <div className="md:hidden lg:hidden">
          <Categories />
        </div>
      </div>

      <div className=" hidden md:hidden">
        <Menu />
      </div>
      <div className=" hidden md:hidden">
        <Suggestions />
      </div>
    </>
  );
}

export default App;
