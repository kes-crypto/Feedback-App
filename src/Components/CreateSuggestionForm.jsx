import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import back from "../Assests/back.svg";

const categoryList = ["feature", "UI", "UX", "enhancement", "bug"];

function CreateSuggestionForm({ suggestions, setSuggestions }) {
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] = useState("feature");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const changeCategory = (newCategory) => setCurrentCategory(newCategory);

  const addSuggestion = (suggestionToAdd) => {
    suggestions.push(suggestionToAdd);
    return suggestionToAdd;
  };

  const handleSubmitSuggestion = (e) => {
    e.preventDefault();

    const suggestionToAdd = {
      id: Math.random(),
      title,
      category: currentCategory,
      description: details,
      status: "suggestion",
      upvotes: 0,
    };

    try {
      if (details === "") throw new Error("The input can't be empty...");
      if (details.length < 2) throw new Error("The input is too short...");
      if (title === "") throw new Error("The input can't be empty...");
      if (title.length < 2) throw new Error("The input is too short...");

      setSuggestions((prevSuggestions) => [
        ...prevSuggestions,
        addSuggestion(suggestionToAdd),
      ]);
      setDetails("");
      setTitle("");
      setError(null);
      setSuccess("The Feedback has been added!");
      setTimeout(() => navigate("/product-feedback-app/"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="FEED bg-white rounded-lg flex-col items-center justify-center md:mx-0 mb-6">
      <Link to="#" className="back-btn">
        <button>
          <img src={back} alt="backbtn" srcset="" />
          <span className="btn-text">Go Back</span>
        </button>
      </Link>
      <div className="plus-icon">
        <span>+</span>
      </div>
      <div className="create-suggestion">
        <header>
          <h1>Create New Feedback</h1>
        </header>
        <form onSubmit={handleSubmitSuggestion}>
          <main>
            <div className="create-suggestion__title">
              <label>
                <h2>Feedback Title</h2>
                <p className="create-suggestion__title__description">
                  Add a short, descriptive headline
                </p>
              </label>
            </div>
            <div className="create-suggestion__category">
              <h2>Category</h2>
              <p className="create-suggestion__category__description">
                Choose a category for your feedback
              </p>
              /*Map category list here later.*/
            </div>
            <div className="create-suggestion__detail">
              <label>
                <h2>Feedback Detail</h2>
                <p className="create-suggestion__detail__description">
                  Include any specific comments on what should be improved,
                  added, etc.
                </p>
                <textarea
                  onChange={(e) => setDetails(e.target.value)}
                  value={details}
                ></textarea>
              </label>
            </div>
          </main>
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}
          <footer>
            <div className="save-btn">
              <Button bgColor={"purple"} content={"Add Feedback"} />
            </div>
            <Link
              to="#"
              className="create-suggestion--cancel-btn"
              onClick={() => {
                setTitle("");
                setDetails("");
                setError(null);
              }}
            >
              Cancel
            </Link>
          </footer>
        </form>
      </div>
    </div>
  );
}
export default CreateSuggestionForm;
