import { Img2 } from "assets/source/image";
import { Content, Image } from "components/atoms";
import React from "react";

const index = () => {
  return (
    <section className="px-4">
      <div className="container-fluid mb-5 pb-5">
        <div className="row pb-5">
          <Content
            className="order-1"
            title="Aesthetic"
            subtitle="Less is enough"
            description="We believe that minimalism relieves us from the massive amount of information and heavy visual communication that we are expose every day. It's a wat of recovering out sensibility on seeing meaning and beauty in the simple. It kindly asks us for more time and patience to observe, reflexr and understand things we are surrounded by."
          />
          <Image className="order-0" image={Img2} alt="image-2" />
        </div>
      </div>
    </section>
  );
};

export default index;
