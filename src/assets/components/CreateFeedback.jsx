import React, { useState } from "react";
import BackButton from "./micro-components/BackButton";
import newFeedback from "../../../public/assets/shared/icon-new-feedback.svg";
import Feedback from "../js/FeedBack";
import { post } from "../js/httpRequests";

const CreateFeedback = () => {
  const sectionTitle = "Create New Feedback";

  const feedbackTitle = "Feedback Title";
  const feedbackTitleDescription = "Add a short, descriptive headline";

  const categoryTitle = "Category";
  const categorySubTitle = "Choose a category for your feedback";

  const detailTitle = "Feedback Detail";
  const detailSubTitle =
    "Include any specific comments on what should be improved, added, etc.";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("enhancement");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = new Feedback({
      title: title,
      description: description,
      category: category,
    });

    post(tempObj);
  };

  return (
    <div className="pfa-create-feedback">
      <BackButton />
      <div className="pfa-main">
        <img src={newFeedback} className="pfa-main__img" />
        <form className="pfa-feedback-form" onSubmit={handleSubmit}>
          <h1 className="pfa-feedback-form__h1">{sectionTitle}</h1>
          <div className="pfa-feedback-title">
            <h4 className="pfa-feedback-title__h4">{feedbackTitle}</h4>
            <h4 className="pfa-feedback-title__p">
              {feedbackTitleDescription}
            </h4>
            <input
              type="text"
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="pfa-feedback-category">
            <h4 className="pfa-feedback-title__h4">{categoryTitle}</h4>
            <h4 className="pfa-feedback-title__p">{categorySubTitle}</h4>
            <input
              type="text"
              id="name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="pfa-feedback-detail">
            <h4 className="pfa-feedback-title__h4">{detailTitle}</h4>
            <h4 className="pfa-feedback-title__p">{detailSubTitle}</h4>
            <textarea
              type="text"
              id="name"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="pfa-feedback-buttons">
            <button type="reset" className="pfa-btn pfa-btn--secondary">
              Cancel
            </button>
            <button type="submit" className="pfa-btn pfa-btn--primary">
              POST
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeedback;
