import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CategoryList from "../../components/CategoryList";

// Components
import Button from "../../components/common/Button";
import NavBar from "../../components/NavBar";
import Roadmap from "../../components/Roadmap";
import SideBar from "../../components/SideBar";
import SortByButton from "../../components/SortByButton";
import SuggestionList from "../../components/SuggestionList";

//images
import Icon from "../../images/icon.svg";

// Styles
import "./Home.css";

const Home = ({
  suggestionRequests,
  plannedLength,
  inProgressLength,
  liveLength,
  menuOpen,
  handleMenuToggle,
  windowWidth,
}) => {
  const { pathname } = useLocation();
  const [currentCategory, setCurrentCategory] = useState("all");
  const [currentSortCriteria, setCurrentSortCriteria] =
    useState("Most Upvotes");

  const changeCategory = (newCategory) => setCurrentCategory(newCategory);
  const changeSortCriteria = (newCriteria) =>
    setCurrentSortCriteria(newCriteria);

  const sortedSuggestions = suggestionRequests
    ? suggestionRequests.sort((a, b) => {
        const commentsA = a.comments ? a.comments.length : 0;
        const commentsB = b.comments ? b.comments.length : 0;

        const repliesA = a.comments ? a.comments : [];
        const filteredRepliesA = repliesA.filter((comment) => {
          return comment.replies ? comment.replies : null;
        });

        const repliesB = b.comments ? b.comments : [];
        const filteredRepliesB = repliesB.filter((comment) => {
          return comment.replies ? comment.replies : null;
        });

        const repliesLengthA = filteredRepliesA[0]
          ? filteredRepliesA[0].replies.length
          : 0;

        const repliesLengthB = filteredRepliesB[0]
          ? filteredRepliesB[0].replies.length
          : 0;

        const A = commentsA + repliesLengthA;
        const B = commentsB + repliesLengthB;

        switch (currentSortCriteria) {
          case "Most Upvotes":
            return b.upvotes - a.upvotes;
          case "Least Upvotes":
            return a.upvotes - b.upvotes;
          case "Most Comments":
            return B - A;
          case "Least Comments":
            return A - B;
          default:
            return b.upvotes - a.upvotes;
        }
      })
    : null;

  const suggestions = sortedSuggestions
    ? sortedSuggestions.filter((suggestion) => {
        switch (currentCategory) {
          case "all":
            return true;
          case "UI":
          case "UX":
          case "enhancement":
          case "bug":
          case "feature":
            return suggestion.category === currentCategory;
          default:
            return true;
        }
      })
    : null;

  return (
    <div className={`Home ${windowWidth >= 1366 ? "container" : null}`}>
      <nav
        className={
          windowWidth >= 768 && windowWidth < 1366 ? "container" : null
        }
      >
        <NavBar
          onClick={handleMenuToggle}
          menuOpen={menuOpen}
          windowWidth={windowWidth}
        />
        {windowWidth >= 768 && (
          <CategoryList
            currentCategory={currentCategory}
            changeCategory={changeCategory}
          />
        )}

        {windowWidth >= 768 && (
          <Roadmap
            plannedLength={plannedLength}
            inProgressLength={inProgressLength}
            liveLength={liveLength}
            windowWidth={windowWidth}
          />
        )}
      </nav>
      <SideBar
        menuOpen={menuOpen}
        currentCategory={currentCategory}
        changeCategory={changeCategory}
        plannedLength={plannedLength}
        inProgressLength={inProgressLength}
        liveLength={liveLength}
        handleMenuToggle={handleMenuToggle}
        windowWidth={windowWidth}
      />
      <div className={windowWidth >= 1366 ? "desktop-container" : null}>
        <header
          className={`Home__header ${
            menuOpen &&
            (pathname === "/product-feedback-app/" ||
              pathname === "/product-feedback-app")
              ? "dark"
              : null
          } ${windowWidth >= 768 ? "container" : null}`}
        >
          {windowWidth >= 768 && (
            <div className="suggestions-status">
              <div className="icon-suggestions">
                <img src={Icon} alt="Icon" srcset="" />
              </div>
              <div className="number-of-suggestions">
                flex font-bold gap-4 text-3xl text-white
                {suggestions.length}
                <h2>Suggestions</h2>
              </div>
            </div>
          )}
          <SortByButton
            currentSortCriteria={currentSortCriteria}
            changeSortCriteria={changeSortCriteria}
          />
          <Link
            to={"/product-feedback-app/create-suggestion"}
            className="Home__header__add-feedback--container"
          >
            <Button bgColor={"purple"} content={"+ Add Feedback"} />
          </Link>
        </header>
        <main
          className={
            menuOpen &&
            (pathname === "/product-feedback-app/" ||
              pathname === "/product-feedback-app")
              ? "dark"
              : null
          }
        >
          <SuggestionList
            suggestions={suggestions}
            menuOpen={menuOpen}
            handleMenuToggle={handleMenuToggle}
            windowWidth={windowWidth}
          />
        </main>
      </div>
    </div>
  );
};

export default Home;
