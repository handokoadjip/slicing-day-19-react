import { Img3 } from "assets/source/image";
import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="px-4">
      <div className="container-fluid mb-5 pb-5">
        <div className="row pb-5">
          <Content
            className="order-1 order-lg-0"
            title="Introduction"
            subtitle="Simple is meaningful"
            description="Founded b Diogo Akio, a multidisciplinary creative and designer, Quadra Collective was originally founded as design stuidio in 2013. Later, the art print shop emerged from his desire to present design that could be part of peoples' lives, not as comunication nor as a tool, bt as a pleasant and meaningful visual intervetion at peoples' favorites spaces"
          />
          <Image className="order-0 order-lg-1" image={Img3} alt="image-3" />
        </div>
      </div>
    </section>
  );
};

export default index;
