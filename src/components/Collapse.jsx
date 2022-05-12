import React from "react";

const Collapse = ({ title, content }) => {
  const isCollapse = (e) => {
    e.preventDefault();
    const divText = e.target.nextSibling;
    const arrowToRotate = e.target;

    if (
      !divText.classList.contains("show") &&
      !arrowToRotate.classList.contains("rotate")
    ) {
      divText.classList.add("show");
      arrowToRotate.classList.add("rotate");
    } else {
      divText.classList.remove("show");
      arrowToRotate.classList.remove("rotate");
    }
  };
  return (
    <div className="dropdown ">
      <button type="button" className="dropdown__button" onClick={isCollapse}>
        {/* <h5 className="dropdown__title">{title}</h5> */}
        {/* <img
          className="dropdown__arrow"
          src="../design/arrow_back_ios-24px 2.png"
          alt=""
        /> */}
        {title}
      </button>
      <div className="dropdown__content">
        {Array.isArray(content) ? (
          <ul className="dropdown__list">
            {content.map((equipment, index) => (
              <li key={index} className="dropdown__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="dropdown__text">{content}</p>
        )}
      </div>
    </div>
  );
};

export default Collapse;
