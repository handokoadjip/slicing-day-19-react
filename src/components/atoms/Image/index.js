import React from "react";
import propTypes from "prop-types";

const index = (props) => {
  const className = ["col-lg-6"];
  className.push(props.className);

  return (
    <div className={className.join(" ")}>
      <div className="wrapper d-flex align-items-end">
        <figure className="m-0 w-100">
          <img className="w-100 h-image-80vh" src={props.image} alt={props.alt} />
        </figure>
      </div>
    </div>
  );
};

index.propTypes = {
  className: propTypes.string,
  image: propTypes.string,
  alt: propTypes.string,
};

export default index;
