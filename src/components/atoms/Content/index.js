import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["col-lg-6"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <div className="wrapper h-100">
        <div className="d-flex flex-column w-75 h-100">
          <p className="fw-bold mb-auto border-top pt-3 text-fade-black-1">
            {props.title}
          </p>
          {props.subtitle !== "" && (
            <h2 className="fw-bold mb-5">{props.subtitle}</h2>
          )}
          <p className="mp-0">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  title: propTypes.string,
  subtitle: propTypes.string,
  description: propTypes.string,
};

export default index;
