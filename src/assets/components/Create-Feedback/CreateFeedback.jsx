import React, { useState } from "react";
import BackButton from "../micro-components/BackButton";
import newFeedback from "../../../../public/assets/shared/icon-new-feedback.svg";
import Feedback from "../../js/FeedBack";
import { post, get } from "../../js/httpRequests";
import useSWR from "swr";
import { Error, Loading } from "../micro-components/Texts";

const PicklistURL =
  "/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/categories/list-type-entries";

const CreateFeedback = ({ isActive, setIsActive }) => {
  const sectionTitle = "Create New Feedback";

  const feedbackTitle = "Feedback Title";
  const feedbackTitleDescription = "Add a short, descriptive headline";

  const categoryTitle = "Category";
  const categorySubTitle = "Choose a category for your feedback";

  const detailTitle = "Feedback Detail";
  const detailSubTitle =
    "Include any specific comments on what should be improved, added, etc.";

  const postText = "Post";
  const cancelText = "Cancel";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("ui");

  const { data, error, isLoading } = useSWR(PicklistURL, get);
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  const categoryPicklist = data?.map((item, i) => {
    return (
      <option key={i} value={item.key}>
        {item.name}
      </option>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = new Feedback({
      title: title,
      description: description,
      category: category,
    });

    post(tempObj);
    setIsActive(false);
    location.reload();
  };

  const handleClick = () => {
    setIsActive(false);
    location.reload();
  };

  return (
    <div className="pfa-create-feedback">
      <BackButton isActive={isActive} setIsActive={setIsActive} />
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

            <select
              name="categoryPicklist"
              id="categoryPicklist"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categoryPicklist}
            </select>
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
            <button
              type="reset"
              className="pfa-btn pfa-btn--secondary"
              onClick={handleClick}
            >
              {cancelText}
            </button>
            <button type="submit" className="pfa-btn pfa-btn--primary">
              {postText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateFeedback;
