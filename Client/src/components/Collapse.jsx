import React from "react";

const Collapse = ({ title, content }) => {
  const isCollapse = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrowToRotate = e.target.lastChild;

    if (
      divText.classList.contains("show") &&
      arrowToRotate.classList.contains("rotate")
    ) {
      divText.classList.remove("show");
      arrowToRotate.classList.remove("rotate");
    } else {
      divText.classList.add("show");
      arrowToRotate.classList.add("rotate");
    }
  };
  return (
    <div className="dropdown ">
      <button className="dropdown__button" onClick={isCollapse}>
        <h5 className="dropdown__title">{title}</h5>
        <img
          className="dropdown__arrow"
          src="../design/arrow_back_ios-24px 2.png"
          alt=""
        />
      </button>
      <div className="dropdown__content">
        <p className="dropdown__text">{content}</p>
      </div>
    </div>
  );
};

export default Collapse;
